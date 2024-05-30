import React from 'react';
import { getDefaultI18n, I18nProvider } from '@common_bot/i18n';
import { ApiProvider } from '@common_bot/api';
import { SceneSwitcher } from './scene-switcher';
import { Notifications } from './notifications';
import { Provider } from './contexts';

const i18n = getDefaultI18n();

export const App = () => (
  <ApiProvider>
    <I18nProvider i18n={i18n}>
      <Provider.Router>
        <Provider.User>
          <SceneSwitcher />
          <Notifications />
        </Provider.User>
      </Provider.Router>
    </I18nProvider>
  </ApiProvider>
);
