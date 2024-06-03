import React from 'react';
import { Button, ButtonGroup, Text } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter, useUser } from '../../../contexts';
import { useController } from './use-controller';

export const Controller = () => {
  const { t } = useTranslation('tasks');
  const { switchToMenuMain, switchToSceneMining } = useRouter();
  const { user } = useUser();
  const {
    tasks,
    taskNumber,
    isEmptyList,
    // isLoading,
    isSuccess,
    handleClickPrev,
    handleClickNext,
  } = useController();

  const backButton = [
    <Button key="back-to-main-menu" onClick={switchToMenuMain}>
      {t('buttons:back')}
    </Button>,
  ];

  if (!user.mining_rate_started) {
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

  if (isSuccess && isEmptyList) {
    const title = t('list.empty');

    const groupButton = [
      <Button key="group" url="https://t.me/tg_ton_mining">
        {t('buttons:go_to')}
      </Button>,
    ];

    return (
      <ButtonGroup isNewMessageEveryRender={false} title={title}>
        {groupButton}
        {backButton}
      </ButtonGroup>
    );
  }

  if (isSuccess && !isEmptyList) {
    const task = tasks[taskNumber];

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
        <b>{task.increase_mining_rate}</b>
        &#32;
        TON
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
      <Button key="ready" onClick={undefined}>
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

  return (
    <Text isNewMessageEveryRender={false}>
      🤖
      &#32;
      {t('common:loading')}
    </Text>
  );
};
