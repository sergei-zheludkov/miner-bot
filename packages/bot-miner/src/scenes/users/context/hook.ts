import { useContext } from 'react';
import { Context } from './context';

export const useUsers = () => useContext(Context);
