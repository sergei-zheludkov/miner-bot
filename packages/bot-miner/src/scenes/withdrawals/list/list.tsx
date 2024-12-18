import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import type { WithdrawalEntity } from '@common_bot/api';

type Props = {
  withdrawals: Array<WithdrawalEntity>;
  onOpenClick: (withdrawal: WithdrawalEntity) => void;
  onBackClick: () => void;
};

export const List = ({ withdrawals, onOpenClick, onBackClick }: Props) => {
  const { t } = useTranslation('withdrawals');

  const title = withdrawals.length ? t('list.title') : t('list.empty');

  const backButtons = [
    <Button key="back-to-balance" onClick={onBackClick}>
      {t('buttons:back')}
    </Button>,
  ];

  return (
    <ButtonGroup isNewMessageEveryRender={false} maxColumns={1} title={title}>
      {withdrawals.map((withdrawal) => {
        const { id, status } = withdrawal;

        const handleClick = () => onOpenClick(withdrawal);

        return (
          <Button key={id} onClick={handleClick}>
            {`${t('request')} ${id} - ${t(`status.${status}`).slice(0, 2)}`}
          </Button>
        );
      }).concat(backButtons)}
    </ButtonGroup>
  );
};
