import React from 'react';
import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';

export const Statistics = () => {
  const { t } = useTranslation('buttons');
  const { switchToMenuAdmin, switchToSceneStatisticsUsers } = useRouter();

  /* ---------- BUTTON HOOKS ---------- */
  const users = t('users');
  useText(switchToSceneStatisticsUsers, users);

  const back = t('back');
  useText(switchToMenuAdmin, back);
  /* --------------------------------- */

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={1}
      title={t('menu:statistics')}
    >
      <Button>{users}</Button>
      <Button>{back}</Button>
    </ButtonGroup>
  );
};
