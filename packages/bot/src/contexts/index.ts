import { Router, useRouter } from './router';
import { User, useUser, usePatchUser } from './user';
import { Wallet, useWallet } from './wallet';
import { Mining, useMining } from './mining';

const Provider = {
  Router,
  User,
  Wallet,
  Mining,
};

export {
  Provider,
  useRouter,
  useUser,
  useWallet,
  useMining,
  usePatchUser,
};
