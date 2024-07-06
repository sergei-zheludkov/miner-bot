import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { MATH } from '@common_bot/shared';
import { useRouter, useMining } from '../../../contexts';
import { useController } from './use-controller';
import { Error } from '../../../components';

const { getCryptoAmount } = MATH;

export const Controller = () => {
  const { t } = useTranslation('tasks');
  const { switchToSceneMining, switchToSceneReferralTerms } = useRouter();
  const { mining } = useMining();
  const { switchToMenuMain } = useRouter();
  const {
    displayedTask,
    tasks,
    // taskNumber,
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

  if (/* !isChecked || */ !isGetCalled || isGetLoading) {
    return null;
  }

  if (isPostError) {
    return <Error />;
  }

  const { title, buttons } = (() => {
    const backButton = [
      <Button key="back-to-main-menu" onClick={switchToMenuMain}>
        {t('buttons:back')}
      </Button>,
    ];

    if (!mining) {
      const titleComponent = t('list.mining_disabled');

      const buttonsComponent = [
        [
          <Button key="mining" onClick={switchToSceneMining}>
            {t('buttons:mining')}
          </Button>,
        ],
        backButton,
      ];

      return { title: titleComponent, buttons: buttonsComponent };
    }

    if (isPostSuccess && displayedTask) {
      const titleComponent = (
        <>
          {t('list.task_completed')}
          &#32;
          <b>{getCryptoAmount(displayedTask.mining_rate)}</b>
          &#32;
          {displayedTask.currency.toUpperCase()}
        </>
      );

      const buttonsComponent = [
        [
          <Button key="great" onClick={handleClickGreat}>
            {t('buttons:great')}
          </Button>,
        ],
        backButton,
      ];

      return { title: titleComponent, buttons: buttonsComponent };
    }

    if (isGetSuccess && isEmptyList) {
      const titleComponent = t('list.empty');

      const buttonsComponent = [
        [
          <Button key="referral" onClick={switchToSceneReferralTerms}>
            {t('buttons:referral')}
          </Button>,
        ],
        [
          <Button key="group" url="https://t.me/tg_ton_mining">
            {t('buttons:our_group')}
          </Button>,
        ],
        backButton,
      ];

      return { title: titleComponent, buttons: buttonsComponent };
    }

    if (isGetSuccess && !isEmptyList && displayedTask) {
      const titleComponent = (
        <>
          <b>{t('list.task_title')}</b>
          {displayedTask.id}
          <br />
          <br />
          <b>{t('list.task_name')}</b>
          &#32;
          {displayedTask.name}
          <br />
          <br />
          <b>{t('list.task_description')}</b>
          <br />
          {displayedTask.description}
          <br />
          <br />
          {t('list.task_reward')}
          &#32;
          <b>{getCryptoAmount(displayedTask.mining_rate)}</b>
          &#32;
          {displayedTask.currency.toUpperCase()}
        </>
      );

      const controlButtons = tasks.length > 1 ? [
        <Button key="prev" onClick={handleClickPrev}>
          ⬅️
        </Button>,
        <Button key="go-to" url={displayedTask.url}>
          {t('buttons:go_to')}
        </Button>,
        <Button key="next" onClick={handleClickNext}>
          ➡️
        </Button>,
      ] : [
        <Button key="go-to" url={displayedTask.url}>
          {t('buttons:go_to')}
        </Button>,
      ];

      const readyButton = [
        <Button key="ready" onClick={handleClickReady}>
          {t('buttons:ready')}
        </Button>,
      ];

      const buttonsComponent = [
        controlButtons,
        readyButton,
        backButton,
      ];

      return { title: titleComponent, buttons: buttonsComponent };
    }

    return { title: '', buttons: [] };
  })();

  if (!title) {
    return null;
  }

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={title}>
      {buttons}
    </ButtonGroup>
  );
};
