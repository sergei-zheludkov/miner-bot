import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter, useUser } from '../../contexts';

export const Admin = () => {
  const { t } = useTranslation('buttons');
  const {
    switchToMenuMain,
    switchToMenuStatistics,
    switchToMenuTasksControl,
    switchToSceneUsersController,
  } = useRouter();
  const { isAdmin } = useUser();

  /* ---------- BUTTON HOOKS ---------- */
  const back = t('back');
  useText(switchToMenuMain, back);

  const tasks_control_menu = t('tasks');
  useText(switchToMenuTasksControl, tasks_control_menu);

  const users_control_menu = t('users');
  useText(switchToSceneUsersController, users_control_menu);

  const statistics_menu = t('statistics');
  useText(switchToMenuStatistics, statistics_menu);

  const title = t(isAdmin ? 'menu:admin' : 'admin:error');

  const firstButtonsRow = isAdmin
    ? [
      <Button key="tasks-control-menu">{tasks_control_menu}</Button>,
      <Button key="users-control-menu">{users_control_menu}</Button>,
    ]
    : [];

  const secondButtonsRow = isAdmin
    ? [<Button key="statistics_menu">{statistics_menu}</Button>]
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
