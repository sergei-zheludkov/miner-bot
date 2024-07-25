import React from 'react';
import {
  ButtonGroup, Button, useText, Text,
} from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { DATE } from '@common_bot/shared';
import { useRouter } from '../../../contexts';
import { useUsers } from '../context';

const { getFormattedDate } = DATE;
const EMPTY = '-';

export const Controller = () => {
  const { t } = useTranslation('users');
  const { switchToMenuAdmin, switchToSceneUsersPayroll } = useRouter();
  const { user } = useUsers();

  /* ---------- BUTTON HOOKS ---------- */
  const back = t('buttons:back');
  useText(switchToMenuAdmin, back);

  const {
    id,
    username,
    firstname,
    gender,
    country,
    role,
    referral_counter,
    completed_tasks_count,
    created,
    who_invited_id,
  } = user;

  const title = (
    <>
      {t('controller.description.id')}
      &#32;
      <b>{id}</b>
      <br />
      {t('controller.description.user_name')}
      &#32;
      <b>{username ?? EMPTY}</b>
      <br />
      {t('controller.description.first_name')}
      &#32;
      <b>{firstname ?? EMPTY}</b>
      <br />
      {t('controller.description.gender')}
      &#32;
      <b>{t(`buttons:${gender}`)}</b>
      <br />
      {t('controller.description.country')}
      &#32;
      <b>{t(`countries:${country}`)}</b>
      <br />
      {t('controller.description.role')}
      &#32;
      <b>{role.toUpperCase()}</b>
      <br />
      {t('controller.description.referral_counter')}
      &#32;
      <b>{referral_counter}</b>
      <br />
      {t('controller.description.completed_tasks_count')}
      &#32;
      <b>{completed_tasks_count}</b>
      <br />
      {t('controller.description.created')}
      &#32;
      <b>{getFormattedDate(created)}</b>
      <br />
      {t('controller.description.who_invited_id')}
      &#32;
      <b>{who_invited_id || EMPTY}</b>
    </>
  );

  return (
    <ButtonGroup maxColumns={1} title={title}>
      <Button onClick={switchToMenuAdmin}>{t('buttons:change_role')}</Button>
      <Button onClick={switchToSceneUsersPayroll}>{t('buttons:payroll')}</Button>
      <Button onClick={switchToMenuAdmin}>{t('buttons:ban')}</Button>
    </ButtonGroup>
  );
};
