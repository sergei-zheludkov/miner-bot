import React from 'react';
import {
  Button,
  ButtonGroup,
  Dialog,
  DialogStep,
  Text,
  useText,
} from '@urban-bot/core';
import {
  TasksEnum,
  CountriesEnum,
  PlacementEnum,
  GenderEnum,
  CurrencyEnum,
} from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';
import { QUESTION_KEYS } from './constants';
import { useCreate } from './use-create';

export const Create = () => {
  const { t } = useTranslation('tasks');
  const { switchToMenuTasksControl } = useRouter();
  const {
    createTask,
    isPostCalled,
    isPostSuccess,
    isPostError,
  } = useCreate();

  const exit = t('buttons:exit');
  useText(switchToMenuTasksControl, exit);

  const exitButton = (
    <Button key="exit-to-main-menu">
      {exit}
    </Button>
  );

  const typeContent = (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={t('create.questions.type.message')}>
      {/* <Button id={TasksEnum.TG_PUBLIC}> */}
      {/*  {t(`create.buttons.${TasksEnum.TG_PUBLIC}`)} */}
      {/* </Button> */}

      <Button id={TasksEnum.TG_PUBLIC}>
        {TasksEnum.TG_PUBLIC}
      </Button>
      {exitButton}
    </ButtonGroup>
  );

  const countryContent = (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={t('create.questions.country.message')}>
      {/* <Button id={CountriesEnum.RUSSIA}> */}
      {/*  {t(`country:${CountriesEnum.RUSSIA}`)} */}
      {/* </Button> */}
      {/* <Button id={CountriesEnum.BELARUS}> */}
      {/*  {t(`country:${CountriesEnum.BELARUS}`)} */}
      {/* </Button> */}
      {/* <Button id={CountriesEnum.KAZAKHSTAN}> */}
      {/*  {t(`country:${CountriesEnum.KAZAKHSTAN}`)} */}
      {/* </Button> */}

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

  const placementContent = (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={t('create.questions.placement.message')}>
      {/* <Button id={PlacementEnum.TASK_LIST}> */}
      {/*  {t(`create.buttons.${PlacementEnum.TASK_LIST}`)} */}
      {/* </Button> */}
      {/* <Button id={PlacementEnum.MINING_ACTIVATION}> */}
      {/*  {t(`create.buttons.${PlacementEnum.MINING_ACTIVATION}`)} */}
      {/* </Button> */}

      <Button id={PlacementEnum.TASK_LIST}>
        {PlacementEnum.TASK_LIST}
      </Button>
      <Button id={PlacementEnum.MINING_ACTIVATION}>
        {PlacementEnum.MINING_ACTIVATION}
      </Button>
      {exitButton}
    </ButtonGroup>
  );

  const currencyContent = (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={t('create.questions.currency.message')}>
      <Button id={CurrencyEnum.TON}>
        {CurrencyEnum.TON}
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
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={t('create.questions.increase_mining_rate.message')}>
      <Button id="0.000_000_1">
        0.000_000_1
      </Button>
      <Button id="0.000_000_2">
        0.000_000_2
      </Button>
      {/* <Button id="0.000_000_3"> */}
      {/*  0.000_000_3 */}
      {/* </Button> */}
      {/* <Button id="0.000_000_5"> */}
      {/*  0.000_000_5 */}
      {/* </Button> */}
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
    return (
      <Dialog onFinish={createTask}>
        <DialogStep
          id={QUESTION_KEYS.TYPE}
          content={typeContent}
        >
          <DialogStep
            id={QUESTION_KEYS.COUNTRY}
            content={countryContent}
          >
            <DialogStep
              id={QUESTION_KEYS.PLACEMENT}
              content={placementContent}
            >
              <DialogStep
                id={QUESTION_KEYS.GENDER}
                content={genderContent}
              >
                <DialogStep
                  id={QUESTION_KEYS.CURRENCY}
                  content={currencyContent}
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
            </DialogStep>
          </DialogStep>
        </DialogStep>
      </Dialog>
    );
  }

  return null;
};
