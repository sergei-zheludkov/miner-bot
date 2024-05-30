import { useContext } from 'react';
import { Context } from './context';

export const useUser = () => useContext(Context);
