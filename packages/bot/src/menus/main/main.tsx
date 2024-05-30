import React from 'react';
import {
  ButtonGroup,
  Button,
  useText,
  useCommand,
} from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';
// import { useCommonMainMenu } from './use-common-main-menu';

export const Main = () => {
  const {
    switchToMenuAdmin,
    switchToMenuSupport,
    switchToMenuReferral,
    switchToMenuSettings,
    switchToSceneRules,
  } = useRouter();
  const { t } = useTranslation('buttons');
  // const { message } = useCommonMainMenu();

  /* ---------- BUTTON HOOKS ---------- */
  useCommand(switchToMenuAdmin, '/admin');
  useCommand(switchToMenuSupport, '/support');

  const referral = t('referral');
  useText(switchToMenuReferral, referral);

  const settings = t('settings');
  useText(switchToMenuSettings, settings);

  const rules = t('rules');
  useText(switchToSceneRules, rules);
  /* --------------------------------- */

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t('common:main_menu')}>
      <Button>{referral}</Button>
      <Button>{settings}</Button>
      <Button>{rules}</Button>
    </ButtonGroup>
  );
};
