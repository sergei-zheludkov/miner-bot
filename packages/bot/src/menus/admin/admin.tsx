import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';
// import { Loading } from '../../components';
import { useAdminMenu } from './use-admin-menu';

export const Admin = () => {
  const { switchToMenuMain, switchToMenuTasksControl } = useRouter();
  const { t } = useTranslation('buttons');
  const { isUserAdmin } = useAdminMenu();

  /* ---------- BUTTON HOOKS ---------- */
  const back = t('back');
  useText(switchToMenuMain, back);

  const tasks_control_menu = t('tasks');
  useText(switchToMenuTasksControl, tasks_control_menu);

  const title = t(isUserAdmin ? 'menu:admin' : 'admin:error');

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={1}
      title={title}
    >
      {isUserAdmin && <Button>{tasks_control_menu}</Button>}
      <Button>{back}</Button>
    </ButtonGroup>
  );
};
