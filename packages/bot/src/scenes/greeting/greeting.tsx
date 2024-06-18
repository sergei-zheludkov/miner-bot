import React, { useEffect } from 'react';
import { Text } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';

export const Greeting = () => {
  const { switchToMenuMain } = useRouter();
  const { t } = useTranslation('greeting');

  useEffect(switchToMenuMain, []);

  return (
    <Text>
      {t('title')}
      <br />
      <br />
      {t('description')}
    </Text>
  );
};
