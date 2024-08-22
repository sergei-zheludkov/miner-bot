import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';

export const User = () => {
  const { t } = useTranslation('buttons');

  const {
    switchToMenuMain,
    switchToSceneTaskControllerPublic,
    switchToSceneTaskControllerComment,
  } = useRouter();

  /* ---------- BUTTON HOOKS ---------- */
  const back = t('back');
  useText(switchToMenuMain, back);

  const increase_speed = t('increase_speed');
  useText(switchToSceneTaskControllerPublic, increase_speed);

  const instant_earning = t('instant_earning');
  useText(switchToSceneTaskControllerComment, instant_earning);

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={1}
      title={t('tasks:user_message')}
    >
      <Button>{increase_speed}</Button>
      <Button>{instant_earning}</Button>
      <Button>{back}</Button>
    </ButtonGroup>
  );
};
