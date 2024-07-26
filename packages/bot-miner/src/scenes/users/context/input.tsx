import React from 'react';
import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';

type Props = {
  onConfirm: (address: string) => void;
};

export const Input = ({ onConfirm }: Props) => {
  const { t } = useTranslation('users');
  const { switchToMenuAdmin } = useRouter();

  const back = t('buttons:back');
  const title = t('controller.input.title');

  useText((event) => {
    if (event.text === back) {
      switchToMenuAdmin();
    } else {
      onConfirm(event.text);
    }
  });

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={title}>
      <Button key="back-to-admin-menu">
        {back}
      </Button>
    </ButtonGroup>
  );
};
