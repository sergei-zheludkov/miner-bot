import React from 'react';
import {
  Button,
  ButtonGroup,
  Dialog,
  DialogStep,
  Text,
  useText,
} from '@urban-bot/core';
import { CountriesEnum, GenderEnum } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';
import { QUESTION_KEYS } from './constants';
import { usePublic } from './use-public';

export const Comment = () => {
  const { t } = useTranslation('tasks');
  const { switchToMenuTaskCreation } = useRouter();
  const {
    createTask,
    isPostCalled,
    isPostSuccess,
    isPostError,
  } = usePublic();

  const exit = t('buttons:exit');
  useText(switchToMenuTaskCreation, exit);

  const exitButton = (
    <Button key="exit-to-main-menu">
      {exit}
    </Button>
  );

  const countryContent = (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={t('create.questions.country.message')}>
      <Button id={CountriesEnum.RUSSIA}>
        {CountriesEnum.RUSSIA}
      </Button>
      <Button id={CountriesEnum.UKRAINE}>
        {CountriesEnum.UKRAINE}
      </Button>
      <Button id={CountriesEnum.BELARUS}>
        {CountriesEnum.BELARUS}
      </Button>
      <Button id={CountriesEnum.KAZAKHSTAN}>
        {CountriesEnum.KAZAKHSTAN}
      </Button>
      {exitButton}
    </ButtonGroup>
  );

  const genderContent = (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={t('create.questions.placement.message')}>
      <Button id={GenderEnum.MALE}>
        {GenderEnum.MALE}
      </Button>
      <Button id={GenderEnum.FEMALE}>
        {GenderEnum.FEMALE}
      </Button>
      <Button id={GenderEnum.ALL}>
        {GenderEnum.ALL}
      </Button>
      {exitButton}
    </ButtonGroup>
  );

  const increaseMiningRateContent = (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={t('create.questions.reward.message')}>
      <Button id="0.005">
        0.005
      </Button>
      <Button id="0.01">
        0.01
      </Button>
      {exitButton}
    </ButtonGroup>
  );

  const availableLimitContent = (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={t('create.questions.available_limit.message')}>
      {exitButton}
    </ButtonGroup>
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

  if (isPostError) {
    return <Text>Ошибка при создании задачи</Text>;
  }

  if (isPostSuccess) {
    return <Text>Задача успешно создана</Text>;
  }

  if (!isPostCalled) {
    // TODO переписать с DIALOG STEP
    return (
      <Dialog onFinish={createTask}>
        <DialogStep
          id={QUESTION_KEYS.COUNTRY}
          content={countryContent}
        >
          <DialogStep
            id={QUESTION_KEYS.GENDER}
            content={genderContent}
          >
            <DialogStep
              id={QUESTION_KEYS.INCREASE_MINING_RATE}
              content={increaseMiningRateContent}
            >
              <DialogStep
                id={QUESTION_KEYS.AVAILABLE_LIMIT}
                content={availableLimitContent}
              >
                <DialogStep
                  id={QUESTION_KEYS.NAME}
                  content={nameContent}
                >
                  <DialogStep
                    id={QUESTION_KEYS.DESCRIPTION}
                    content={descriptionContent}
                  >
                    <DialogStep
                      id={QUESTION_KEYS.CHECK_KEY}
                      content={checkKeyContent}
                    >
                      <DialogStep
                        id={QUESTION_KEYS.CONTACT}
                        content={contactContent}
                      >
                        <DialogStep
                          id={QUESTION_KEYS.URL}
                          content={urlContent}
                        />
                      </DialogStep>
                    </DialogStep>
                  </DialogStep>
                </DialogStep>
              </DialogStep>
            </DialogStep>
          </DialogStep>
        </DialogStep>
      </Dialog>
    );
  }

  return null;
};
