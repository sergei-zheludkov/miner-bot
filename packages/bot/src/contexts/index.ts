import { Router, useRouter } from './router';
import { User, useUser, usePatchUser } from './user';

const Provider = {
  Router,
  User,
};

export {
  Provider,
  useUser,
  useRouter,
  usePatchUser,
};
