/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import type {
  AdminClientUserQuery,
  AdminGameMatchQuery,
  AdminUserEdit,
  AdminUserGoogleBind,
  AdminUserLogin,
  AdminUserMatchQuery,
  AdminUserPwdChange,
  AdminUserQuery,
  AdminWalletChange,
  BaseRestAdminUser,
  BaseRestApiFrientSummary,
  BaseRestApiMatchEvent,
  BaseRestBaseAdmin,
  BaseRestConfigBase,
  BaseRestGoogleKey,
  BaseRestListConfigPoint,
  BaseRestListConfigSign,
  BaseRestListConfigTask,
  BaseRestListTonCoin,
  BaseRestObject,
  BaseRestString,
  BaseRestUploadFile,
  ConfigBanner,
  ConfigBannerQuery,
  ConfigBase,
  ConfigPoint,
  ConfigSign,
  ConfigTask,
  DeleteBannerParams,
  Game,
  GameContest,
  GameContestQuery,
  GameGuessDeleteParams,
  GameMatchComplete,
  GameMatchEdit,
  GameMatchEventForApiParams,
  GameMatchRemarkQuery,
  GameQuery,
  GameTeam,
  GameTeamQuery,
  GetFriendSummaryParams,
  PageRestAdminClientUser,
  PageRestAdminGameContest,
  PageRestAdminGameMatch,
  PageRestAdminGameTeam,
  PageRestAdminUser,
  PageRestAdminUserMatch,
  PageRestAdminUserWalletRecord,
  PageRestConfigBanner,
  PageRestGame,
  PageRestGameMatchRemarkExtends,
  PageRestTonDeposit,
  PageRestUserFriends,
  PageRestUserWallet,
  TonCoin,
  TonDepositQuery,
  UpdateConfigTask1Params,
  UploadParam,
  UserFriendQuery,
  UserWalletQuery,
  WalletRecordQuery,
} from './model';
import { axiosInstance } from '../utils/axios';
import type { ErrorType } from '../utils/axios';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary 钱包交易查询
 */
export const queryWalletRecordForApi = (
  walletRecordQuery: WalletRecordQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestAdminUserWalletRecord>(
    {
      url: `/gateway/admin/wallet/record/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: walletRecordQuery,
    },
    options
  );
};

export const getQueryWalletRecordForApiMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof queryWalletRecordForApi>>,
    TError,
    { data: WalletRecordQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof queryWalletRecordForApi>>,
  TError,
  { data: WalletRecordQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof queryWalletRecordForApi>>,
    { data: WalletRecordQuery }
  > = (props) => {
    const { data } = props ?? {};

    return queryWalletRecordForApi(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type QueryWalletRecordForApiMutationResult = NonNullable<
  Awaited<ReturnType<typeof queryWalletRecordForApi>>
>;
export type QueryWalletRecordForApiMutationBody = WalletRecordQuery;
export type QueryWalletRecordForApiMutationError = ErrorType<unknown>;

/**
 * @summary 钱包交易查询
 */
export const useQueryWalletRecordForApi = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof queryWalletRecordForApi>>,
    TError,
    { data: WalletRecordQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof queryWalletRecordForApi>>,
  TError,
  { data: WalletRecordQuery },
  TContext
> => {
  const mutationOptions = getQueryWalletRecordForApiMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 用户钱包查询
 */
export const queryWalletForAdmin = (
  userWalletQuery: UserWalletQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestUserWallet>(
    {
      url: `/gateway/admin/wallet/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: userWalletQuery,
    },
    options
  );
};

