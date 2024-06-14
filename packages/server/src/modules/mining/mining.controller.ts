import {
  Controller,
  NotFoundException,
  Patch,
  Body,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  // ApiCreatedResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { API_VERSION_ROUTES, TAGS } from '../../constants';
import { MiningService } from './mining.service';
import { MiningEntity } from './mining.entity';
import { MiningUpdateDto } from './dto';

@Controller(`${API_VERSION_ROUTES.v1}/mining`)
export class MiningController {
  constructor(private readonly miningService: MiningService) {}

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
