import {
  Controller,
  NotFoundException,
  Get,
  Post,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { API_VERSION_ROUTES, TAGS } from '../../constants';
import { MiningService } from './mining.service';
import { MiningEntity } from './mining.entity';
import { MiningCreateDto, MiningUpdateDto } from './dto';

@Controller(`${API_VERSION_ROUTES.v1}/mining`)
export class MiningController {
  constructor(private readonly miningService: MiningService) {}

  @ApiOkResponse({
    description: 'Mining has been found.',
    type: MiningEntity,
  })
  @ApiNotFoundResponse({
    description: 'Mining not found.',
  })
  @ApiOperation({
    tags: [TAGS.MINING],
    operationId: 'getOneMining',
    summary: 'Returning information about mining',
  })
  @Get(':id')
  async getOneMining(@Param('id') id: string) {
    const mining = await this.miningService.getOneMining(id);

    if (!mining) {
      throw new NotFoundException();
    }

    return mining;
  }

  @ApiCreatedResponse({
    description: 'Mining has been successfully created.',
    type: MiningEntity,
  })
  @ApiOperation({
    tags: [TAGS.MINING],
    operationId: 'postMining',
    summary: 'Creating new mining in db',
  })
  @Post()
  async postMining(
    @Body('who_invited_id') who_invited_id: string,
    @Body() data: MiningCreateDto,
  ) {
    return who_invited_id
      ? this.miningService.createMiningWithReferral(data)
      : this.miningService.createMining(data);
  }

  @ApiOkResponse({
    description: 'Mining has been updated.',
    type: MiningEntity,
  })
  @ApiNotFoundResponse({
    description: 'Mining not found.',
  })
  @ApiOperation({
    tags: [TAGS.MINING],
    operationId: 'patchMining',
    summary: 'Updating mining data',
  })
  @Patch()
  async patchUser(@Body() data: MiningUpdateDto) {
    const mining = await this.miningService.updateMining(data);

    if (!mining) {
      throw new NotFoundException();
    }

    return mining;
  }
}
