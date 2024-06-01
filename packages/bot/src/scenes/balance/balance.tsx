import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';
import { useBalance } from './use-balance';

export const Balance = () => {
  const { t } = useTranslation('balance');
  const { switchToMenuMain } = useRouter();
  const { balance, withdrawn, handleClickWithdrawn } = useBalance();

  // TODO info message
  const title = (
    <>
      {t('message')}
      <b>{balance}</b>
      &#32;
      TON
      <br />
      {t('withdrawn')}
      <b>{withdrawn}</b>
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
