import { useState } from 'react';
import { useApi, useQuery } from '@common_bot/api';
import { SCENE } from './constants';

export const useLeaders = () => {
  const { getReferralLeaders: getLeadersApi } = useApi().user;

  const {
    data: leaders,
    isCalled: isGetCalled,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
  } = useQuery('get_referral_leaders', getLeadersApi);

  const [scene, setScene] = useState(SCENE.TODAY);

  const handleClickToday = () => setScene(SCENE.TODAY);
  const handleClickMonth = () => setScene(SCENE.MONTH);
  const handleClickAllTime = () => setScene(SCENE.ALL_TIME);

  return {
    data: leaders?.[scene],
    scene,
    isGetCalled,
    isGetLoading,
    isGetSuccess,
    isGetError,
    handleClickToday,
    handleClickMonth,
    handleClickAllTime,
  };
};
