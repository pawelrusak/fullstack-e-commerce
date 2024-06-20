import mongoose from 'mongoose';
import { addressSchema } from '../schemas/address.schema';
import type { UserSchema } from '@e-shop/types';

export const userSchema = new mongoose.Schema<UserSchema>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 2,
      /**
       * @see {@link https://www.rfc-editor.org/rfc/rfc5321#section-4.5.3.1.1 | RFC 5321}
       */
      maxLength: 64,
    },
    firstName: {
      type: String,
      required: false,
      trim: true,
      minLength: 2,
      /**
       * @see {@link https://www.rfc-editor.org/rfc/rfc5321#section-4.5.3.1.1 | RFC 5321}
       */
      maxLength: 64,
    },
    lastName: {
      type: String,
      required: false,
      trim: true,
      minLength: 2,
      /**
       * @see {@link https://www.rfc-editor.org/rfc/rfc5321#section-4.5.3.1.1 | RFC 5321}
       */
      maxLength: 64,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minLength: 8,
      /**
       * @see {@link https://www.rfc-editor.org/rfc/rfc5321#section-4.5.3.1.3 | RFC 5321}
       */
      maxLength: 256,
    },
    phone: {
      type: String,
      required: false,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 8,
      // TODO use the "validate" property
    },
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
    avatarUrl: {
      type: String,
      required: false,
      trim: true,
    },
    address: addressSchema,
    bannedAt: {
      type: Date,
      required: false,
    },
    isBanned: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// TODO add password hashing middleware

// TODO add viltuals for the isBanned field

export const User = mongoose.model('User', userSchema);