export const getQueryWalletForAdminMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof queryWalletForAdmin>>,
    TError,
    { data: UserWalletQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof queryWalletForAdmin>>,
  TError,
  { data: UserWalletQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof queryWalletForAdmin>>,
    { data: UserWalletQuery }
  > = (props) => {
    const { data } = props ?? {};

    return queryWalletForAdmin(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type QueryWalletForAdminMutationResult = NonNullable<
  Awaited<ReturnType<typeof queryWalletForAdmin>>
>;
export type QueryWalletForAdminMutationBody = UserWalletQuery;
export type QueryWalletForAdminMutationError = ErrorType<unknown>;

/**
 * @summary 用户钱包查询
 */
export const useQueryWalletForAdmin = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof queryWalletForAdmin>>,
    TError,
    { data: UserWalletQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof queryWalletForAdmin>>,
  TError,
  { data: UserWalletQuery },
  TContext
> => {
  const mutationOptions = getQueryWalletForAdminMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 用户钱包修改
 */
export const updateWalletForAdmin = (
  adminWalletChange: AdminWalletChange,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/wallet/change`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminWalletChange,
    },
    options
  );
};

export const getUpdateWalletForAdminMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateWalletForAdmin>>,
    TError,
    { data: AdminWalletChange },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateWalletForAdmin>>,
  TError,
  { data: AdminWalletChange },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateWalletForAdmin>>,
    { data: AdminWalletChange }
  > = (props) => {
    const { data } = props ?? {};

    return updateWalletForAdmin(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateWalletForAdminMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateWalletForAdmin>>
>;
export type UpdateWalletForAdminMutationBody = AdminWalletChange;
export type UpdateWalletForAdminMutationError = ErrorType<unknown>;

/**
 * @summary 用户钱包修改
 */
export const useUpdateWalletForAdmin = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateWalletForAdmin>>,
    TError,
    { data: AdminWalletChange },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof updateWalletForAdmin>>,
  TError,
  { data: AdminWalletChange },
  TContext
> => {
  const mutationOptions = getUpdateWalletForAdminMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 管理员列表[超级管理员]
 */
export const adminUserQuery = (
  adminUserQuery: AdminUserQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestAdminUser>(
    {
      url: `/gateway/admin/user/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminUserQuery,
    },
    options
  );
};

export const getAdminUserQueryMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof adminUserQuery>>,
    TError,
    { data: AdminUserQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof adminUserQuery>>,
  TError,
  { data: AdminUserQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof adminUserQuery>>,
    { data: AdminUserQuery }
  > = (props) => {
    const { data } = props ?? {};

    return adminUserQuery(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type AdminUserQueryMutationResult = NonNullable<Awaited<ReturnType<typeof adminUserQuery>>>;
export type AdminUserQueryMutationBody = AdminUserQuery;
export type AdminUserQueryMutationError = ErrorType<unknown>;

/**
 * @summary 管理员列表[超级管理员]
 */
export const useAdminUserQuery = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof adminUserQuery>>,
    TError,
    { data: AdminUserQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof adminUserQuery>>,
  TError,
  { data: AdminUserQuery },
  TContext
> => {
  const mutationOptions = getAdminUserQueryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 修改密码后需要重新登录
 * @summary 管理员修改密码
 */
export const adminUserPwdChange = (
  adminUserPwdChange: AdminUserPwdChange,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/user/pwd/change`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminUserPwdChange,
    },
    options
  );
};

export const getAdminUserPwdChangeMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof adminUserPwdChange>>,
    TError,
    { data: AdminUserPwdChange },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof adminUserPwdChange>>,
  TError,
  { data: AdminUserPwdChange },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof adminUserPwdChange>>,
    { data: AdminUserPwdChange }
  > = (props) => {
    const { data } = props ?? {};

    return adminUserPwdChange(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type AdminUserPwdChangeMutationResult = NonNullable<
  Awaited<ReturnType<typeof adminUserPwdChange>>
>;
export type AdminUserPwdChangeMutationBody = AdminUserPwdChange;
export type AdminUserPwdChangeMutationError = ErrorType<unknown>;

/**
 * @summary 管理员修改密码
 */
export const useAdminUserPwdChange = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof adminUserPwdChange>>,
    TError,
    { data: AdminUserPwdChange },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof adminUserPwdChange>>,
  TError,
  { data: AdminUserPwdChange },
  TContext
> => {
  const mutationOptions = getAdminUserPwdChangeMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 管理员登陆[非登录]
 */
export const adminUserLogin = (
  adminUserLogin: AdminUserLogin,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestString>(
    {
      url: `/gateway/admin/user/login`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminUserLogin,
    },
    options
  );
};

export const getAdminUserLoginMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof adminUserLogin>>,
    TError,
    { data: AdminUserLogin },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof adminUserLogin>>,
  TError,
  { data: AdminUserLogin },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof adminUserLogin>>,
    { data: AdminUserLogin }
  > = (props) => {
    const { data } = props ?? {};

    return adminUserLogin(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type AdminUserLoginMutationResult = NonNullable<Awaited<ReturnType<typeof adminUserLogin>>>;
export type AdminUserLoginMutationBody = AdminUserLogin;
export type AdminUserLoginMutationError = ErrorType<unknown>;

/**
 * @summary 管理员登陆[非登录]
 */
export const useAdminUserLogin = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof adminUserLogin>>,
    TError,
    { data: AdminUserLogin },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof adminUserLogin>>,
  TError,
  { data: AdminUserLogin },
  TContext
> => {
  const mutationOptions = getAdminUserLoginMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 管理员绑定新的谷歌凭证
 */
export const bindGoogleToken = (
  adminUserGoogleBind: AdminUserGoogleBind,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/user/google/bind`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminUserGoogleBind,
    },
    options
  );
};

export const getBindGoogleTokenMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof bindGoogleToken>>,
    TError,
    { data: AdminUserGoogleBind },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof bindGoogleToken>>,
  TError,
  { data: AdminUserGoogleBind },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof bindGoogleToken>>,
    { data: AdminUserGoogleBind }
  > = (props) => {
    const { data } = props ?? {};

    return bindGoogleToken(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type BindGoogleTokenMutationResult = NonNullable<
  Awaited<ReturnType<typeof bindGoogleToken>>
>;
export type BindGoogleTokenMutationBody = AdminUserGoogleBind;
export type BindGoogleTokenMutationError = ErrorType<unknown>;

/**
 * @summary 管理员绑定新的谷歌凭证
 */
export const useBindGoogleToken = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof bindGoogleToken>>,
    TError,
    { data: AdminUserGoogleBind },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof bindGoogleToken>>,
  TError,
  { data: AdminUserGoogleBind },
  TContext
> => {
  const mutationOptions = getBindGoogleTokenMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 管理员编辑[超级管理员]
 */
export const adminUserEdit = (
  adminUserEdit: AdminUserEdit,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestAdminUser>(
    {
      url: `/gateway/admin/user/edit`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminUserEdit,
    },
    options
  );
};

export const getAdminUserEditMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof adminUserEdit>>,
    TError,
    { data: AdminUserEdit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof adminUserEdit>>,
  TError,
  { data: AdminUserEdit },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof adminUserEdit>>,
    { data: AdminUserEdit }
  > = (props) => {
    const { data } = props ?? {};

    return adminUserEdit(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type AdminUserEditMutationResult = NonNullable<Awaited<ReturnType<typeof adminUserEdit>>>;
export type AdminUserEditMutationBody = AdminUserEdit;
export type AdminUserEditMutationError = ErrorType<unknown>;

/**
 * @summary 管理员编辑[超级管理员]
 */
export const useAdminUserEdit = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof adminUserEdit>>,
    TError,
    { data: AdminUserEdit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof adminUserEdit>>,
  TError,
  { data: AdminUserEdit },
  TContext
> => {
  const mutationOptions = getAdminUserEditMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 金币充值查询
 */
export const tonDepositQuery = (
  tonDepositQuery: TonDepositQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestTonDeposit>(
    {
      url: `/gateway/admin/ton/deposit/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: tonDepositQuery,
    },
    options
  );
};

export const getTonDepositQueryMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof tonDepositQuery>>,
    TError,
    { data: TonDepositQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof tonDepositQuery>>,
  TError,
  { data: TonDepositQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof tonDepositQuery>>,
    { data: TonDepositQuery }
  > = (props) => {
    const { data } = props ?? {};

    return tonDepositQuery(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type TonDepositQueryMutationResult = NonNullable<
  Awaited<ReturnType<typeof tonDepositQuery>>
>;
export type TonDepositQueryMutationBody = TonDepositQuery;
export type TonDepositQueryMutationError = ErrorType<unknown>;

/**
 * @summary 金币充值查询
 */
export const useTonDepositQuery = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof tonDepositQuery>>,
    TError,
    { data: TonDepositQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof tonDepositQuery>>,
  TError,
  { data: TonDepositQuery },
  TContext
> => {
  const mutationOptions = getTonDepositQueryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 币种更新
 */
export const updateTonCoin = (
  tonCoin: TonCoin,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/ton/coin/update`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: tonCoin,
    },
    options
  );
};

export const getUpdateTonCoinMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateTonCoin>>,
    TError,
    { data: TonCoin },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateTonCoin>>,
  TError,
  { data: TonCoin },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateTonCoin>>,
    { data: TonCoin }
  > = (props) => {
    const { data } = props ?? {};

    return updateTonCoin(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateTonCoinMutationResult = NonNullable<Awaited<ReturnType<typeof updateTonCoin>>>;
export type UpdateTonCoinMutationBody = TonCoin;
export type UpdateTonCoinMutationError = ErrorType<unknown>;

/**
 * @summary 币种更新
 */
export const useUpdateTonCoin = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateTonCoin>>,
    TError,
    { data: TonCoin },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof updateTonCoin>>,
  TError,
  { data: TonCoin },
  TContext
> => {
  const mutationOptions = getUpdateTonCoinMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 默认结果按时间倒序返回，排序字段：createTime
 * @summary 战队查询
 */
export const gameTeamQuery = (
  gameTeamQuery: GameTeamQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestAdminGameTeam>(
    {
      url: `/gateway/admin/game/team/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: gameTeamQuery,
    },
    options
  );
};

export const getGameTeamQueryMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameTeamQuery>>,
    TError,
    { data: GameTeamQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameTeamQuery>>,
  TError,
  { data: GameTeamQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameTeamQuery>>,
    { data: GameTeamQuery }
  > = (props) => {
    const { data } = props ?? {};

    return gameTeamQuery(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameTeamQueryMutationResult = NonNullable<Awaited<ReturnType<typeof gameTeamQuery>>>;
export type GameTeamQueryMutationBody = GameTeamQuery;
export type GameTeamQueryMutationError = ErrorType<unknown>;

/**
 * @summary 战队查询
 */
export const useGameTeamQuery = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameTeamQuery>>,
    TError,
    { data: GameTeamQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof gameTeamQuery>>,
  TError,
  { data: GameTeamQuery },
  TContext
> => {
  const mutationOptions = getGameTeamQueryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 战队编辑
 */
export const gameTeamEdit = (
  gameTeam: GameTeam,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/game/team/edit`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: gameTeam,
    },
    options
  );
};

export const getGameTeamEditMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameTeamEdit>>,
    TError,
    { data: GameTeam },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameTeamEdit>>,
  TError,
  { data: GameTeam },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameTeamEdit>>,
    { data: GameTeam }
  > = (props) => {
    const { data } = props ?? {};

    return gameTeamEdit(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameTeamEditMutationResult = NonNullable<Awaited<ReturnType<typeof gameTeamEdit>>>;
export type GameTeamEditMutationBody = GameTeam;
export type GameTeamEditMutationError = ErrorType<unknown>;

/**
 * @summary 战队编辑
 */
export const useGameTeamEdit = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameTeamEdit>>,
    TError,
    { data: GameTeam },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof gameTeamEdit>>,
  TError,
  { data: GameTeam },
  TContext
> => {
  const mutationOptions = getGameTeamEditMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 默认结果按时间倒序返回，排序字段：createTime
 * @summary 游戏查询
 */
export const gameQuery = (
  gameQuery: GameQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestGame>(
    {
      url: `/gateway/admin/game/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: gameQuery,
    },
    options
  );
};

export const getGameQueryMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameQuery>>,
    TError,
    { data: GameQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameQuery>>,
  TError,
  { data: GameQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof gameQuery>>, { data: GameQuery }> = (
    props
  ) => {
    const { data } = props ?? {};

    return gameQuery(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameQueryMutationResult = NonNullable<Awaited<ReturnType<typeof gameQuery>>>;
export type GameQueryMutationBody = GameQuery;
export type GameQueryMutationError = ErrorType<unknown>;

/**
 * @summary 游戏查询
 */
export const useGameQuery = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameQuery>>,
    TError,
    { data: GameQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof gameQuery>>,
  TError,
  { data: GameQuery },
  TContext
> => {
  const mutationOptions = getGameQueryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 比赛用户查询
 */
export const gameMatchUserQuery = (
  adminUserMatchQuery: AdminUserMatchQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestAdminUserMatch>(
    {
      url: `/gateway/admin/game/match/user/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminUserMatchQuery,
    },
    options
  );
};

export const getGameMatchUserQueryMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameMatchUserQuery>>,
    TError,
    { data: AdminUserMatchQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameMatchUserQuery>>,
  TError,
  { data: AdminUserMatchQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameMatchUserQuery>>,
    { data: AdminUserMatchQuery }
  > = (props) => {
    const { data } = props ?? {};

    return gameMatchUserQuery(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameMatchUserQueryMutationResult = NonNullable<
  Awaited<ReturnType<typeof gameMatchUserQuery>>
>;
export type GameMatchUserQueryMutationBody = AdminUserMatchQuery;
export type GameMatchUserQueryMutationError = ErrorType<unknown>;

/**
 * @summary 比赛用户查询
 */
export const useGameMatchUserQuery = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameMatchUserQuery>>,
    TError,
    { data: AdminUserMatchQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof gameMatchUserQuery>>,
  TError,
  { data: AdminUserMatchQuery },
  TContext
> => {
  const mutationOptions = getGameMatchUserQueryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 新增和更新
 * @summary 比赛提交
 */
export const gameMatchEdit = (
  gameMatchEdit: GameMatchEdit,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/game/match/submit`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: gameMatchEdit,
    },
    options
  );
};

export const getGameMatchEditMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameMatchEdit>>,
    TError,
    { data: GameMatchEdit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameMatchEdit>>,
  TError,
  { data: GameMatchEdit },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameMatchEdit>>,
    { data: GameMatchEdit }
  > = (props) => {
    const { data } = props ?? {};

    return gameMatchEdit(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameMatchEditMutationResult = NonNullable<Awaited<ReturnType<typeof gameMatchEdit>>>;
export type GameMatchEditMutationBody = GameMatchEdit;
export type GameMatchEditMutationError = ErrorType<unknown>;

/**
 * @summary 比赛提交
 */
export const useGameMatchEdit = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameMatchEdit>>,
    TError,
    { data: GameMatchEdit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof gameMatchEdit>>,
  TError,
  { data: GameMatchEdit },
  TContext
> => {
  const mutationOptions = getGameMatchEditMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 需要提供至少三个按钮：竞猜结算、用户查询、评论查询
 * @summary 比赛查询
 */
export const gameMatchQueryForAdmin = (
  adminGameMatchQuery: AdminGameMatchQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestAdminGameMatch>(
    {
      url: `/gateway/admin/game/match/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminGameMatchQuery,
    },
    options
  );
};

export const getGameMatchQueryForAdminMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameMatchQueryForAdmin>>,
    TError,
    { data: AdminGameMatchQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameMatchQueryForAdmin>>,
  TError,
  { data: AdminGameMatchQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameMatchQueryForAdmin>>,
    { data: AdminGameMatchQuery }
  > = (props) => {
    const { data } = props ?? {};

    return gameMatchQueryForAdmin(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameMatchQueryForAdminMutationResult = NonNullable<
  Awaited<ReturnType<typeof gameMatchQueryForAdmin>>
>;
export type GameMatchQueryForAdminMutationBody = AdminGameMatchQuery;
export type GameMatchQueryForAdminMutationError = ErrorType<unknown>;

/**
 * @summary 比赛查询
 */
export const useGameMatchQueryForAdmin = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameMatchQueryForAdmin>>,
    TError,
    { data: AdminGameMatchQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof gameMatchQueryForAdmin>>,
  TError,
  { data: AdminGameMatchQuery },
  TContext
> => {
  const mutationOptions = getGameMatchQueryForAdminMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 输入比分结算赛事
 * @summary 比赛结算
 */
export const gameMatchComplete = (
  gameMatchComplete: GameMatchComplete,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/game/match/complete`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: gameMatchComplete,
    },
    options
  );
};

export const getGameMatchCompleteMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameMatchComplete>>,
    TError,
    { data: GameMatchComplete },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameMatchComplete>>,
  TError,
  { data: GameMatchComplete },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameMatchComplete>>,
    { data: GameMatchComplete }
  > = (props) => {
    const { data } = props ?? {};

    return gameMatchComplete(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameMatchCompleteMutationResult = NonNullable<
  Awaited<ReturnType<typeof gameMatchComplete>>
>;
export type GameMatchCompleteMutationBody = GameMatchComplete;
export type GameMatchCompleteMutationError = ErrorType<unknown>;

/**
 * @summary 比赛结算
 */
export const useGameMatchComplete = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameMatchComplete>>,
    TError,
    { data: GameMatchComplete },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof gameMatchComplete>>,
  TError,
  { data: GameMatchComplete },
  TContext
> => {
  const mutationOptions = getGameMatchCompleteMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 比赛评论查询
 */
export const gameMatchRemarkQuery = (
  gameMatchRemarkQuery: GameMatchRemarkQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestGameMatchRemarkExtends>(
    {
      url: `/gateway/admin/game/match/comment/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: gameMatchRemarkQuery,
    },
    options
  );
};

export const getGameMatchRemarkQueryMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameMatchRemarkQuery>>,
    TError,
    { data: GameMatchRemarkQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameMatchRemarkQuery>>,
  TError,
  { data: GameMatchRemarkQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameMatchRemarkQuery>>,
    { data: GameMatchRemarkQuery }
  > = (props) => {
    const { data } = props ?? {};

    return gameMatchRemarkQuery(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameMatchRemarkQueryMutationResult = NonNullable<
  Awaited<ReturnType<typeof gameMatchRemarkQuery>>
>;
export type GameMatchRemarkQueryMutationBody = GameMatchRemarkQuery;
export type GameMatchRemarkQueryMutationError = ErrorType<unknown>;

/**
 * @summary 比赛评论查询
 */
export const useGameMatchRemarkQuery = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameMatchRemarkQuery>>,
    TError,
    { data: GameMatchRemarkQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof gameMatchRemarkQuery>>,
  TError,
  { data: GameMatchRemarkQuery },
  TContext
> => {
  const mutationOptions = getGameMatchRemarkQueryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 游戏编辑
 */
export const gameEdit = (game: Game, options?: SecondParameter<typeof axiosInstance>) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/game/edit`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: game,
    },
    options
  );
};

export const getGameEditMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameEdit>>,
    TError,
    { data: Game },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<Awaited<ReturnType<typeof gameEdit>>, TError, { data: Game }, TContext> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof gameEdit>>, { data: Game }> = (
    props
  ) => {
    const { data } = props ?? {};

    return gameEdit(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameEditMutationResult = NonNullable<Awaited<ReturnType<typeof gameEdit>>>;
export type GameEditMutationBody = Game;
export type GameEditMutationError = ErrorType<unknown>;

/**
 * @summary 游戏编辑
 */
export const useGameEdit = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameEdit>>,
    TError,
    { data: Game },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<Awaited<ReturnType<typeof gameEdit>>, TError, { data: Game }, TContext> => {
  const mutationOptions = getGameEditMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 默认结果按时间倒序返回，排序字段：createTime
 * @summary 赛事查询
 */
export const gameContestQuery = (
  gameContestQuery: GameContestQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestAdminGameContest>(
    {
      url: `/gateway/admin/game/contest/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: gameContestQuery,
    },
    options
  );
};

export const getGameContestQueryMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameContestQuery>>,
    TError,
    { data: GameContestQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameContestQuery>>,
  TError,
  { data: GameContestQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameContestQuery>>,
    { data: GameContestQuery }
  > = (props) => {
    const { data } = props ?? {};

    return gameContestQuery(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameContestQueryMutationResult = NonNullable<
  Awaited<ReturnType<typeof gameContestQuery>>
>;
export type GameContestQueryMutationBody = GameContestQuery;
export type GameContestQueryMutationError = ErrorType<unknown>;

/**
 * @summary 赛事查询
 */
export const useGameContestQuery = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameContestQuery>>,
    TError,
    { data: GameContestQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof gameContestQuery>>,
  TError,
  { data: GameContestQuery },
  TContext
> => {
  const mutationOptions = getGameContestQueryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 赛事编辑
 */
export const gameContestEdit = (
  gameContest: GameContest,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/game/contest/edit`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: gameContest,
    },
    options
  );
};

export const getGameContestEditMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameContestEdit>>,
    TError,
    { data: GameContest },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameContestEdit>>,
  TError,
  { data: GameContest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameContestEdit>>,
    { data: GameContest }
  > = (props) => {
    const { data } = props ?? {};

    return gameContestEdit(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameContestEditMutationResult = NonNullable<
  Awaited<ReturnType<typeof gameContestEdit>>
>;
export type GameContestEditMutationBody = GameContest;
export type GameContestEditMutationError = ErrorType<unknown>;

/**
 * @summary 赛事编辑
 */
export const useGameContestEdit = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameContestEdit>>,
    TError,
    { data: GameContest },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof gameContestEdit>>,
  TError,
  { data: GameContest },
  TContext
> => {
  const mutationOptions = getGameContestEditMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 文件上传申请
 */
export const uploadApply = (
  uploadParam: UploadParam,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestUploadFile>(
    {
      url: `/gateway/admin/data/upload/apply`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: uploadParam,
    },
    options
  );
};

export const getUploadApplyMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadApply>>,
    TError,
    { data: UploadParam },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof uploadApply>>,
  TError,
  { data: UploadParam },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof uploadApply>>,
    { data: UploadParam }
  > = (props) => {
    const { data } = props ?? {};

    return uploadApply(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UploadApplyMutationResult = NonNullable<Awaited<ReturnType<typeof uploadApply>>>;
export type UploadApplyMutationBody = UploadParam;
export type UploadApplyMutationError = ErrorType<unknown>;

/**
 * @summary 文件上传申请
 */
export const useUploadApply = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadApply>>,
    TError,
    { data: UploadParam },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof uploadApply>>,
  TError,
  { data: UploadParam },
  TContext
> => {
  const mutationOptions = getUploadApplyMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 支持新增和编辑
 * @summary 系统任务配置更新
 */
export const updateConfigTask = (
  configTask: ConfigTask,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/data/config/task/edit`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: configTask,
    },
    options
  );
};

export const getUpdateConfigTaskMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateConfigTask>>,
    TError,
    { data: ConfigTask },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateConfigTask>>,
  TError,
  { data: ConfigTask },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateConfigTask>>,
    { data: ConfigTask }
  > = (props) => {
    const { data } = props ?? {};

    return updateConfigTask(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateConfigTaskMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateConfigTask>>
>;
export type UpdateConfigTaskMutationBody = ConfigTask;
export type UpdateConfigTaskMutationError = ErrorType<unknown>;

/**
 * @summary 系统任务配置更新
 */
export const useUpdateConfigTask = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateConfigTask>>,
    TError,
    { data: ConfigTask },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof updateConfigTask>>,
  TError,
  { data: ConfigTask },
  TContext
> => {
  const mutationOptions = getUpdateConfigTaskMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 仅支持编辑
 * @summary 系统签到配置更新
 */
export const updateConfigSign = (
  configSign: ConfigSign,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/data/config/sign/edit`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: configSign,
    },
    options
  );
};

export const getUpdateConfigSignMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateConfigSign>>,
    TError,
    { data: ConfigSign },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateConfigSign>>,
  TError,
  { data: ConfigSign },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateConfigSign>>,
    { data: ConfigSign }
  > = (props) => {
    const { data } = props ?? {};

    return updateConfigSign(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateConfigSignMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateConfigSign>>
>;
export type UpdateConfigSignMutationBody = ConfigSign;
export type UpdateConfigSignMutationError = ErrorType<unknown>;

/**
 * @summary 系统签到配置更新
 */
export const useUpdateConfigSign = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateConfigSign>>,
    TError,
    { data: ConfigSign },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof updateConfigSign>>,
  TError,
  { data: ConfigSign },
  TContext
> => {
  const mutationOptions = getUpdateConfigSignMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 仅支持编辑
 * @summary 系统积分配置更新
 */
export const updateConfigPoint = (
  configPoint: ConfigPoint,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/data/config/point/edit`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: configPoint,
    },
    options
  );
};

export const getUpdateConfigPointMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateConfigPoint>>,
    TError,
    { data: ConfigPoint },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateConfigPoint>>,
  TError,
  { data: ConfigPoint },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateConfigPoint>>,
    { data: ConfigPoint }
  > = (props) => {
    const { data } = props ?? {};

    return updateConfigPoint(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateConfigPointMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateConfigPoint>>
>;
export type UpdateConfigPointMutationBody = ConfigPoint;
export type UpdateConfigPointMutationError = ErrorType<unknown>;

/**
 * @summary 系统积分配置更新
 */
export const useUpdateConfigPoint = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateConfigPoint>>,
    TError,
    { data: ConfigPoint },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof updateConfigPoint>>,
  TError,
  { data: ConfigPoint },
  TContext
> => {
  const mutationOptions = getUpdateConfigPointMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 仅支持编辑
 * @summary 系统基础配置更新
 */
export const updateConfigBase = (
  configBase: ConfigBase,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/data/config/edit`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: configBase,
    },
    options
  );
};

export const getUpdateConfigBaseMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateConfigBase>>,
    TError,
    { data: ConfigBase },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateConfigBase>>,
  TError,
  { data: ConfigBase },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateConfigBase>>,
    { data: ConfigBase }
  > = (props) => {
    const { data } = props ?? {};

    return updateConfigBase(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateConfigBaseMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateConfigBase>>
>;
export type UpdateConfigBaseMutationBody = ConfigBase;
export type UpdateConfigBaseMutationError = ErrorType<unknown>;

/**
 * @summary 系统基础配置更新
 */
export const useUpdateConfigBase = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateConfigBase>>,
    TError,
    { data: ConfigBase },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof updateConfigBase>>,
  TError,
  { data: ConfigBase },
  TContext
> => {
  const mutationOptions = getUpdateConfigBaseMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 修改Banner
 */
export const updateBanner = (
  configBanner: ConfigBanner,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/data/banner/update`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: configBanner,
    },
    options
  );
};

export const getUpdateBannerMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateBanner>>,
    TError,
    { data: ConfigBanner },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateBanner>>,
  TError,
  { data: ConfigBanner },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateBanner>>,
    { data: ConfigBanner }
  > = (props) => {
    const { data } = props ?? {};

    return updateBanner(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateBannerMutationResult = NonNullable<Awaited<ReturnType<typeof updateBanner>>>;
export type UpdateBannerMutationBody = ConfigBanner;
export type UpdateBannerMutationError = ErrorType<unknown>;

/**
 * @summary 修改Banner
 */
export const useUpdateBanner = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateBanner>>,
    TError,
    { data: ConfigBanner },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof updateBanner>>,
  TError,
  { data: ConfigBanner },
  TContext
> => {
  const mutationOptions = getUpdateBannerMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 新增Banner
 */
export const saveBanner = (
  configBanner: ConfigBanner,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/data/banner/save`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: configBanner,
    },
    options
  );
};

export const getSaveBannerMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof saveBanner>>,
    TError,
    { data: ConfigBanner },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof saveBanner>>,
  TError,
  { data: ConfigBanner },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof saveBanner>>,
    { data: ConfigBanner }
  > = (props) => {
    const { data } = props ?? {};

    return saveBanner(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type SaveBannerMutationResult = NonNullable<Awaited<ReturnType<typeof saveBanner>>>;
export type SaveBannerMutationBody = ConfigBanner;
export type SaveBannerMutationError = ErrorType<unknown>;

/**
 * @summary 新增Banner
 */
export const useSaveBanner = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof saveBanner>>,
    TError,
    { data: ConfigBanner },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof saveBanner>>,
  TError,
  { data: ConfigBanner },
  TContext
> => {
  const mutationOptions = getSaveBannerMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 查询Banner
 */
export const queryBanner = (
  configBannerQuery: ConfigBannerQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestConfigBanner>(
    {
      url: `/gateway/admin/data/banner/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: configBannerQuery,
    },
    options
  );
};

export const getQueryBannerMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof queryBanner>>,
    TError,
    { data: ConfigBannerQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof queryBanner>>,
  TError,
  { data: ConfigBannerQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof queryBanner>>,
    { data: ConfigBannerQuery }
  > = (props) => {
    const { data } = props ?? {};

    return queryBanner(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type QueryBannerMutationResult = NonNullable<Awaited<ReturnType<typeof queryBanner>>>;
export type QueryBannerMutationBody = ConfigBannerQuery;
export type QueryBannerMutationError = ErrorType<unknown>;

/**
 * @summary 查询Banner
 */
export const useQueryBanner = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof queryBanner>>,
    TError,
    { data: ConfigBannerQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof queryBanner>>,
  TError,
  { data: ConfigBannerQuery },
  TContext
> => {
  const mutationOptions = getQueryBannerMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 用户查询
 */
export const queryAdminUser = (
  adminClientUserQuery: AdminClientUserQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestAdminClientUser>(
    {
      url: `/gateway/admin/client/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminClientUserQuery,
    },
    options
  );
};

export const getQueryAdminUserMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof queryAdminUser>>,
    TError,
    { data: AdminClientUserQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof queryAdminUser>>,
  TError,
  { data: AdminClientUserQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof queryAdminUser>>,
    { data: AdminClientUserQuery }
  > = (props) => {
    const { data } = props ?? {};

    return queryAdminUser(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type QueryAdminUserMutationResult = NonNullable<Awaited<ReturnType<typeof queryAdminUser>>>;
export type QueryAdminUserMutationBody = AdminClientUserQuery;
export type QueryAdminUserMutationError = ErrorType<unknown>;

/**
 * @summary 用户查询
 */
export const useQueryAdminUser = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof queryAdminUser>>,
    TError,
    { data: AdminClientUserQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof queryAdminUser>>,
  TError,
  { data: AdminClientUserQuery },
  TContext
> => {
  const mutationOptions = getQueryAdminUserMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 用户好友查询
 */
export const queryFriends = (
  userFriendQuery: UserFriendQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestUserFriends>(
    {
      url: `/gateway/admin/client/friends/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: userFriendQuery,
    },
    options
  );
};

export const getQueryFriendsMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof queryFriends>>,
    TError,
    { data: UserFriendQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof queryFriends>>,
  TError,
  { data: UserFriendQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof queryFriends>>,
    { data: UserFriendQuery }
  > = (props) => {
    const { data } = props ?? {};

    return queryFriends(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type QueryFriendsMutationResult = NonNullable<Awaited<ReturnType<typeof queryFriends>>>;
export type QueryFriendsMutationBody = UserFriendQuery;
export type QueryFriendsMutationError = ErrorType<unknown>;

/**
 * @summary 用户好友查询
 */
export const useQueryFriends = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof queryFriends>>,
    TError,
    { data: UserFriendQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof queryFriends>>,
  TError,
  { data: UserFriendQuery },
  TContext
> => {
  const mutationOptions = getQueryFriendsMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 管理员登出
 */
export const adminUserLogout = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<BaseRestObject>(
    { url: `/gateway/admin/user/logout`, method: 'GET', signal },
    options
  );
};

export const getAdminUserLogoutQueryKey = () => {
  return [`/gateway/admin/user/logout`] as const;
};

export const getAdminUserLogoutQueryOptions = <
  TData = Awaited<ReturnType<typeof adminUserLogout>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof adminUserLogout>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getAdminUserLogoutQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof adminUserLogout>>> = ({ signal }) =>
    adminUserLogout(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof adminUserLogout>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type AdminUserLogoutQueryResult = NonNullable<Awaited<ReturnType<typeof adminUserLogout>>>;
export type AdminUserLogoutQueryError = ErrorType<unknown>;

/**
 * @summary 管理员登出
 */
export const useAdminUserLogout = <
  TData = Awaited<ReturnType<typeof adminUserLogout>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof adminUserLogout>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getAdminUserLogoutQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 管理员信息
 */
export const adminUserInfo = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<BaseRestBaseAdmin>(
    { url: `/gateway/admin/user/info`, method: 'GET', signal },
    options
  );
};

export const getAdminUserInfoQueryKey = () => {
  return [`/gateway/admin/user/info`] as const;
};

export const getAdminUserInfoQueryOptions = <
  TData = Awaited<ReturnType<typeof adminUserInfo>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof adminUserInfo>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getAdminUserInfoQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof adminUserInfo>>> = ({ signal }) =>
    adminUserInfo(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof adminUserInfo>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type AdminUserInfoQueryResult = NonNullable<Awaited<ReturnType<typeof adminUserInfo>>>;
export type AdminUserInfoQueryError = ErrorType<unknown>;

/**
 * @summary 管理员信息
 */
export const useAdminUserInfo = <
  TData = Awaited<ReturnType<typeof adminUserInfo>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof adminUserInfo>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getAdminUserInfoQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 管理员获取新的谷歌凭证
 */
export const getGoogleToken = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<BaseRestGoogleKey>(
    { url: `/gateway/admin/user/google/get`, method: 'GET', signal },
    options
  );
};

export const getGetGoogleTokenQueryKey = () => {
  return [`/gateway/admin/user/google/get`] as const;
};

export const getGetGoogleTokenQueryOptions = <
  TData = Awaited<ReturnType<typeof getGoogleToken>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getGoogleToken>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetGoogleTokenQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getGoogleToken>>> = ({ signal }) =>
    getGoogleToken(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getGoogleToken>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetGoogleTokenQueryResult = NonNullable<Awaited<ReturnType<typeof getGoogleToken>>>;
export type GetGoogleTokenQueryError = ErrorType<unknown>;

/**
 * @summary 管理员获取新的谷歌凭证
 */
export const useGetGoogleToken = <
  TData = Awaited<ReturnType<typeof getGoogleToken>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getGoogleToken>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetGoogleTokenQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 币种列表
 */
export const getTonCoinList = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<BaseRestListTonCoin>(
    { url: `/gateway/admin/ton/coin/list`, method: 'GET', signal },
    options
  );
};

export const getGetTonCoinListQueryKey = () => {
  return [`/gateway/admin/ton/coin/list`] as const;
};

export const getGetTonCoinListQueryOptions = <
  TData = Awaited<ReturnType<typeof getTonCoinList>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getTonCoinList>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetTonCoinListQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getTonCoinList>>> = ({ signal }) =>
    getTonCoinList(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getTonCoinList>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetTonCoinListQueryResult = NonNullable<Awaited<ReturnType<typeof getTonCoinList>>>;
export type GetTonCoinListQueryError = ErrorType<unknown>;

/**
 * @summary 币种列表
 */
export const useGetTonCoinList = <
  TData = Awaited<ReturnType<typeof getTonCoinList>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getTonCoinList>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetTonCoinListQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 比赛事件获取
 */
export const gameMatchEventForApi = (
  params: GameMatchEventForApiParams,
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<BaseRestApiMatchEvent>(
    {
      url: `/gateway/admin/game/match/event/get`,
      method: 'GET',
      params,
      signal,
    },
    options
  );
};

export const getGameMatchEventForApiQueryKey = (params: GameMatchEventForApiParams) => {
  return [`/gateway/admin/game/match/event/get`, ...(params ? [params] : [])] as const;
};

export const getGameMatchEventForApiQueryOptions = <
  TData = Awaited<ReturnType<typeof gameMatchEventForApi>>,
  TError = ErrorType<unknown>
>(
  params: GameMatchEventForApiParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof gameMatchEventForApi>>, TError, TData>;
    request?: SecondParameter<typeof axiosInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGameMatchEventForApiQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof gameMatchEventForApi>>> = ({ signal }) =>
    gameMatchEventForApi(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof gameMatchEventForApi>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GameMatchEventForApiQueryResult = NonNullable<
  Awaited<ReturnType<typeof gameMatchEventForApi>>
>;
export type GameMatchEventForApiQueryError = ErrorType<unknown>;

/**
 * @summary 比赛事件获取
 */
export const useGameMatchEventForApi = <
  TData = Awaited<ReturnType<typeof gameMatchEventForApi>>,
  TError = ErrorType<unknown>
>(
  params: GameMatchEventForApiParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof gameMatchEventForApi>>, TError, TData>;
    request?: SecondParameter<typeof axiosInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGameMatchEventForApiQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 系统任务配置获取
 */
export const getConfigTask = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<BaseRestListConfigTask>(
    { url: `/gateway/admin/data/config/task`, method: 'GET', signal },
    options
  );
};

export const getGetConfigTaskQueryKey = () => {
  return [`/gateway/admin/data/config/task`] as const;
};

export const getGetConfigTaskQueryOptions = <
  TData = Awaited<ReturnType<typeof getConfigTask>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getConfigTask>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetConfigTaskQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getConfigTask>>> = ({ signal }) =>
    getConfigTask(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getConfigTask>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetConfigTaskQueryResult = NonNullable<Awaited<ReturnType<typeof getConfigTask>>>;
export type GetConfigTaskQueryError = ErrorType<unknown>;

/**
 * @summary 系统任务配置获取
 */
export const useGetConfigTask = <
  TData = Awaited<ReturnType<typeof getConfigTask>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getConfigTask>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetConfigTaskQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 系统签到配置获取
 */
export const getConfigSign = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<BaseRestListConfigSign>(
    { url: `/gateway/admin/data/config/sign`, method: 'GET', signal },
    options
  );
};

export const getGetConfigSignQueryKey = () => {
  return [`/gateway/admin/data/config/sign`] as const;
};

export const getGetConfigSignQueryOptions = <
  TData = Awaited<ReturnType<typeof getConfigSign>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getConfigSign>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetConfigSignQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getConfigSign>>> = ({ signal }) =>
    getConfigSign(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getConfigSign>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetConfigSignQueryResult = NonNullable<Awaited<ReturnType<typeof getConfigSign>>>;
export type GetConfigSignQueryError = ErrorType<unknown>;

/**
 * @summary 系统签到配置获取
 */
export const useGetConfigSign = <
  TData = Awaited<ReturnType<typeof getConfigSign>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getConfigSign>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetConfigSignQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 系统积分配置获取
 */
export const getConfigPoint = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<BaseRestListConfigPoint>(
    { url: `/gateway/admin/data/config/point`, method: 'GET', signal },
    options
  );
};

export const getGetConfigPointQueryKey = () => {
  return [`/gateway/admin/data/config/point`] as const;
};

export const getGetConfigPointQueryOptions = <
  TData = Awaited<ReturnType<typeof getConfigPoint>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getConfigPoint>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetConfigPointQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getConfigPoint>>> = ({ signal }) =>
    getConfigPoint(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getConfigPoint>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetConfigPointQueryResult = NonNullable<Awaited<ReturnType<typeof getConfigPoint>>>;
export type GetConfigPointQueryError = ErrorType<unknown>;

/**
 * @summary 系统积分配置获取
 */
export const useGetConfigPoint = <
  TData = Awaited<ReturnType<typeof getConfigPoint>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getConfigPoint>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetConfigPointQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 系统基础配置获取
 */
export const getBaseConfig = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<BaseRestConfigBase>(
    { url: `/gateway/admin/data/config/base`, method: 'GET', signal },
    options
  );
};

export const getGetBaseConfigQueryKey = () => {
  return [`/gateway/admin/data/config/base`] as const;
};

export const getGetBaseConfigQueryOptions = <
  TData = Awaited<ReturnType<typeof getBaseConfig>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getBaseConfig>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetBaseConfigQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getBaseConfig>>> = ({ signal }) =>
    getBaseConfig(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getBaseConfig>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetBaseConfigQueryResult = NonNullable<Awaited<ReturnType<typeof getBaseConfig>>>;
export type GetBaseConfigQueryError = ErrorType<unknown>;

/**
 * @summary 系统基础配置获取
 */
export const useGetBaseConfig = <
  TData = Awaited<ReturnType<typeof getBaseConfig>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getBaseConfig>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetBaseConfigQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 用户好友汇总
 */
export const getFriendSummary = (
  params: GetFriendSummaryParams,
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<BaseRestApiFrientSummary>(
    {
      url: `/gateway/admin/client/friends/summary`,
      method: 'GET',
      params,
      signal,
    },
    options
  );
};

export const getGetFriendSummaryQueryKey = (params: GetFriendSummaryParams) => {
  return [`/gateway/admin/client/friends/summary`, ...(params ? [params] : [])] as const;
};

export const getGetFriendSummaryQueryOptions = <
  TData = Awaited<ReturnType<typeof getFriendSummary>>,
  TError = ErrorType<unknown>
>(
  params: GetFriendSummaryParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFriendSummary>>, TError, TData>;
    request?: SecondParameter<typeof axiosInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetFriendSummaryQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getFriendSummary>>> = ({ signal }) =>
    getFriendSummary(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getFriendSummary>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetFriendSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getFriendSummary>>>;
export type GetFriendSummaryQueryError = ErrorType<unknown>;

/**
 * @summary 用户好友汇总
 */
export const useGetFriendSummary = <
  TData = Awaited<ReturnType<typeof getFriendSummary>>,
  TError = ErrorType<unknown>
>(
  params: GetFriendSummaryParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFriendSummary>>, TError, TData>;
    request?: SecondParameter<typeof axiosInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetFriendSummaryQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * 只能删除无人参与的赛事
 * @summary 比赛删除
 */
export const gameGuessDelete = (
  params: GameGuessDeleteParams,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    { url: `/gateway/admin/game/match/delete`, method: 'DELETE', params },
    options
  );
};

export const getGameGuessDeleteMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameGuessDelete>>,
    TError,
    { params: GameGuessDeleteParams },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameGuessDelete>>,
  TError,
  { params: GameGuessDeleteParams },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameGuessDelete>>,
    { params: GameGuessDeleteParams }
  > = (props) => {
    const { params } = props ?? {};

    return gameGuessDelete(params, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameGuessDeleteMutationResult = NonNullable<
  Awaited<ReturnType<typeof gameGuessDelete>>
>;

export type GameGuessDeleteMutationError = ErrorType<unknown>;

/**
 * @summary 比赛删除
 */
export const useGameGuessDelete = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameGuessDelete>>,
    TError,
    { params: GameGuessDeleteParams },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof gameGuessDelete>>,
  TError,
  { params: GameGuessDeleteParams },
  TContext
> => {
  const mutationOptions = getGameGuessDeleteMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 比赛评论删除
 */
export const gameMatchRemarkDelete = (
  gameMatchRemarkDeleteBody: number[],
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/game/match/comment/delete`,
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      data: gameMatchRemarkDeleteBody,
    },
    options
  );
};

export const getGameMatchRemarkDeleteMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameMatchRemarkDelete>>,
    TError,
    { data: number[] },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameMatchRemarkDelete>>,
  TError,
  { data: number[] },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameMatchRemarkDelete>>,
    { data: number[] }
  > = (props) => {
    const { data } = props ?? {};

    return gameMatchRemarkDelete(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameMatchRemarkDeleteMutationResult = NonNullable<
  Awaited<ReturnType<typeof gameMatchRemarkDelete>>
>;
export type GameMatchRemarkDeleteMutationBody = number[];
export type GameMatchRemarkDeleteMutationError = ErrorType<unknown>;

/**
 * @summary 比赛评论删除
 */
export const useGameMatchRemarkDelete = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameMatchRemarkDelete>>,
    TError,
    { data: number[] },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof gameMatchRemarkDelete>>,
  TError,
  { data: number[] },
  TContext
> => {
  const mutationOptions = getGameMatchRemarkDeleteMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 系统任务配置删除
 */
export const updateConfigTask1 = (
  params: UpdateConfigTask1Params,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    { url: `/gateway/admin/data/config/task/delete`, method: 'DELETE', params },
    options
  );
};

export const getUpdateConfigTask1MutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateConfigTask1>>,
    TError,
    { params: UpdateConfigTask1Params },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateConfigTask1>>,
  TError,
  { params: UpdateConfigTask1Params },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateConfigTask1>>,
    { params: UpdateConfigTask1Params }
  > = (props) => {
    const { params } = props ?? {};

    return updateConfigTask1(params, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateConfigTask1MutationResult = NonNullable<
  Awaited<ReturnType<typeof updateConfigTask1>>
>;

export type UpdateConfigTask1MutationError = ErrorType<unknown>;

/**
 * @summary 系统任务配置删除
 */
export const useUpdateConfigTask1 = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateConfigTask1>>,
    TError,
    { params: UpdateConfigTask1Params },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof updateConfigTask1>>,
  TError,
  { params: UpdateConfigTask1Params },
  TContext
> => {
  const mutationOptions = getUpdateConfigTask1MutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 删除Banner
 */
export const deleteBanner = (
  params: DeleteBannerParams,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    { url: `/gateway/admin/data/banner/delete`, method: 'DELETE', params },
    options
  );
};

export const getDeleteBannerMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteBanner>>,
    TError,
    { params: DeleteBannerParams },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteBanner>>,
  TError,
  { params: DeleteBannerParams },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteBanner>>,
    { params: DeleteBannerParams }
  > = (props) => {
    const { params } = props ?? {};

    return deleteBanner(params, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeleteBannerMutationResult = NonNullable<Awaited<ReturnType<typeof deleteBanner>>>;

export type DeleteBannerMutationError = ErrorType<unknown>;

/**
 * @summary 删除Banner
 */
export const useDeleteBanner = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteBanner>>,
    TError,
    { params: DeleteBannerParams },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteBanner>>,
  TError,
  { params: DeleteBannerParams },
  TContext
> => {
  const mutationOptions = getDeleteBannerMutationOptions(options);

  return useMutation(mutationOptions);
};
