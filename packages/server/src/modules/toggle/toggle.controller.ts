import {
  Controller,
  Get,
  Patch,
  Body,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { API_VERSION_ROUTES, TAGS } from '../../constants';
import { ToggleService } from './toggle.service';
import { ToggleEntity } from './toggle.entity';
import { ToggleUpdateDto } from './dto';

@Controller(`${API_VERSION_ROUTES.v1}/toggles`)
export class ToggleController {
  constructor(private readonly toggleService: ToggleService) {}
  // @ApiOkResponse({
  //   description: 'Toggles has been found.',
  //   type: [ToggleEntity],
  // })
  // @ApiNotFoundResponse({
  //   description: 'Toggles not found.',
  // })
  // @ApiOperation({
  //   tags: [TAGS.TOGGLES],
  //   operationId: 'getToggles',
  //   summary: 'Returning information about toggles',
  // })
  // @Get()
  // async getToggles() {
  //   const toggles = await this.toggleService.getToggles();
  //
  //   if (!toggles) {
  //     throw new NotFoundException();
  //   }
  //
  //   return toggles;
  // }

  @ApiOkResponse({
    description: 'Toggle has been updated.',
    type: ToggleEntity,
  })
  @ApiNotFoundResponse({
    description: 'Toggle not found.',
  })
  @ApiOperation({
    tags: [TAGS.TOGGLES],
    operationId: 'patchToggle',
    summary: 'Updating toggle data',
  })
  @Patch()
  async patchToggle(@Body() data: ToggleUpdateDto) {
    const toggle = await this.toggleService.updateToggle(data);

    if (!toggle) {
      throw new NotFoundException();
    }

    return toggle;
  }
}
