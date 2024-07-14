import { WithdrawalStatusEnum } from '@common_bot/shared';

export type GetQuery = {
  limit: number;
  offset: number;
  sort: 'ASC' | 'DESC';
  status?: WithdrawalStatusEnum;
  user_id?: string;
}
