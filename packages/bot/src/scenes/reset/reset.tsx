import { useAnyEvent, useBotContext } from '@urban-bot/core';
import { useRouter } from '../../contexts';
import { GetUserCallback } from '../../contexts/user/types';
import { logScene } from '../../logs';

type Props = {
  getUser?: GetUserCallback;
}

export const Reset = ({ getUser }: Props) => {
  const { chat: { id, username, firstName } } = useBotContext();
  const { switchToMenuMain } = useRouter();

  logScene(id, 'scene_reset', username ?? firstName);

  useAnyEvent((event) => {
    if (!event.command) {
      (async () => {
        // console.log('Reset Component | Запрос о юзере на сервер');
        await getUser?.();
      })();

      switchToMenuMain();
    }
  });

  return null;
};
