import { Repository } from 'typeorm';
import { UserEntity as User } from '../user.entity';
import { SHORT_USER_SELECT } from '../constants';
import { RawLeadersData } from '../types';
import { findOne } from './find-one';

export const getLeadersDataCallback = (
  users_repository: Repository<User>,
) => async ({ id, referral_counter }: RawLeadersData) => ({
  ...(await findOne(users_repository, id, SHORT_USER_SELECT)),
  referral_counter: Number(referral_counter),
});
