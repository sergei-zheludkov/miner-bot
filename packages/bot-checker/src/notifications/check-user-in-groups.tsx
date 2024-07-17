import React, { useEffect } from 'react';
import { useBotContext } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { messageBroker } from '../api';
import type { CheckUserInGroupsCallback, UserAndGroupsReturnData } from '../api';

// TODO вынести в shared
const AVAILABLE_STATUSES = ['creator', 'administrator', 'member'];
export const SUPPORT_ID = '6694504339';

export const CheckUserInGroups: React.FC = () => {
  const { chat, bot } = useBotContext<UrbanBotTelegram>();

  const callback: CheckUserInGroupsCallback = async (data) => {
    const { userId, groupIds } = data;

    const checkedGroups = await Promise.all(groupIds
      .map<Promise<[string, boolean] | null>>(async (groupId) => {
        try {
          // Проверяем человека на наличие в группе
          const { status } = await bot.client.getChatMember(Number(groupId), userId);

          return [groupId, AVAILABLE_STATUSES.includes(status)];
        } catch (error) {
          // Оповещаем админа, если владелец чата не добавил бота в админку
          bot.client.sendMessage(SUPPORT_ID, `Владелец паблика c ID: ${groupId} не добавил бота в Админку`);

          return null;
        }
      }));

    const groupCheckedData = checkedGroups.reduce<UserAndGroupsReturnData['groupCheckedData']>((acc, item) => {
      if (!item) {
        return acc;
      }

      const [groupId, isInGroup] = item;

      acc[groupId] = isInGroup;

      return acc;
    }, {});

    return { userId, groupCheckedData };
  };

  useEffect(
    () => messageBroker.checkUserInGroups(chat.id, callback),
    [bot.client, chat.id],
  );

  return null;
};
