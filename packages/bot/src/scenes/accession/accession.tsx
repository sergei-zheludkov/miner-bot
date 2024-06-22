import React from 'react';
import { Text } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';

export const Accession = () => {
  const { t } = useTranslation('rules');

  // TODO добавить сообщение про потерю кнопок

  return (
    <Text>
      <b>{t('rules:title')}</b>
      <br />
      <br />
      -
      &#32;
      {t('rules:multi_accounting')}
      <br />
      -
      &#32;
      {t('rules:fraud')}
    </Text>
  );
};
