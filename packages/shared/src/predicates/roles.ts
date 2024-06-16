import { RoleEnum as Role } from '../enums';

export const isUser = (role: Role) => role === Role.USER;
export const isAdmin = (role: Role) => role === Role.ADMIN;
export const isSupport = (role: Role) => role === Role.SUPPORT;
export const isAffiliate = (role: Role) => role === Role.AFFILIATE;
export const isAdvertiser = (role: Role) => role === Role.ADVERTISER;
