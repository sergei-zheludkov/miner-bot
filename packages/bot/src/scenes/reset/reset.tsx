import { useAnyEvent, useBotContext } from '@urban-bot/core';
import { useRouter } from '../../contexts';
import { GetUserCallback } from '../../contexts/user/types';
import { logScene } from '../../logs';

type Props = {
  getUser?: GetUserCallback;
}

export const Reset = ({ getUser }: Props) => {
  const { chat } = useBotContext();
  const { switchToMenuMain } = useRouter();

  logScene(chat.id, 'scene_reset', chat.username);

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
