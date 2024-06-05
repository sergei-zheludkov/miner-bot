import { useAnyEvent } from '@urban-bot/core';
import { useRouter } from '../../contexts';

export const Reset = () => {
  const { switchToMenuMain } = useRouter();

  useAnyEvent((event) => {
    if (!event.command) {
      switchToMenuMain();
    }
  });

  return null;
};
