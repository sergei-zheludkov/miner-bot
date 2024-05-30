import React, { ReactNode } from 'react';
import { RemoveKeyboard } from './remove-keyboard';
// import { BackKeyboard } from './back-keyboard';

type Props = {
  children: ReactNode;
  type: 'remove-keyboard'; // | 'back-keyboard'; TODO: Отладить работу
};

const SceneWrapper = ({ children, type }: Props) => {
  switch (type) {
    case 'remove-keyboard':
      return <RemoveKeyboard>{children}</RemoveKeyboard>;
    // case 'back-keyboard':
    //   return <BackKeyboard>{children}</BackKeyboard>;
    default:
      return null;
  }
};

export { SceneWrapper };
