import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';

export const Settings = () => {
  const { t } = useTranslation(['buttons']);
  const { switchToSceneSettingsLanguage, switchToMenuMain } = useRouter();

  /* ---------- BUTTON HOOKS ---------- */
  const language = t('language');
  useText(switchToSceneSettingsLanguage, language);

  const back = t('back');
  useText(switchToMenuMain, back);
  /* --------------------------------- */

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={1}
      title={t('menu:settings')}
    >
      <Button>{language}</Button>
      <Button>{back}</Button>
    </ButtonGroup>
  );
};
