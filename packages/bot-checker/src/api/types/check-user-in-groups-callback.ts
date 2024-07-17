import type { UserAndGroupsData, UserAndGroupsReturnData } from './user-and-groups-data';

export type CheckUserInGroupsCallback = (params: UserAndGroupsData) => Promise<UserAndGroupsReturnData>;
