import { useEffect, useRef } from 'react';
import { useTranslation } from '@common_bot/i18n';
import { HOOK } from '@common_bot/shared';

const { useToggleState } = HOOK;

export const useSceneWrapper = () => {
  const { t } = useTranslation('common');
  const ref = useRef(true);
  const { toggle, turnOff } = useToggleState(true);

  useEffect(() => {
    if (ref.current && toggle) {
      ref.current = false;
      setTimeout(turnOff, 300);
    }
  }, []);

  const shouldShown = ref.current && toggle;
  const title = `🤖 ${t('loading')}`;

  return { shouldShown, title };
};
