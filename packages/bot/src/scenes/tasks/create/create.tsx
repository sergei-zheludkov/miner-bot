import React from 'react';
import {
  Button, ButtonGroup, Dialog, DialogStep, Text,
} from '@urban-bot/core';
import { TasksEnum, CountriesEnum, PlacementEnum } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';
import { QUESTION_KEYS } from './constants';
import { useCreate } from './use-create';

export const Create = () => {
  const { t } = useTranslation('tasks');
  const { switchToMenuTasksControl } = useRouter();
  const { createTask, isSentData } = useCreate();

  const exitButton = (
    <Button key="exit-to-main-menu" onClick={switchToMenuTasksControl}>
      {t('buttons:exit')}
    </Button>
  );

  const typeContent = (
    <ButtonGroup maxColumns={1} title={t('create.questions.type.message')}>
      <Button id={TasksEnum.TG_PUBLIC}>
        {t(`create.buttons.${TasksEnum.TG_PUBLIC}`)}
      </Button>
      {exitButton}
    </ButtonGroup>
  );

  const countryContent = (
    <ButtonGroup maxColumns={1} title={t('create.questions.country.message')}>
      <Button id={CountriesEnum.RUSSIA}>
        {t(`country:${CountriesEnum.RUSSIA}`)}
      </Button>
      <Button id={CountriesEnum.BELARUS}>
        {t(`country:${CountriesEnum.BELARUS}`)}
      </Button>
      <Button id={CountriesEnum.KAZAKHSTAN}>
        {t(`country:${CountriesEnum.KAZAKHSTAN}`)}
      </Button>
      {exitButton}
    </ButtonGroup>
  );

  const placementContent = (
    <ButtonGroup maxColumns={1} title={t('create.questions.placement.message')}>
      <Button id={PlacementEnum.TASK_LIST}>
        {t(`create.buttons.${PlacementEnum.TASK_LIST}`)}
      </Button>
      <Button id={PlacementEnum.MINING_ACTIVATION}>
        {t(`create.buttons.${PlacementEnum.MINING_ACTIVATION}`)}
      </Button>
      {exitButton}
    </ButtonGroup>
  );

  const increaseMiningRateContent = (
    <ButtonGroup maxColumns={1} title={t('create.questions.increase_mining_rate.message')}>
      <Button id="0.000_000_1">
        0.000_000_1
      </Button>
      <Button id="0.000_000_2">
        0.000_000_2
      </Button>
      <Button id="0.000_000_3">
        0.000_000_3
      </Button>
      <Button id="0.000_000_5">
        0.000_000_5
      </Button>
      {exitButton}
    </ButtonGroup>
  );

  const availableLimitContent = (
    <Text>
      {t('create.questions.available_limit.message')}
    </Text>
  );

  const nameContent = (
    <Text>
      {t('create.questions.name.message')}
    </Text>
  );

  const descriptionContent = (
    <Text>
      {t('create.questions.description.message')}
    </Text>
  );

  const checkKeyContent = (
    <Text>
      {t('create.questions.check_key.message')}
    </Text>
  );

  const contactContent = (
    <Text>
      {t('create.questions.contact.message')}
    </Text>
  );

  const urlContent = (
    <Text>
      {t('create.questions.url.message')}
    </Text>
  );

  if (!isSentData) {
    return (
      <Dialog onFinish={createTask}>
        <DialogStep
          id={QUESTION_KEYS.TYPE}
          content={typeContent}
          onNext={(answer: string) => console.log('TYPE:', answer)}
        >
          <DialogStep
            id={QUESTION_KEYS.COUNTRY}
            content={countryContent}
            onNext={(answer: string) => console.log('COUNTRY:', answer)}
          >
            <DialogStep
              id={QUESTION_KEYS.PLACEMENT}
              content={placementContent}
              onNext={(answer: string) => console.log('PLACEMENT:', answer)}
            >
              {/* <DialogStep */}
              {/*  id={QUESTION_KEYS.INCREASE_MINING_RATE} */}
              {/*  content={increaseMiningRateContent} */}
              {/*  onNext={(answer: string) => console.log('INCREASE_MINING_RATE:', answer)} */}
              {/* > */}
              <DialogStep
                id={QUESTION_KEYS.AVAILABLE_LIMIT}
                content={availableLimitContent}
                onNext={(answer: string) => console.log('AVAILABLE_LIMIT:', answer)}
              >
                <DialogStep
                  id={QUESTION_KEYS.NAME}
                  content={nameContent}
                  onNext={(answer: string) => console.log('NAME:', answer)}
                >
                  <DialogStep
                    id={QUESTION_KEYS.DESCRIPTION}
                    content={descriptionContent}
                    onNext={(answer: string) => console.log('DESCRIPTION:', answer)}
                  >
                    <DialogStep
                      id={QUESTION_KEYS.CHECK_KEY}
                      content={checkKeyContent}
                      onNext={(answer: string) => console.log('CHECK_KEY:', answer)}
                    >
                      <DialogStep
                        id={QUESTION_KEYS.CONTACT}
                        content={contactContent}
                        onNext={(answer: string) => console.log('CONTACT:', answer)}
                      >
                        <DialogStep
                          id={QUESTION_KEYS.URL}
                          content={urlContent}
                          onNext={(answer: string) => console.log('URL:', answer)}
                        />
                      </DialogStep>
                    </DialogStep>
                  </DialogStep>
                </DialogStep>
              </DialogStep>
              {/* </DialogStep> */}
            </DialogStep>
          </DialogStep>
        </DialogStep>
      </Dialog>
    );
  }

  return null;
};
