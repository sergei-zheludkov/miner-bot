import { FindOptionsSelect, Repository } from 'typeorm';
import { UserEntity as User } from '../user.entity';

export const findOne = (
  users_repository: Repository<User>,
  id: string,
  select?: FindOptionsSelect<User>,
) => users_repository.findOne({
  where: { id },
  select,
});
