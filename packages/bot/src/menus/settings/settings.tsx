import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';

export const Settings = () => {
  const { t } = useTranslation(['buttons', 'common']);
  const {
    switchToSceneSettingsLanguage,
    // switchToSceneSettingsReminders,
    switchToMenuMain,
  } = useRouter();

  /* ---------- BUTTON HOOKS ---------- */
  const language = t('language');
  useText(switchToSceneSettingsLanguage, language);

  // const reminders = t('reminders');
  // useText(switchToSceneSettingsReminders, reminders);

  const back = t('back');
  useText(switchToMenuMain, back);
  /* --------------------------------- */

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={2}
      title={t('common:settings_menu')}
    >
      <Button>{language}</Button>
      {/* <Button>{reminders}</Button> */}
      <Button>{back}</Button>
    </ButtonGroup>
  );
};
