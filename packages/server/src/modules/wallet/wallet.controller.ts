import {
  Controller,
  NotFoundException,
  Get,
  Param,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { API_VERSION_ROUTES, TAGS } from '../../constants';
import { WalletService } from './wallet.service';
import { WalletEntity } from './wallet.entity';

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
    operationId: 'getOneWithdrawal',
    summary: 'Returning information about wallet',
  })
  @Get(':id')
  async getOneWithdrawal(@Param('id') id: string) {
    const withdrawal = await this.walletService.getOneWallet(id);

    if (!withdrawal) {
      throw new NotFoundException();
    }

    return withdrawal;
  }
}
