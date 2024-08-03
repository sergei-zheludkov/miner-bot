export { ApiProvider, useApi } from './provider';
export { useQuery } from './use-query';
export type { Fetch } from './use-query';

export * as predicates from './predicates';

export type {
  UserEntity,
  UserCreateDto,
  UserUpdateDto,
  UsersAndTogglesReadDto,
  LeadersStatisticReadDto,

  WalletEntity,
  WalletUpdateDto,

  MiningEntity,
  MiningCreateDto,
  MiningUpdateDto,

  WithdrawalEntity,
  WithdrawalsReadDto,
  WithdrawalCreateDto,
  WithdrawalUpdateDto,

  TaskEntity,
  TaskCreateDto,
  TaskUpdateDto,

  CompletedTaskEntity,
  CompletedTaskCreateDto,

  ToggleEntity,
  ToggleUpdateDto,
} from './generated';
