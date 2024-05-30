import React, { createContext, useContext } from 'react';
import { UserService, FeedbackService } from './generated';

const ApiService = {
  user: UserService,
  feedback: FeedbackService,
};

const ApiContext = createContext(ApiService);

type ApiProviderProps = {
  children: React.ReactNode;
};

const ApiProvider = ({ children }: ApiProviderProps) => (
  <ApiContext.Provider value={ApiService}>
    {children}
  </ApiContext.Provider>
);

const useApi = () => useContext(ApiContext);

export { ApiProvider, useApi };
