import React, { useState } from 'react';
import {
  ButtonGroup,
  Button,
  Text,
  useText, useBotContext,
} from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
// import { predicates, RoleEnum } from '@common_bot/shared';
import { useUser, useRouter } from '../../contexts';

// const { ROLES: { isAffiliate } } = predicates;
// TODO в .env
const BOT_NAME = 'zheludkov_test_bot';
const nothingShown = { inviteIsShowed: false, moneyIsShowed: false };
const inviteShowed = { inviteIsShowed: true, moneyIsShowed: false };
const moneyShowed = { inviteIsShowed: false, moneyIsShowed: true };

interface State {
  inviteIsShowed: boolean;
  moneyIsShowed: boolean;
}

// TODO сделать перевод по запросу после проверки и подтверждения данных
export const Referral = () => {
  const { chat } = useBotContext();
  const {
    // switchToMenuLinkGenerator,
    // switchToMenuAffiliateStatistics,
    switchToMenuMain,
  } = useRouter();
  // const { user } = useUser();
  const { t } = useTranslation(['buttons', 'referral', 'invite']);
  const [{ inviteIsShowed, moneyIsShowed }, setShowed] = useState<State>(nothingShown);
  // const role = user.role as unknown as RoleEnum;
  // const isUserAffiliate = isAffiliate(role);

  // const handleLinkGenerator = () => {
  //   if (isUserAffiliate) {
  //     switchToMenuLinkGenerator();
  //   }
  // };
  //
  // const handleStatistic = () => {
  //   if (isUserAffiliate) {
  //     switchToMenuAffiliateStatistics();
  //   }
  // };

  /* ---------- BUTTON HOOKS ---------- */
  const invite = t('invite');
  useText(() => setShowed(inviteShowed), invite);

  const output_money = t('output_money');
  useText(() => setShowed(moneyShowed), output_money);

  // const link_generator = t('link_generator');
  // useText(handleLinkGenerator, link_generator);

  // const statistics = t('statistics');
  // useText(handleStatistic, statistics);

  const back = t('back');
  useText(switchToMenuMain, back);
  /* --------------------------------- */

  if (inviteIsShowed) {
    const inviteLink = `https://t.me/${BOT_NAME}?start=`;
    return (
      <>
        <Text>
          <b>{t('invite:title')}</b>
        </Text>
        <Text simulateTyping={2000}>
          {t('invite:message')}
          <br />
          <br />
          <a href={inviteLink}>{inviteLink}</a>
        </Text>
      </>
    );
  }

  if (moneyIsShowed) {
    // return <Text>{t('output_money:message')}</Text>;
  }

  const message = (
    <>
      {t('referral:title')}
      <br />
      <br />
      {t('referral:message')}
    </>
  );

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={message}>
      <Button>{invite}</Button>
      <Button>{output_money}</Button>
      {/* {isUserAffiliate && <Button>{statistics}</Button> } */}
      {/* {isUserAffiliate && <Button>{link_generator}</Button>} */}
      <Button>{back}</Button>
    </ButtonGroup>
  );
};
