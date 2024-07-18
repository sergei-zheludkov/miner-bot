import React from 'react';
import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';

type Props = {
  onConfirm: (address: string) => void;
};

export const Input = ({ onConfirm }: Props) => {
  const { t } = useTranslation('user_control');

  useText((event) => onConfirm(event.text));

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={t('title')}>
      <Button key="exit-to-admin-menu">
        {t('buttons:exit')}
      </Button>
    </ButtonGroup>
  );
};
