import type { UserAndGroupsData } from '../types';

export const getUserAndGroupsData = (data: any): UserAndGroupsData => {
  const { user_id = '', group_ids = [] as Array<number> } = data;

  const userId = user_id;
  const groupIds = group_ids.map(Number).filter((id: number) => id);

  return { userId, groupIds };
};
