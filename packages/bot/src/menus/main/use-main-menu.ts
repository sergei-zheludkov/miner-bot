import { useRouter, useUser } from '../../contexts';

export const useMainMenu = () => {
  const {
    switchToMenuAdmin,
    // switchToMenuSupport,
    switchToMenuReferral,
    // switchToMenuSettings,
    switchToSceneMining,
    switchToSceneBalance,
    switchToMenuInformation,
    switchToSceneTaskController,
  } = useRouter();
  const { getUser } = useUser();

  const getUserUpdateCallback = (callback: () => void) => () => {
    getUser();

    callback();
  };

  const handleCommandAdmin = switchToMenuAdmin;
  const handleClickMining = getUserUpdateCallback(switchToSceneMining);
  const handleClickTasks = getUserUpdateCallback(switchToSceneTaskController);
  const handleClickReferral = getUserUpdateCallback(switchToMenuReferral);
  const handleClickBalance = getUserUpdateCallback(switchToSceneBalance);
  const handleClickInformation = switchToMenuInformation;

  return {
    handleCommandAdmin,
    handleClickMining,
    handleClickTasks,
    handleClickReferral,
    handleClickBalance,
    handleClickInformation,
  };
};
