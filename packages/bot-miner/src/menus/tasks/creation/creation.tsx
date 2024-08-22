import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { TasksEnum } from '@common_bot/shared';
import { useRouter } from '../../../contexts';

export const Creation = () => {
  const { t } = useTranslation('tasks');

  const {
    switchToMenuTaskAdmin,
    switchToSceneTaskCreationPublic,
    switchToSceneTaskCreationComment,
  } = useRouter();

  /* ---------- BUTTON HOOKS ---------- */
  const back = t('buttons:back');
  useText(switchToMenuTaskAdmin, back);

  const create_public_task = t(`create.buttons.${TasksEnum.TG_PUBLIC}`);
  useText(switchToSceneTaskCreationPublic, create_public_task);

  const create_comment_task = t(`create.buttons.${TasksEnum.TG_COMMENT}`);
  useText(switchToSceneTaskCreationComment, create_comment_task);

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={2}
      title={t('create.message')}
    >
      <Button>{create_public_task}</Button>
      <Button>{create_comment_task}</Button>
      <Button>{back}</Button>
    </ButtonGroup>
  );
};
