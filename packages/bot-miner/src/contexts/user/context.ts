import { createContext } from 'react';
import { defaultState } from './default-state';
import type { ContextState } from './types';

const Context = createContext<ContextState>(defaultState);

Context.displayName = 'user-provider';

export { Context };
