import React from 'react';
import { Text } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';

interface Props {
  isRemoveKeyboard?: boolean;
}

export const Loading = ({ isRemoveKeyboard }: Props) => {
  const { t } = useTranslation('common');

  return (
    <Text isNewMessageEveryRender={false} isRemoveKeyboard={isRemoveKeyboard}>
      {`🤖 ${t('loading')}`}
    </Text>
  );
};
