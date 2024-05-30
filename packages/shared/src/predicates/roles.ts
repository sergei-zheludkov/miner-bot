import { RoleEnum as Role } from '../enums';

const isUser = (role: Role) => role === Role.USER;
const isAdmin = (role: Role) => role === Role.ADMIN;
const isSupport = (role: Role) => role === Role.SUPPORT;
const isAffiliate = (role: Role) => role === Role.AFFILIATE;

export {
  isUser, isAdmin, isSupport, isAffiliate,
};
