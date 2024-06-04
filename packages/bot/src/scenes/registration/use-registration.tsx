import { useState } from 'react';
import { useBotContext } from '@urban-bot/core';
import { useApi, useQuery } from '@common_bot/api';
import type { UserCreateDto } from '@common_bot/api';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../contexts';

export const DEFAULT_STATE = {
  lang: '',
  country: '',
  gender: '',
};

type Answers = {
  lang: string;
  country: string;
  gender: string;
};

type Props = {
  refId: string | null;
  getUser: () => void;
};

export const useRegistration = ({ refId, getUser }: Props) => {
  // const { t } = useTranslation('registration');
  const { switchToSceneGreeting } = useRouter();
  const { i18n } = useTranslation('lang');
  const { chat } = useBotContext();
  const { postUser } = useApi().user;
  const { fetch, isCalled, isSuccess } = useQuery('user', postUser, { isLazy: true });
  const [state, setRegistrationState] = useState(DEFAULT_STATE);

  const createUser = async (answers: Answers) => {
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const lang = answers.lang as unknown as UserCreateDto['lang'];
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const country = answers.country as unknown as UserCreateDto['country'];
    // Такой финт из-за кривой генерации enum в @common_bot/api
    const gender = answers.gender as unknown as UserCreateDto['gender'];

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

  const handleChangeLanguage = async (lang: string) => {
    await i18n.changeLanguage(state.lang);

    setRegistrationState(
      (prevState) => ({ ...prevState, lang }),
    );
  };

  const handleChangeCountry = async (country: string) => setRegistrationState(
    (prevState) => ({ ...prevState, country }),
  );

  const handleChangeGender = async (gender: string) => {
    await createUser({ gender, country: state.country, lang: state.lang });
  };

  return {
    state,
    handleChangeLanguage,
    handleChangeCountry,
    handleChangeGender,

    isRegistered: isSuccess,
    isSentData: isCalled,
  };
};
