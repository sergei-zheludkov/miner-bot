import React from 'react';
import { Text, Image } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';

const IMAGE_ID = 'AgACAgIAAxkBAAI7HWZ2SR0rgLYCOeYKW0qs8k6Rh22QAAIG2zEb2wawSwaR7ZVe5dLdAQADAgADcwADNQQ';

export const Accession = () => {
  const { t } = useTranslation('rules');

  return (
    <>
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
      <Image file={IMAGE_ID} />
    </>
  );
};
