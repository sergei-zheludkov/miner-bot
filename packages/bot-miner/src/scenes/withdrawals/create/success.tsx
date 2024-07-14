import React from 'react';
import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { WithdrawalEntity } from '@common_bot/api';
import { useRouter, useUser } from '../../../contexts';

type Props = {
  withdrawal: WithdrawalEntity;
}

export const Success = ({ withdrawal }: Props) => {
  const { t } = useTranslation('withdrawals');
  const { switchToSceneBalance, switchToMenuMain } = useRouter();
  // TODO заменить на short request
  const { getUser } = useUser();

  const handleClickButton = (callback: () => void) => async () => {
    await getUser();

    callback();
  };

  const balance = t('buttons:balance');
  useText(handleClickButton(switchToSceneBalance), balance);

  const main_menu = t('buttons:main_menu');
  useText(handleClickButton(switchToMenuMain), main_menu);

  const title = (
    <>
      {t('success.message')}
      <br />
      <br />
      {t('success.number')}
      &#32;
      <b>{withdrawal.id}</b>
      <br />
      {t('status.title')}
      &#32;
      <b>{t(`status.${withdrawal.status}`)}</b>
    </>
  );

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={title}>
      <Button key="exit-to-balance">
        {t(balance)}
      </Button>
      <Button key="exit-to-main-menu">
        {t(main_menu)}
      </Button>
    </ButtonGroup>
  );
};
