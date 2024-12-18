import {
  Controller,
  NotFoundException,
  Get,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { API_VERSION_ROUTES, TAGS } from '../../constants';
import { WalletService } from './wallet.service';
import { WalletEntity } from './wallet.entity';
import { WalletUpdateDto } from './dto';

@Controller(`${API_VERSION_ROUTES.v1}/wallets`)
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @ApiOkResponse({
    description: 'Wallet has been found.',
    type: WalletEntity,
  })
  @ApiNotFoundResponse({
    description: 'Wallet not found.',
  })
  @ApiOperation({
    tags: [TAGS.WALLETS],
    operationId: 'getOneWallet',
    summary: 'Returning information about wallet',
  })
  @Get(':id')
  async getOneWallet(@Param('id') id: string) {
    const wallet = await this.walletService.getOneWallet(id);

    if (!wallet) {
      throw new NotFoundException();
    }

    return wallet;
  }

  @ApiOkResponse({
    description: 'Wallet has been updated.',
    type: WalletEntity,
  })
  @ApiNotFoundResponse({
    description: 'Wallet not found.',
  })
  @ApiOperation({
    tags: [TAGS.WALLETS],
    operationId: 'patchWallet',
    summary: 'Updating wallet data',
  })
  @Patch()
  async patchWallet(@Body() data: WalletUpdateDto) {
    const task = await this.walletService.updateWallet(data);

    if (!task) {
      throw new NotFoundException();
    }

    return task;
  }
}
