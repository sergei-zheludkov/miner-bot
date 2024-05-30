import { useBotContext } from '@urban-bot/core';
import { useApi, useQuery, UserCreateDto } from '@common_bot/api';
import { BotLanguageEnum } from '@common_bot/shared';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';

interface Props {
  refId: string | null;
  getUser: () => void;
}

const useShortRegistration = ({ refId, getUser }: Props) => {
  const { switchToSceneGreeting } = useRouter();
  const { i18n } = useTranslation('lang');
  const { chat } = useBotContext();
  const { postUser } = useApi().user;
  const { fetch, isCalled, isSuccess } = useQuery('user', postUser, { isLazy: true });

  const createUser = async (lang: BotLanguageEnum) => {
    const newUser = await fetch({
      id: chat.id,
      firstname: chat.firstName,
      lastname: chat.lastName,
      username: chat.username,
      who_invited_id: refId,
      // Такой финт из-за кривой генерации enum в @common_bot/api
      lang: lang as unknown as UserCreateDto['lang'],
    });

    if (!newUser) {
      return;
    }

    await i18n.changeLanguage(lang);
    await getUser();
    switchToSceneGreeting();
  };

  return {
    isRegistered: isSuccess,
    isSentData: isCalled,
    createUser,
  };
};

export { useShortRegistration };
