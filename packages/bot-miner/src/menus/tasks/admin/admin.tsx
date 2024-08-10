import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';

export const Admin = () => {
  const { t } = useTranslation('buttons');

  const {
    switchToMenuAdmin,
    switchToMenuTaskCreation,
    switchToSceneTaskAddLimit,
  } = useRouter();

  /* ---------- BUTTON HOOKS ---------- */
  const back = t('back');
  useText(switchToMenuAdmin, back);

  const create_task = t('create_task');
  useText(switchToMenuTaskCreation, create_task);

  const add_task_limit = t('add_task_limit');
  useText(switchToSceneTaskAddLimit, add_task_limit);

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={2}
      title={t('tasks:admin_message')}
    >
      <Button>{create_task}</Button>
      <Button>{add_task_limit}</Button>
      <Button>{back}</Button>
    </ButtonGroup>
  );
};
