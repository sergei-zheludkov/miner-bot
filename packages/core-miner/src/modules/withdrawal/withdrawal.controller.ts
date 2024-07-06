import {
  Controller,
  NotFoundException,
  Get,
  Post,
  Patch,
  Query,
  Param,
  Body,
} from '@nestjs/common';
import {
  ApiQuery,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { WithdrawalStatusEnum } from '@common_bot/shared';
import { API_VERSION_ROUTES, TAGS } from '../../constants';
import { WithdrawalService } from './withdrawal.service';
import { WithdrawalEntity } from './withdrawal.entity';
import { WithdrawalCreateDto, WithdrawalUpdateDto } from './dto';

@Controller(`${API_VERSION_ROUTES.v1}/withdrawals`)
export class WithdrawalController {
  constructor(private readonly withdrawalService: WithdrawalService) {}

  @ApiOkResponse({
    description: 'Withdrawal has been found.',
    type: WithdrawalEntity,
  })
  @ApiNotFoundResponse({
    description: 'Withdrawal not found.',
  })
  @ApiOperation({
    tags: [TAGS.WITHDRAWALS],
    operationId: 'getOneWithdrawal',
    summary: 'Returning information about withdrawal',
  })
  @Get(':id')
  async getOneWithdrawal(@Param('id') id: number) {
    const withdrawal = await this.withdrawalService.getOneWithdrawal(id);

    if (!withdrawal) {
      throw new NotFoundException();
    }

    return withdrawal;
  }

  @ApiOkResponse({
    description: 'Withdrawals has been found.',
    type: [WithdrawalEntity],
  })
  @ApiOperation({
    tags: [TAGS.WITHDRAWALS],
    operationId: 'getWithdrawals',
    summary: 'Returning information about withdrawals',
  })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'status', required: false, type: String })
  @Get()
  getWithdrawals(
    @Query('status') status?: WithdrawalStatusEnum,
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
  ) {
    return this.withdrawalService.getWithdrawals({ limit, offset, status });
  }

  @ApiCreatedResponse({
    description: 'Withdrawals has been successfully created.',
    type: WithdrawalEntity,
  })
  @ApiOperation({
    tags: [TAGS.WITHDRAWALS],
    operationId: 'postWithdrawal',
    summary: 'Creating new withdrawal in db',
  })
  @Post()
  async createWithdrawal(@Body() data: WithdrawalCreateDto) {
    return this.withdrawalService.createWithdrawal(data);
  }

  @ApiOkResponse({
    description: 'Withdrawals has been updated.',
    type: WithdrawalEntity,
  })
  @ApiNotFoundResponse({
    description: 'Withdrawals not found.',
  })
  @ApiOperation({
    tags: [TAGS.WITHDRAWALS],
    operationId: 'updateWithdrawal',
    summary: 'Updating withdrawal data',
  })
  @Patch()
  async updateWithdrawal(@Body() data: WithdrawalUpdateDto) {
    const user = await this.withdrawalService.updateWithdrawal(data);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
