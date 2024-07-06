import { LocalStorage } from 'node-localstorage';
import { UrbanChat } from '@urban-bot/core';

const FILE_NAME = 'CHATS';
const localStorage = new LocalStorage('./storage');

export const getChatsMap = (): Record<string, UrbanChat> => {
  const chatsRaw = localStorage.getItem(FILE_NAME);

  if (!chatsRaw) {
    return {};
  }

  return JSON.parse(chatsRaw) ?? {};
};

export const getChats = () => {
  const chatsMap = getChatsMap();

  return Object.values(chatsMap);
};

export const getChat = (id: string): UrbanChat | null => {
  const chat = getChatsMap()[id];

  return chat?.id ? chat : null;
};

export const saveChat = (chat: UrbanChat) => {
  const chatsMap = getChatsMap();

  const newChatsMap = {
    ...chatsMap,
    [chat.id]: chat,
  };

  localStorage.setItem(FILE_NAME, JSON.stringify(newChatsMap));
};
