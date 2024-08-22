import { useApi, useQuery, type TaskCreateDto } from '@common_bot/api';
import { CurrencyEnum, TasksEnum } from '@common_bot/shared';
import type { DialogAnswers } from '@urban-bot/core';
import { QUESTION_KEYS } from './constants';

export const usePublic = () => {
  const { postTask: postTaskApi } = useApi().task;
  // const { switchToMenuTasksControl } = useRouter();
  const {
    isCalled: isPostCalled,
    // isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: isPostError,
    // statusCode: postStatusCode,
    fetch: postTask,
  } = useQuery('post_task', postTaskApi, { isLazy: true });

  const createTask = async (answers: DialogAnswers) => {
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const type = TasksEnum.TG_PUBLIC as unknown as TaskCreateDto['type'];
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const country = answers[QUESTION_KEYS.COUNTRY] as unknown as TaskCreateDto['country'];
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const placement = answers[QUESTION_KEYS.PLACEMENT] as unknown as TaskCreateDto['placement'];
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const gender = answers[QUESTION_KEYS.GENDER] as unknown as TaskCreateDto['gender'];
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const currency = CurrencyEnum.TON as unknown as TaskCreateDto['currency'];

    await postTask({
      mining_rate: Number(answers[QUESTION_KEYS.INCREASE_MINING_RATE]).toFixed(10),
      available_limit: Number(answers[QUESTION_KEYS.AVAILABLE_LIMIT]),
      description: answers[QUESTION_KEYS.DESCRIPTION],
      check_key: answers[QUESTION_KEYS.CHECK_KEY],
      contact_id: answers[QUESTION_KEYS.CONTACT],
      name: answers[QUESTION_KEYS.NAME],
      url: answers[QUESTION_KEYS.URL],
      currency,
      type,
      country,
      placement,
      gender,
    });
  };

  // const isValidLanguage = (lang: string) => {
  // const isValid = (LANGUAGES as Array<string>).includes(lang);
  //
  // if (isValid) {
  //   return undefined;
  // }
  //
  // const title = t('error_title');
  // const description = t('questions.language.error_description');
  //
  // return `${title}\n${description}`;
  // };

  // const isValidCountry = (country: string) => {
  // const isValid = (COUNTRIES as Array<string>).includes(country);
  //
  // if (isValid) {
  //   return undefined;
  // }
  //
  // const title = t('error_title');
  // const description = t('questions.country.error_description');
  //
  // return `${title}\n${description}`;
  // };

  // const isValidGender: DialogValidation = (gender) => {
  // const isValid = gender === GENDERS.MALE || gender === GENDERS.FEMALE;
  //
  // if (isValid) {
  //   return undefined;
  // }
  //
  // const title = t('error_title');
  // const description = t('questions.gender.error_description');
  //
  // return `${title}\n${description}`;
  // };

  return {
    createTask,
    isPostCalled,
    isPostSuccess,
    isPostError,
    // isPostLoading,
    // isPostSuccess,
    // isPostError,
    // postStatusCode,
    // postUser,
  };
};
