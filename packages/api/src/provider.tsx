import React, { createContext, useContext } from 'react';
import { UsersService, TasksService, MiningService } from './generated';

type ApiProviderProps = { children: React.ReactNode };

const ApiService = {
  user: UsersService,
  task: TasksService,
  mining: MiningService,
};

const ApiContext = createContext(ApiService);

export const ApiProvider = ({ children }: ApiProviderProps) => (
  <ApiContext.Provider value={ApiService}>
    {children}
  </ApiContext.Provider>
);

export const useApi = () => useContext(ApiContext);
