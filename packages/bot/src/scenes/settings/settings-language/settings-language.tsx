import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRouter } from '../../../contexts';
import { useSettingsLanguage } from './use-settings-language';

const SettingsLanguage = () => {
  const { switchToMenuSettings } = useRouter();
  const { t } = useTranslation('settings');
  const {
    currentLang,
    availableLanguages,
    isChangingMode,
    handleSave,
    turnOnChangingMode,
    turnOffChangingMode,
  } = useSettingsLanguage();

  const languageButtons = availableLanguages.map((language) => (
    <Button key={language} onClick={handleSave(language)}>
      {t(`buttons:${language}`)}
    </Button>
  ));

  const changingModeButton = (
    <Button key="change-language" onClick={turnOnChangingMode}>
      {t('buttons:change')}
    </Button>
  );

  const backToLanguageSettingsButton = (
    <Button key="back-to-language-settings" onClick={turnOffChangingMode}>
      {t('buttons:back')}
    </Button>
  );

  const backToSettingsButton = (
    <Button key="back-to-settings" onClick={switchToMenuSettings}>
      {t('buttons:back')}
    </Button>
  );

  const activeLang = t(`buttons:${currentLang}`);
  const title = isChangingMode
    ? t('language.choose')
    : `${t('language.used')}${activeLang}`;

  const buttons = isChangingMode
    ? [...languageButtons, backToLanguageSettingsButton]
    : [changingModeButton, backToSettingsButton];

  return (
    <ButtonGroup
      title={title}
      isNewMessageEveryRender={false}
      maxColumns={1}
    >
      {buttons}
    </ButtonGroup>
  );
};

export { SettingsLanguage };
