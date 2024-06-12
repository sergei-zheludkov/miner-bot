import React from 'react';
import { Text, useText } from '@urban-bot/core';
import { useNotification } from './use-notification';
import { NOTIFICATION_STATE } from './constants';

// TODO нужно ли доделывать?
export const Notification = () => {
  const { state, handleGeo } = useNotification();

  // TODO валидацию
  useText((event) => handleGeo(event.text));

  const input = (<Text>Введи ГЕО</Text>);
  const check = (<Text>Проверка уведомления</Text>);
  const send = (<Text>Отправлено</Text>);

  switch (state) {
    case NOTIFICATION_STATE.INPUT:
      return input;
    case NOTIFICATION_STATE.CHECK:
      return check;
    case NOTIFICATION_STATE.SEND:
      return send;
    default:
      return null;
  }
};
