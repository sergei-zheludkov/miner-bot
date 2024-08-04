import React from 'react';
import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import type { UseTextCallback } from './types';

type Props = {
  comment: string;
  onChange: UseTextCallback;
  onClickBack: () => void;
};

export const Comment = ({ comment, onChange, onClickBack }: Props) => {
  const { t } = useTranslation('withdrawals');

  useText(onChange);

  const commentComponent = comment ? (
    <>
      <b>{t('comment.title')}</b>
      :&#32;
      {comment}
      <br />
      <br />
    </>
  ) : null;

  const title = (
    <>
      {commentComponent}
      {t('comment.input')}
    </>
  );

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={title}>
      <Button key="back-to-payment" onClick={onClickBack}>
        {t('buttons:back')}
      </Button>
    </ButtonGroup>
  );
};
