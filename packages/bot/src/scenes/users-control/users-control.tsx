import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';
// import { Loading } from '../../components';
import { useUsersControl } from './use-users-control';
import { UserInput } from './user-input';

export const UsersControl = () => {
  const { t } = useTranslation('buttons');
  const { user, handleConfirmInput } = useUsersControl();
  const { switchToMenuAdmin } = useRouter();

  /* ---------- BUTTON HOOKS ---------- */
  const back = t('back');
  useText(switchToMenuAdmin, back);
  //
  // const create_task = t('create_task');
  // useText(switchToSceneCreateTask, create_task);
  //
  // const add_task_limit = t('add_task_limit');
  // useText(switchToSceneAddTaskLimit, add_task_limit);
  //
  // const task_notification = t('task_notification');
  // useText(switchToSceneTaskNotification, task_notification);

  if (!user) {
    return <UserInput onConfirm={handleConfirmInput} />;
  }

  const {
    id,
    username,
    gender,
    country,
    role,
    referral_counter,
    completed_tasks_count,
    created,
    who_invited,
  } = user;

  const title = (
    <>
      {t('id')}
      &#32;
      <b>{id}</b>
      <br />
      {t('user_name')}
      &#32;
      <b>{username}</b>
      <br />
      {t('gender')}
      &#32;
      <b>{gender}</b>
      <br />
      {t('country')}
      &#32;
      <b>{country}</b>
      <br />
      {t('role')}
      &#32;
      <b>{role}</b>
      <br />
      {t('referral_counter')}
      &#32;
      <b>{referral_counter}</b>
      <br />
      {t('completed_tasks_count')}
      &#32;
      <b>{completed_tasks_count}</b>
      <br />
      {t('created')}
      &#32;
      <b>{created}</b>
      <br />
      {t('who_invited_id')}
      &#32;
      <b>{who_invited?.username || '-'}</b>
    </>
  );

  // TODO доделать функционал
  return (
    <ButtonGroup maxColumns={1} title={title}>
      <Button onClick={switchToMenuAdmin}>{t('change_role')}</Button>
      <Button onClick={switchToMenuAdmin}>{t('ban')}</Button>
    </ButtonGroup>
  );
};
