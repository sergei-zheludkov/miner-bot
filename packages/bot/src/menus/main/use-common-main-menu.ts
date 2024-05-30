import { useTranslation } from '@common_bot/i18n';
// import { Main } from '../main';

// type UseCommonMainMenu = Parameters<typeof Main>[0]['useMain'];

export const useCommonMainMenu /* : UseCommonMainMenu */ = () => {
  const { t } = useTranslation('common');

  return { message: t('main_menu') };
};
