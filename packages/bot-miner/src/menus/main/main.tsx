import React from 'react';
import {
  ButtonGroup,
  Button,
  useText,
  useCommand,
} from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';

export const Main = () => {
  const { t } = useTranslation('buttons');

  const {
    switchToMenuAdmin,
    switchToMenuInformation,
    switchToSceneMining,
    switchToSceneBalance,
    switchToSceneReferralTerms,
    switchToSceneTaskController,
  } = useRouter();

  /* ---------- BUTTON HOOKS ---------- */
  useCommand(switchToMenuAdmin, '/admin');
  // useCommand(switchToMenuSupport, '/support');

  const mining = t('mining');
  useText(switchToSceneMining, mining);

  const tasks = t('tasks');
  useText(switchToSceneTaskController, tasks);

  const referral = t('referral');
  useText(switchToSceneReferralTerms, referral);

  const balance = t('balance');
  useText(switchToSceneBalance, balance);

  // const settings = t('settings');
  // useText(switchToMenuSettings, settings);

  const information = t('information');
  useText(switchToMenuInformation, information);
  /* --------------------------------- */

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard title={t('menu:main')}>
      {[<Button key="mining">{mining}</Button>]}
      {[<Button key="tasks">{tasks}</Button>, <Button key="referral">{referral}</Button>]}
      {[<Button key="balance">{balance}</Button>, <Button key="information">{information}</Button>]}
      {/* {[<Button key="settings">{settings}</Button>]} */}
    </ButtonGroup>
  );
};
