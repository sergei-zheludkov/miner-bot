import React, { useEffect } from 'react';
import { Text } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';

const Greeting = () => {
  const { switchToMenuMain } = useRouter();
  const { t } = useTranslation();

  useEffect(switchToMenuMain, []);

  return <Text>{t('greeting')}</Text>;
};

export { Greeting };
