import React from 'react';
import { ButtonGroup, Button } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useMining } from './use-mining';
import { MINING_STATES } from './constants';

export const Mining = () => {
  const { t } = useTranslation('mining');
  const {
    state,
    channels,
    handleClickReady,
    handleClickBack,
  } = useMining();

  const registrationButtons = channels.map((channel) => (
    <Button key={channel.name} url={channel.url}>
      {channel.name}
    </Button>
  )).concat([
    <Button key="ready" onClick={handleClickReady}>
      {t('buttons:ready')}
    </Button>,
    <Button key="back-to-main-menu" onClick={handleClickBack}>
      {t('buttons:back')}
    </Button>,
  ]);

  const backButton = [
    <Button key="back-to-main-menu" onClick={handleClickBack}>
      {t('buttons:back')}
    </Button>,
  ];

  // TODO предикаты
  const displayedText = state === MINING_STATES.REGISTRATION ? t('message') : t('done');
  const displayedButtons = state === MINING_STATES.REGISTRATION ? registrationButtons : backButton;

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={displayedText} maxColumns={1}>
      {displayedButtons}
    </ButtonGroup>
  );
};
