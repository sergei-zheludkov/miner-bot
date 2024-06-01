import React from 'react';
import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';

export const Information = () => {
  const { t } = useTranslation('information');
  const { switchToMenuMain } = useRouter();

  // TODO info message
  const title = t('message');

  const back = t('buttons:back');
  useText(switchToMenuMain, back);

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={title}>
      <Button>{back}</Button>
    </ButtonGroup>
  );
};
