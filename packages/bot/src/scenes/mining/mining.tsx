import React from 'react';
import { ButtonGroup, Button } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { MATH } from '@common_bot/shared';
import { useUser } from '../../contexts';
import { useMining } from './use-mining';
import { isActiveState, isRegistrationState, isTransferredState } from './predicates';

const { getMinedRate, getMinedTokenAmount } = MATH;

export const Mining = () => {
  const { t } = useTranslation('mining');
  const { user: { mining_rate, mining_rate_started } } = useUser();
  const {
    state,
    channels,
    handleClickReady,
    handleClickGet,
    handleClickBack,
  } = useMining();

  const balance = getMinedTokenAmount(mining_rate, mining_rate_started || '');

  const backButton = [
    <Button key="back-to-main-menu" onClick={handleClickBack}>
      {t('buttons:back')}
    </Button>,
  ];

  const registrationButtons = channels.map((channel) => (
    <Button key={channel.name} url={channel.url}>
      {channel.name}
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
          <b>{getMinedRate(mining_rate)}</b>
          &#32;
          TON
        </>
      );
    }

    if (isTransferredState(state)) {
      return (
        <>
          {t('transferred')}
          <b>{getMinedTokenAmount(mining_rate, mining_rate_started || '')}</b>
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
