import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';

export const Information = () => {
  const { t } = useTranslation('buttons');
  const { switchToSceneRules, switchToSceneContacts, switchToMenuMain } = useRouter();

  /* ---------- BUTTON HOOKS ---------- */
  const rules = t('rules');
  useText(switchToSceneRules, rules);

  const contacts = t('contacts');
  useText(switchToSceneContacts, contacts);

  const back = t('back');
  useText(switchToMenuMain, back);
  /* --------------------------------- */

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={2}
      title={t('menu:information')}
    >
      <Button>{rules}</Button>
      <Button>{contacts}</Button>
      <Button>{back}</Button>
    </ButtonGroup>
  );
};
