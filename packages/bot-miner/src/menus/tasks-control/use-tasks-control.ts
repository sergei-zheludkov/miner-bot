import { PREDICATES, RoleEnum } from '@common_bot/shared';
import { useUser } from '../../contexts';

const { ROLES: { isAdmin } } = PREDICATES;

export const useTasksControl = () => {
  const { user } = useUser();
  const role = user.role as unknown as RoleEnum;
  const isUserAdmin = isAdmin(role);

  return { isUserAdmin };
};
