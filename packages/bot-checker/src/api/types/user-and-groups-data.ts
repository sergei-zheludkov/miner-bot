export type UserAndGroupsData = {
  userId: string;
  groupIds: Array<string>;
};

export type UserAndGroupsReturnData = {
  userId: string;
  groupCheckedData: { [id: string]: boolean };
};
