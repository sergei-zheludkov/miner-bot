import React from 'react';
import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';

type Props = {
  onConfirm: (address: string) => void;
};

export const Input = ({ onConfirm }: Props) => {
  const { t } = useTranslation('users');

  const back = t('buttons:back');

  useText((event) => {
    if (event.text !== back) {
      onConfirm(event.text);
    }
  });

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={t('controller.input.title')}>
      <Button key="back-to-admin-menu">
        {back}
      </Button>
    </ButtonGroup>
  );
};
