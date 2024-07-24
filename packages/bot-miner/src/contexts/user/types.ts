import type { ReactNode } from 'react';
import type {
  Fetch,
  // ToggleEntity,
  UsersAndTogglesReadDto,
} from '@common_bot/api';

export type GetUserCallback = Fetch<never, UsersAndTogglesReadDto>;

export type ContextState = {
  referralId: string | null;
  user: UsersAndTogglesReadDto['user'];
  toggles: UsersAndTogglesReadDto['toggles'];
  isAdmin: boolean;

  getUser: GetUserCallback;
  isGetCalled: boolean;
  isGetLoading: boolean;
  isGetSuccess: boolean;
  isGetError: boolean;
  getStatusCode?: number;
}

export type ProviderProps = {
  children: ReactNode;
};
