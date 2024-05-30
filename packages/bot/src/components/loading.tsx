import React, { useEffect, useState } from 'react';
import { Text } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';

interface Props {
  isRemoveKeyboard?: boolean;
}

const clocks = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛'];
const timeout = 1000;

const Loading: React.FC<Props> = ({ isRemoveKeyboard }) => {
  const { t } = useTranslation('common');
  const [state, setState] = useState(0);
  const incrementState = () => setState((prev) => prev + 1);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const isShow = state < clocks.length - 1;

    if (isShow) {
      timeoutId = setTimeout(incrementState, timeout);
    }

    return () => clearTimeout(timeoutId);
  });

  return (
    <Text isNewMessageEveryRender={false} isRemoveKeyboard={isRemoveKeyboard}>
      {clocks[state]}
      &#32;
      {t('loading')}
    </Text>
  );
};

export { Loading };
