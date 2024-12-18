import React, { createContext, useContext } from 'react';
import {
  UsersService,
  WalletsService,
  TasksService,
  MiningService,
  WithdrawalsService,
  TogglesService,
} from './generated';

type ApiProviderProps = { children: React.ReactNode };

const ApiService = {
  user: UsersService,
  mining: MiningService,
  wallet: WalletsService,
  task: TasksService,
  toggle: TogglesService,
  withdrawal: WithdrawalsService,
};

const ApiContext = createContext(ApiService);

export const ApiProvider = ({ children }: ApiProviderProps) => (
  <ApiContext.Provider value={ApiService}>
    {children}
  </ApiContext.Provider>
);

export const useApi = () => useContext(ApiContext);
