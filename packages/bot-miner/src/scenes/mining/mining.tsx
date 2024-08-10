import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { MATH } from '@common_bot/shared';
import { useMining, useRouter, useUser } from '../../contexts';
import { Error } from '../../components';
import { useActivation } from './use-activation';
import { useMiningTon } from './use-mining-ton';

const { getCryptoAmount, getMinedTokenAmount } = MATH;

export const Mining = () => {
  const { t } = useTranslation('mining');
  const { switchToMenuMain, switchToMenuTaskUser, switchToSceneReferralTerms } = useRouter();
  const { user: { who_invited_id } } = useUser();
  const {
    mining,
    // isGetMiningSuccess,
    isPostMiningSuccess,
    isPatchMiningSuccess,
  } = useMining();

  const {
    tasks,
    isGetTasksCalled,
    isGetTasksLoading,
    // isGetTasksSuccess,
    isGetTasksError,
    handleClickReady,
  } = useActivation();

  const { handleClickGet } = useMiningTon();

  if (isGetTasksError) {
    return <Error />;
  }

  if (!isGetTasksCalled || isGetTasksLoading) {
    return null;
  }

  const { title, buttons } = (() => {
    const backButton = [
      <Button key="back-to-main-menu" onClick={switchToMenuMain}>
        {t('buttons:back')}
      </Button>,
    ];

    // Если запись о майнинге в БД сделана успешно
    if (isPostMiningSuccess) {
      const bonus = (
        <>
          <br />
          <br />
          {t('bonus_prefix')}
          &#32;
          <b>0.005</b>
          &#32;
          TON
          &#32;
          {t('bonus_postfix')}
        </>
      );

      const titleComponent = (
        <>
          {t('done')}
          <br />
          <br />
          {t('rate')}
          &#32;
          <b>0.0000001000</b>
          &#32;
          TON
          <br />
          <br />
          {t('increase')}
          {who_invited_id && bonus}
        </>
      );

      const buttonComponent = [
        [
          <Button key="tasks" onClick={switchToMenuTaskUser}>
            {t('buttons:tasks')}
          </Button>,
          <Button key="referral" onClick={switchToSceneReferralTerms}>
            {t('buttons:referral')}
          </Button>,
        ],
        backButton,
      ];

      return { title: titleComponent, buttons: buttonComponent };
    }

    // Если юзер еще не активировал майнинг
    if (!mining) {
      const titleComponent = (
        <>
          <b>{t('title')}</b>
          <br />
          <br />
          💡
          {t('description')}
          <br />
          <br />
          💵
          {t('explanation')}
          <br />
          <br />
          👇
          {t('action')}
        </>
      );

      const gpt = [
        <Button key="gpt" url="https://t.me/RussiaChatGPTBot?start=r508571">
          Chat AI Bot 🤖
        </Button>,
      ];

      const buttonsComponent = tasks.map((task) => (
        [
          <Button key={task.name} url={task.url}>
            {task.name}
          </Button>,
        ]
      )).concat([
        [
          <Button key="ready" onClick={handleClickReady}>
            {t('buttons:ready')}
          </Button>,
        ],
        backButton,
      ]);

      return { title: titleComponent, buttons: [gpt, ...buttonsComponent] };
    }

    // Если юзер успешно перевел намайненые токены на баланс
    if (isPatchMiningSuccess) {
      const titleComponent = (
        <>
          {t('collected')}
          &#32;
          <b>{getMinedTokenAmount(mining.ton_rate, mining.ton_started)}</b>
          &#32;
          TON
        </>
      );

      return { title: titleComponent, buttons: backButton };
    }

    // Майнинг активен
    const balance = getMinedTokenAmount(mining.ton_rate, mining.ton_started);

    const titleComponent = (
      <>
        {t('done')}
        <br />
        <br />
        {t('mined')}
        &#32;
        <b>{balance}</b>
        &#32;
        TON
        <br />
        <br />
        {t('rate')}
        &#32;
        <b>{getCryptoAmount(mining.ton_rate)}</b>
        &#32;
        TON
        <br />
        <br />
        {t('increase')}
      </>
    );

    const buttonsComponent = [
      [
        <Button key="collect" onClick={handleClickGet}>
          {`${t('buttons:collect')} ${balance} TON`}
        </Button>,
      ],
      [
        <Button key="tasks" onClick={switchToMenuTaskUser}>
          {t('buttons:tasks')}
        </Button>,
        <Button key="referral" onClick={switchToSceneReferralTerms}>
          {t('buttons:referral')}
        </Button>,
      ],
      backButton,
    ];

    return { title: titleComponent, buttons: buttonsComponent };
  })();

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={title}>
      {buttons}
    </ButtonGroup>
  );
};
