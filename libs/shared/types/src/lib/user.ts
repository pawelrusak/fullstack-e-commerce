import type { Id, Timestamp, IdSchema, TimestampSchema } from './shared';
import type { Address } from './address';

export type UserAccountName = {
  username: string;
};

export type UserName = {
  firstName?: string;
  lastName?: string;
};

export type UserContactEmail = {
  email: string;
};

export type UserContactPhone = {
  phone?: string;
};

export type UserContactInfo = UserContactEmail & UserContactPhone;

export type UserAvatar = {
  avatarUrl?: string;
};

export type UserAddress = {
  address: Address;
};

export type UserBanStatusTimestamp = {
  /**
   * Date the user was banned. JSON-compatible
   */
  bannedAt?: string;
};

export type UserBanStatusFlag = {
  isBanned?: boolean;
};

export type UserBanStatus = UserBanStatusTimestamp & UserBanStatusFlag;

export type UserRole = {
  isAdmin: boolean;
};

export type UserAuthentication = UserContactEmail & {
  password: string;
};

export type User = Id &
  UserAccountName &
  UserName &
  UserAvatar &
  UserAddress &
  UserBanStatus &
  UserContactInfo &
  UserRole &
  UserAuthentication &
  Timestamp;

/**
 * -----------------------------------------------------------------------------------
 *
 *                                DATABASE SCHEMA DEFINITION
 *
 * ------------------------------------------------------------------------------------
 */

export type UserBanStatusTimestampSchema = {
  /**
   * Date the user was banned. Mongoose-compatible
   */
  bannedAt?: Date;
};

export type UserBanStatusSchema = UserBanStatusTimestampSchema &
  UserBanStatusFlag;

// TODO: Rename to UserEntitySchema
export type UserSchema = IdSchema &
  UserAccountName &
  UserName &
  UserAvatar &
  UserAddress &
  UserBanStatusSchema &
  UserContactInfo &
  UserRole &
  UserAuthentication &
  TimestampSchema;
