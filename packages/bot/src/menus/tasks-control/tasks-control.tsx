import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';
// import { Loading } from '../../components';
import { useTasksControl } from './use-tasks-control';

export const TasksControl = () => {
  const { t } = useTranslation('buttons');
  const { isUserAdmin } = useTasksControl();
  const {
    switchToMenuAdmin,
    switchToSceneCreateTask,
    switchToSceneAddTaskLimit,
    switchToSceneTaskNotification,
  } = useRouter();

  /* ---------- BUTTON HOOKS ---------- */
  const back = t('back');
  useText(switchToMenuAdmin, back);

  const create_task = t('create_task');
  useText(switchToSceneCreateTask, create_task);

  const add_task_limit = t('add_task_limit');
  useText(switchToSceneAddTaskLimit, add_task_limit);

  const task_notification = t('task_notification');
  useText(switchToSceneTaskNotification, task_notification);

  const title = t(isUserAdmin ? 'admin:message' : 'admin:error');
  // const errorText = t();

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={2}
      title={title}
    >
      <Button>{create_task}</Button>
      <Button>{add_task_limit}</Button>
      <Button>{task_notification}</Button>
      <Button>{back}</Button>
    </ButtonGroup>
  );
};
