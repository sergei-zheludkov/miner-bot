import React, { ReactNode } from 'react';
import { Text } from '@urban-bot/core';
import { useSceneWrapper } from './use-scene-wrapper';

type Props = {
  children: ReactNode;
};

const RemoveKeyboard = ({ children }: Props) => {
  const { shouldShown, title } = useSceneWrapper();

  if (shouldShown) {
    return (
      <Text isNewMessageEveryRender={false} isRemoveKeyboard>
        {title}
      </Text>
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export { RemoveKeyboard };
