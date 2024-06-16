import { WithdrawalStatusEnum } from '@common_bot/shared';

export type GetQuery = {
  limit: number;
  offset: number;
  status?: WithdrawalStatusEnum;
}
