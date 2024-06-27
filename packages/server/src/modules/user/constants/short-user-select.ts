import { FindOptionsSelect } from 'typeorm';
import { UserEntity as User } from '../user.entity';

export const SHORT_USER_SELECT: FindOptionsSelect<User> = {
  id: true,
  firstname: true,
  lastname: true,
  country: true,
  gender: true,
  role: true,
};
