import { useContext } from 'react';
import { Context } from './context';

export const useRouter = () => useContext(Context);
