import React, { ReactNode } from 'react';
import { I18nextProvider, I18nContext } from 'react-i18next';
import { i18n as I18N } from 'i18next';

type ProviderProps = {
  children: ReactNode;
  i18n: I18N;
};

const I18nProvider = ({ children, i18n }: ProviderProps) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

export { I18nContext, I18nProvider };
export type { ProviderProps };
