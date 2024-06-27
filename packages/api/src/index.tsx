export { ApiProvider, useApi } from './provider';
export { useQuery } from './use-query';
export type { Fetch } from './use-query';

export * as predicates from './predicates';

export type {
  UserEntity,
  UserCreateDto,
  UserUpdateDto,

  WalletEntity,

  MiningEntity,
  MiningCreateDto,
  MiningUpdateDto,

  WithdrawalEntity,
  WithdrawalCreateDto,
  WithdrawalUpdateDto,

  TaskEntity,
  TaskCreateDto,
  TaskUpdateDto,

  CompletedTaskEntity,
  CompletedTaskCreateDto,

  LeadersStatisticReadDto,
} from './generated';
