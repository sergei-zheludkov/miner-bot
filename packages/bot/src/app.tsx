import React from 'react';
import { I18nProvider } from '@common_bot/i18n';
import { ApiProvider } from '@common_bot/api';
import { SceneSwitcher } from './scene-switcher';
import { Notifications } from './notifications';
import { Provider } from './contexts';
import { i18n } from './i18n';

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
