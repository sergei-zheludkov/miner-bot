import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { MATH } from '@common_bot/shared';
import { useRouter, useMining } from '../../../contexts';
import { useController } from './use-controller';

const { getCryptoAmount } = MATH;

export const Controller = () => {
  const { t } = useTranslation('tasks');
  const { switchToSceneMining, switchToSceneReferralTerms } = useRouter();
  const { mining } = useMining();
  const { switchToMenuMain } = useRouter();
  const {
    tasks,
    taskNumber,
    isEmptyList,
    // isChecked,
    isGetCalled,
    isGetLoading,
    isGetSuccess,
    isPostSuccess,
    isPostError,
    handleClickPrev,
    handleClickNext,
    handleClickReady,
    handleClickGreat,
  } = useController();

  const backButton = [
    <Button key="back-to-main-menu" onClick={switchToMenuMain}>
      {t('buttons:back')}
    </Button>,
  ];

  if (/* !isChecked || */ !isGetCalled || isGetLoading) {
    return null;
  }

  if (!mining) {
    const title = t('list.mining_disabled');

    const miningButton = [
      <Button key="mining" onClick={switchToSceneMining}>
        {t('buttons:mining')}
      </Button>,
    ];

    return (
      <ButtonGroup isNewMessageEveryRender={false} title={title}>
        {miningButton}
        {backButton}
      </ButtonGroup>
    );
  }

  if (isPostError) {
    const title = t('list.task_error');

    return (
      <ButtonGroup isNewMessageEveryRender={false} title={title}>
        {backButton}
      </ButtonGroup>
    );
  }

  const task = tasks[taskNumber];

  if (isPostSuccess && task) {
    const title = (
      <>
        {t('list.task_completed')}
        &#32;
        <b>{getCryptoAmount(task.mining_rate)}</b>
        &#32;
        {task.currency.toUpperCase()}
      </>
    );

    const greatButton = [
      <Button key="great" onClick={handleClickGreat}>
        {t('buttons:great')}
      </Button>,
    ];

    return (
      <ButtonGroup isNewMessageEveryRender={false} title={title}>
        {greatButton}
        {backButton}
      </ButtonGroup>
    );
  }

  if (isGetSuccess && isEmptyList) {
    const title = t('list.empty');

    const referralButton = [
      <Button key="referral" onClick={switchToSceneReferralTerms}>
        {t('buttons:referral')}
      </Button>,
    ];

    const groupButton = [
      <Button key="group" url="https://t.me/tg_ton_mining">
        {t('buttons:go_to')}
      </Button>,
    ];

    return (
      <ButtonGroup isNewMessageEveryRender={false} title={title}>
        {groupButton}
        {referralButton}
        {backButton}
      </ButtonGroup>
    );
  }

  if (isGetSuccess && !isEmptyList && task) {
    const title = (
      <>
        <b>{t('list.task_title')}</b>
        {task.id}
        <br />
        <br />
        <b>{t('list.task_name')}</b>
        &#32;
        {task.name}
        <br />
        <br />
        <b>{t('list.task_description')}</b>
        <br />
        {task.description}
        <br />
        <br />
        {t('list.task_reward')}
        &#32;
        <b>{getCryptoAmount(task.mining_rate)}</b>
        &#32;
        {task.currency.toUpperCase()}
      </>
    );

    const controlButtons = tasks.length > 1 ? [
      <Button key="prev" onClick={handleClickPrev}>
        ⬅️
      </Button>,
      <Button key="go-to" url={task.url}>
        {t('buttons:go_to')}
      </Button>,
      <Button key="next" onClick={handleClickNext}>
        ➡️
      </Button>,
    ] : [
      <Button key="go-to" url={task.url}>
        {t('buttons:go_to')}
      </Button>,
    ];

    const readyButton = [
      <Button key="ready" onClick={handleClickReady}>
        {t('buttons:ready')}
      </Button>,
    ];

    return (
      <ButtonGroup isNewMessageEveryRender={false} title={title}>
        {controlButtons}
        {readyButton}
        {backButton}
      </ButtonGroup>
    );
  }

  return null;
};
