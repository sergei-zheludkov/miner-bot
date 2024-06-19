import React from 'react';
import {
  ButtonGroup,
  Button,
  useText,
  useCommand,
} from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useMainMenu } from './use-main-menu';

export const Main = () => {
  const { t } = useTranslation('buttons');
  const {
    handleCommandAdmin,
    handleClickMining,
    handleClickTasks,
    handleClickReferral,
    handleClickBalance,
    handleClickInformation,
  } = useMainMenu();

  /* ---------- BUTTON HOOKS ---------- */
  useCommand(handleCommandAdmin, '/admin');
  // useCommand(switchToMenuSupport, '/support');

  const mining = t('mining');
  useText(handleClickMining, mining);

  const tasks = t('tasks');
  useText(handleClickTasks, tasks);

  const referral = t('referral');
  useText(handleClickReferral, referral);

  const balance = t('balance');
  useText(handleClickBalance, balance);

  // const settings = t('settings');
  // useText(switchToMenuSettings, settings);

  const information = t('information');
  useText(handleClickInformation, information);
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
