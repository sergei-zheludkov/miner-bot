export { ApiProvider, useApi } from './provider';
export { useQuery } from './use-query';

export * as predicates from './predicates';

export type {
  UserEntity,
  UserCreateDto,
  UserUpdateDto,

  WalletEntity,

  MiningEntity,
  MiningUpdateDto,

  TaskEntity,
  TaskCreateDto,
  TaskUpdateDto,

  CompletedTaskEntity,
  CompletedTasksCreateDto,
} from './generated';
