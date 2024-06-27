/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export { CompletedTaskCreateDto } from './models/CompletedTaskCreateDto';
export type { CompletedTaskEntity } from './models/CompletedTaskEntity';
export type { CountriesStatisticReadDto } from './models/CountriesStatisticReadDto';
export type { GendersStatisticReadDto } from './models/GendersStatisticReadDto';
export type { LeadersStatisticReadDto } from './models/LeadersStatisticReadDto';
export type { MiningCreateDto } from './models/MiningCreateDto';
export type { MiningEntity } from './models/MiningEntity';
export { MiningUpdateDto } from './models/MiningUpdateDto';
export { ShortUserReadDto } from './models/ShortUserReadDto';
export type { StatisticsReadDto } from './models/StatisticsReadDto';
export { TaskCreateDto } from './models/TaskCreateDto';
export { TaskEntity } from './models/TaskEntity';
export type { TaskUpdateDto } from './models/TaskUpdateDto';
export { UserCreateDto } from './models/UserCreateDto';
export { UserEntity } from './models/UserEntity';
export { UserUpdateDto } from './models/UserUpdateDto';
export type { WalletEntity } from './models/WalletEntity';
export { WithdrawalCreateDto } from './models/WithdrawalCreateDto';
export { WithdrawalEntity } from './models/WithdrawalEntity';
export { WithdrawalUpdateDto } from './models/WithdrawalUpdateDto';

export { MiningService } from './services/MiningService';
export { TasksService } from './services/TasksService';
export { UsersService } from './services/UsersService';
export { WalletsService } from './services/WalletsService';
export { WithdrawalsService } from './services/WithdrawalsService';
