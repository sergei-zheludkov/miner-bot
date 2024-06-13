import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { MATH } from '@common_bot/shared';
import { useRouter } from '../../contexts';
import { useBalance } from './use-balance';

const { getCryptoAmount } = MATH;

export const Balance = () => {
  const { t } = useTranslation('balance');
  const { switchToMenuMain } = useRouter();
  const { wallet, handleClickWithdrawn } = useBalance();

  // TODO info message
  const title = (
    <>
      {t('message')}
      &#32;
      <b>{getCryptoAmount(wallet.ton)}</b>
      &#32;
      TON
    </>
  );

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={title} maxColumns={1}>
      <Button key="withdrawn" onClick={handleClickWithdrawn}>
        {t('buttons:withdrawn')}
      </Button>
      <Button key="back-to-main-menu" onClick={switchToMenuMain}>
        {t('buttons:back')}
      </Button>
    </ButtonGroup>
  );
};
