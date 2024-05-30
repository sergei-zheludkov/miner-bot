import React, { ReactNode } from 'react';
import { ButtonGroup, Button } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useSceneWrapper } from './use-scene-wrapper';

type Props = {
  children: ReactNode;
};

const BackKeyboard = ({ children }: Props) => {
  const { t } = useTranslation('buttons');
  const { shouldShown, title } = useSceneWrapper();

  if (shouldShown) {
    return (
      <ButtonGroup isNewMessageEveryRender={false} isReplyButtons isResizedKeyboard title={title}>
        <Button>{t('back')}</Button>
      </ButtonGroup>
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export { BackKeyboard };
