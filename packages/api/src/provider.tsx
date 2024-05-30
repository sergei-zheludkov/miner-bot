import React, { createContext, useContext } from 'react';
import { UserService } from './generated';

type ApiProviderProps = { children: React.ReactNode };

const ApiService = {
  user: UserService,
};

const ApiContext = createContext(ApiService);

export const ApiProvider = ({ children }: ApiProviderProps) => (
  <ApiContext.Provider value={ApiService}>
    {children}
  </ApiContext.Provider>
);

export const useApi = () => useContext(ApiContext);
