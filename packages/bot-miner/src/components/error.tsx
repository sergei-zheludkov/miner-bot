import React from 'react';
import { Text } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';

export const Error = () => {
  const { t } = useTranslation('common');

  return <Text isRemoveKeyboard>{t('network_error')}</Text>;
};
