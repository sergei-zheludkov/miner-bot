import { useBotContext } from '@urban-bot/core';
// TODO настроить eslint на проставку type вниз импортов
import type { DialogAnswers, DialogValidation } from '@urban-bot/core';
import { useApi, useQuery } from '@common_bot/api';
import type { UserCreateDto } from '@common_bot/api';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';
import { COUNTRIES, LANGUAGES, GENDERS } from '../../constants';
import { QUESTION_KEYS } from './constants';

type Props = {
  refId: string | null;
  getUser: () => void;
}

export const useRegistration = ({ refId, getUser }: Props) => {
  const { t } = useTranslation('registration');
  const { switchToSceneGreeting } = useRouter();
  const { i18n } = useTranslation('lang');
  const { chat } = useBotContext();
  const { postUser } = useApi().user;
  const { fetch, isCalled, isSuccess } = useQuery('user', postUser, { isLazy: true });

  const handleSelectLanguage = async (lang: string) => {
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const selectedLang = lang as UserCreateDto['lang'];

    // TODO разобраться, почему не работает установка языка через onNext в процессе диалога
    await i18n.changeLanguage(selectedLang);
  };

  const createUser = async (answers: DialogAnswers) => {
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const lang = LANGUAGES[answers[QUESTION_KEYS.LANG]] as unknown as UserCreateDto['lang'];
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const country = COUNTRIES[answers[QUESTION_KEYS.COUNTRY]] as unknown as UserCreateDto['country'];
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const gender = GENDERS[answers[QUESTION_KEYS.GENDER]] as unknown as UserCreateDto['gender'];

    console.log(
      lang,
      country,
      gender,
    );

    const newUser = await fetch({
      id: chat.id,
      firstname: chat.firstName,
      lastname: chat.lastName,
      username: chat.username,
      who_invited_id: refId,
      lang,
      country,
      gender,
    });

    if (!newUser) {
      return;
    }

    await getUser();
    switchToSceneGreeting();
  };

  const isValidCountry = (country: string) => {
    if (COUNTRIES[country]) {
      return undefined;
    }

    const title = t('error_title');
    const description = t('questions.country.error_description');

    return `${title}\n${description}`;
  };

  const isValidLanguage = (lang: string) => {
    if (LANGUAGES[lang]) {
      return undefined;
    }

    const title = t('error_title');
    const description = t('questions.language.error_description');

    return `${title}\n${description}`;
  };

  const isValidGender: DialogValidation = (gender) => {
    if (GENDERS[gender]) {
      return undefined;
    }

    const title = t('error_title');
    const description = t('questions.gender.error_description');

    return `${title}\n${description}`;
  };

  return {
    isValidGender,
    isValidLanguage,
    isValidCountry,

    isRegistered: isSuccess,
    isSentData: isCalled,

    handleSelectLanguage,
    createUser,
  };
};
