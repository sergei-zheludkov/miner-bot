import { RoleEnum as Role } from '../enums';

export const isUser = (role: Role | string) => role === Role.USER;
export const isAdmin = (role: Role | string) => role === Role.ADMIN;
export const isSupport = (role: Role | string) => role === Role.SUPPORT;
export const isAffiliate = (role: Role | string) => role === Role.AFFILIATE;
export const isAdvertiser = (role: Role | string) => role === Role.ADVERTISER;
