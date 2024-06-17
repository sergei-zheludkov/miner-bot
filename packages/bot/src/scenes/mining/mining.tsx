import React from 'react';
import { ButtonGroup, Button } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { MATH } from '@common_bot/shared';
import { useUser } from '../../contexts';
import { useMiningTon } from './use-mining-ton';
import {
  isActiveState, isRegisteredState, isRegistrationState, isTransferredState,
} from './predicates';

const { getCryptoAmount, getMinedTokenAmount } = MATH;

export const Mining = () => {
  const { t } = useTranslation('mining');
  const { user: { mining } } = useUser();
  const {
    state,
    tasks,
    handleClickReady,
    handleClickGet,
    handleClickBack,
  } = useMiningTon();

  const balance = getMinedTokenAmount(mining.ton_rate, mining.ton_started || '');

  const backButton = [
    <Button key="back-to-main-menu" onClick={handleClickBack}>
      {t('buttons:back')}
    </Button>,
  ];

  const registrationButtons = tasks.map((task) => (
    <Button key={task.name} url={task.url}>
      {task.name}
    </Button>
  )).concat([
    <Button key="ready" onClick={handleClickReady}>
      {t('buttons:ready')}
    </Button>,
    ...backButton,
  ]);

  const activeButton = [
    <Button key="get-mined" onClick={handleClickGet}>
      {`${t('get')} ${balance} TON`}
    </Button>,
    ...backButton,
  ];

  const getDisplayedText = () => {
    if (isRegistrationState(state)) {
      return <>{t('message')}</>;
    }

    if (isRegisteredState(state)) {
      return (
        <>
          {t('done')}
          <br />
          <br />
          {t('rate')}
          &#32;
          <b>0.0000001000</b>
          &#32;
          TON
        </>
      );
    }

    if (isActiveState(state)) {
      return (
        <>
          {t('done')}
          <br />
          <br />
          {t('mined')}
          &#32;
          <b>{balance}</b>
          &#32;
          TON
          <br />
          <br />
          {t('rate')}
          &#32;
          <b>{getCryptoAmount(mining.ton_rate)}</b>
          &#32;
          TON
        </>
      );
    }

    if (isTransferredState(state)) {
      return (
        <>
          {t('transferred')}
          &#32;
          <b>{getMinedTokenAmount(mining.ton_rate, mining.ton_started || '')}</b>
          &#32;
          TON
        </>
      );
    }

    // TODO заменить на чет вменяемое
    return <>ERROR</>;
  };

  const getDisplayedButtons = () => {
    if (isRegistrationState(state)) {
      return registrationButtons;
    }

    if (isRegisteredState(state)) {
      return backButton;
    }

    if (isActiveState(state)) {
      return activeButton;
    }

    return backButton;
  };

  const title = getDisplayedText();
  const buttons = getDisplayedButtons();

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={title} maxColumns={1}>
      {buttons}
    </ButtonGroup>
  );
};
