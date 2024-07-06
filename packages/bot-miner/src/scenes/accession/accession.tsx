import React from 'react';
import dotenv from 'dotenv';
import { Text, Image } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';

dotenv.config();

const { BUTTON_GUIDE_IMG_ID } = process.env;

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
      {BUTTON_GUIDE_IMG_ID && <Image file={BUTTON_GUIDE_IMG_ID} />}
    </>
  );
};
