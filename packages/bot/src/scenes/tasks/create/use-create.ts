import { useApi, useQuery, type TaskCreateDto } from '@common_bot/api';
import type { DialogAnswers, DialogValidation } from '@urban-bot/core';
import { GENDERS, QUESTION_KEYS } from './constants';
import { COUNTRIES, LANGUAGES } from '../../../constants';
import { useRouter } from '../../../contexts';

export const useCreate = () => {
  const { postTask: postTaskApi } = useApi().task;
  const { switchToMenuTasksControl } = useRouter();
  const {
    isCalled: isPostCalled,
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: isPostError,
    statusCode: postStatusCode,
    fetch: postTask,
  } = useQuery('post_task', postTaskApi, { isLazy: true });

  const createTask = async (answers: DialogAnswers) => {
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const type = answers[QUESTION_KEYS.TYPE] as unknown as TaskCreateDto['type'];
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const country = answers[QUESTION_KEYS.COUNTRY] as unknown as TaskCreateDto['country'];
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const placement = answers[QUESTION_KEYS.PLACEMENT] as unknown as TaskCreateDto['placement'];

    const args = {
      // increase_mining_rate: Number.parseFloat(answers.increase_mining_rate) * 1,
      available_limit: Number(answers.available_limit),
      name: answers.name,
      description: answers.description,
      check_key: answers.check_key,
      contact: answers.contact,
      url: answers.url,
      type,
      country,
      placement,
    };

    const newTask = await postTask(args);

    console.log(
      'increase_mining_rate:',
      answers.increase_mining_rate,
      '\nARGS:',
      args,
      '\nNEW_TASK error body message:',
      newTask?.error?.body.message,
    );

    switchToMenuTasksControl();
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
    isSentData: isPostCalled,
    // isPostLoading,
    // isPostSuccess,
    // isPostError,
    // postStatusCode,
    // postUser,
  };
};
