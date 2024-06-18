import type { Types } from 'mongoose';
import type { Id, Timestamp } from './shared';
import type { Prettify, Modify } from './utils';
import { Address } from './address';

export type User = Id & {
  username: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  password: string;
  isAdmin: boolean;
  avatarUrl?: string;
  address: Address;
  bannedAt?: string;
} & Timestamp;

export type UserSchema = Prettify<
  Modify<
    User,
    {
      _id: Types.ObjectId;
      isAdmin: User['isAdmin'];
      bannedAt?: Date;
    }
  >
> & {
  /**
   * This is a virtual field
   *
   * @see {@link https://mongoosejs.com/docs/tutorials/virtuals.html | Mongoose Virtuals}
   */
  isBanned: boolean;
};
