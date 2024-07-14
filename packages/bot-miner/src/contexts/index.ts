import { Router, useRouter } from './router';
import { User, useUser, usePatchUser } from './user';
import { Wallet, useWallet } from './wallet';
import { Mining, useMining } from './mining';
import { Withdrawal, useWithdrawals } from './withdrawals';

const Provider = {
  Router,
  User,
  Wallet,
  Mining,
  Withdrawal,
};

export {
  Provider,
  useRouter,
  useUser,
  useWallet,
  useMining,
  useWithdrawals,
  usePatchUser,
};
