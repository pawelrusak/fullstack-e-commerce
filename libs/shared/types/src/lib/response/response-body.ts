import { Prettify } from '../utils';

type Status = {
  status: number;
};

type Message = {
  message: string;
};

export type PaginationMetaResponseBody = {
  total: number;
  perPage: number;
  currentPage: number;
  firstPageUrl?: string;
  lastPageUrl?: string;
  nextPageUrl?: string;
  prevPageUrl?: string;
  path?: string;
  from: number;
  to: number;
};

export type BaseSuccessResponseBody<TData = unknown> = {
  data: TData;
} & Status;

export type FindAllResponseBody<
  TData,
  TMeta = PaginationMetaResponseBody,
> = Prettify<
  BaseSuccessResponseBody<TData> & {
    meta: TMeta;
  }
>;

export type FindOneResponseBody<TData = unknown> = Prettify<
  BaseSuccessResponseBody<TData>
>;

export type CreateResponseBody<TData = unknown> = Prettify<
  Partial<Message> & BaseSuccessResponseBody<TData>
>;

export type UpdateResponseBody<TData = unknown> = Prettify<
  Partial<Message> & BaseSuccessResponseBody<TData>
>;

export type RemoveResponseBody = Prettify<Partial<Message> & Status>;

export type ErrorsResponseBody = Prettify<
  Partial<Message> &
    Status & {
      errors: Record<string, string[]>;
    }
>;

export type MetaErrorsResponseBody<
  TMeta = unknown,
  TErrors = Record<string, string[]>,
> = Prettify<
  Partial<Message> &
    Status & {
      errors?: TErrors;
      meta: TMeta;
    }
>;
