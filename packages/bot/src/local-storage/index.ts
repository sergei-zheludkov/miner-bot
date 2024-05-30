import { LocalStorage } from 'node-localstorage';
import { UrbanChat } from '@urban-bot/core';

const CHAT_MAP_KEY = 'CHAT_MAP_KEY';
const localStorage = new LocalStorage('./storage');

export const getChatsMap = (): Record<string, UrbanChat> => {
  const chatsRaw = localStorage.getItem(CHAT_MAP_KEY);

  if (!chatsRaw) {
    return {};
  }

  return JSON.parse(chatsRaw) ?? {};
};

export const getChats = () => {
  const chatsMap = getChatsMap();
  return Object.values(chatsMap);
};

export const saveChat = (chat: UrbanChat) => {
  const chatsMap = getChatsMap();

  const newChatsMap = {
    ...chatsMap,
    [String(chat.id)]: chat,
  };

  localStorage.setItem(CHAT_MAP_KEY, JSON.stringify(newChatsMap));
};
