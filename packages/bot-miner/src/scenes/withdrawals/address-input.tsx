import React from 'react';
import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';

type Props = {
  currency: string;
  onConfirm: (address: string) => void;
};

export const AddressInput = ({ currency, onConfirm }: Props) => {
  const { t } = useTranslation('withdrawals');

  useText((event) => onConfirm(event.text));

  const title = (
    <>
      {t('address_addition.message_prefix')}
      &#32;
      {currency}
      &#32;
      {t('address_addition.message_postfix')}
    </>
  );

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={title}>
      <Button key="exit-to-balance">
        {t('buttons:exit')}
      </Button>
    </ButtonGroup>
  );
};
