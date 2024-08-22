import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter, useUser } from '../../contexts';

export const Admin = () => {
  const { t } = useTranslation('buttons');
  const {
    switchToMenuMain,
    switchToMenuStatistics,
    switchToMenuTaskAdmin,
    switchToSceneUsersController,
    switchToSceneWithdrawalListForAdmin,
  } = useRouter();
  const { isAdmin } = useUser();

  /* ---------- BUTTON HOOKS ---------- */
  const back = t('back');
  useText(switchToMenuMain, back);

  const tasks_menu = t('tasks');
  useText(switchToMenuTaskAdmin, tasks_menu);

  const users_controller = t('users');
  useText(switchToSceneUsersController, users_controller);

  const withdrawal_list = t('payment');
  useText(switchToSceneWithdrawalListForAdmin, withdrawal_list);

  const statistics_menu = t('statistics');
  useText(switchToMenuStatistics, statistics_menu);

  const title = t(isAdmin ? 'menu:admin' : 'admin:error');

  const firstButtonsRow = isAdmin
    ? [
      <Button key="tasks-menu">{tasks_menu}</Button>,
      <Button key="users-controller">{users_controller}</Button>,
    ]
    : [];

  const secondButtonsRow = isAdmin
    ? [
      <Button key="withdrawal-list">{withdrawal_list}</Button>,
      <Button key="statistics-menu">{statistics_menu}</Button>,
    ]
    : [];

  const backButton = [<Button key="back-to-menu-main">{back}</Button>];

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard title={title}>
      {firstButtonsRow}
      {secondButtonsRow}
      {backButton}
    </ButtonGroup>
  );
};
