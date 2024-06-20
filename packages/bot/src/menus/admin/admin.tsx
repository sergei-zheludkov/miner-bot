import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';
// import { Loading } from '../../components';
import { useAdminMenu } from './use-admin-menu';

export const Admin = () => {
  const { switchToMenuMain, switchToMenuTasksControl, switchToSceneUsersControl } = useRouter();
  const { t } = useTranslation('buttons');
  const { isUserAdmin } = useAdminMenu();

  /* ---------- BUTTON HOOKS ---------- */
  const back = t('back');
  useText(switchToMenuMain, back);

  const tasks_control_menu = t('tasks');
  useText(switchToMenuTasksControl, tasks_control_menu);

  const users_control_menu = t('users');
  useText(switchToSceneUsersControl, users_control_menu);

  const title = t(isUserAdmin ? 'menu:admin' : 'admin:error');

  const adminButtons = isUserAdmin
    ? [
      <Button key="tasks-control-menu">{tasks_control_menu}</Button>,
      <Button key="users-control-menu">{users_control_menu}</Button>,
    ]
    : [];

  const backButton = [<Button key="back-to-menu-main">{back}</Button>];

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard title={title}>
      {adminButtons}
      {backButton}
    </ButtonGroup>
  );
};
