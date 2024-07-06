import { MiningUpdateDto } from '@common_bot/api';
import { CurrencyEnum } from '@common_bot/shared';
import { useMining, useUser } from '../../contexts';

// Такой финт из-за кривой генерации enum в @common_bot/api
const currency = CurrencyEnum.TON as unknown as MiningUpdateDto['currency'];

export const useMiningTon = () => {
  const { user } = useUser();
  const { isPatchMiningCalled, patchMining } = useMining();

  const handleClickGet = async () => {
    if (isPatchMiningCalled) {
      return;
    }

    await patchMining({
      id: user.id,
      started: new Date().toISOString(),
      currency,
    });
  };

  return {
    handleClickGet,
  };
};
