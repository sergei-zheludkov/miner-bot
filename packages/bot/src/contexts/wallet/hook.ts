import { useContext } from 'react';
import { Context } from './context';

export const useWallet = () => useContext(Context);
