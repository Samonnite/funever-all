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
  QueryClient,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import type { AdminCoinEdit } from './model/adminCoinEdit';
import type { AdminCoinQuery } from './model/adminCoinQuery';
import type { AdminGameContestEdit } from './model/adminGameContestEdit';
import type { AdminGameContestQuery } from './model/adminGameContestQuery';
import type { AdminGameEdit } from './model/adminGameEdit';
import type { AdminGameQuery } from './model/adminGameQuery';
import type { AdminGuessComplete } from './model/adminGuessComplete';
import type { AdminGuessQuery } from './model/adminGuessQuery';
import type { AdminGuessSubmit } from './model/adminGuessSubmit';
import type { AdminTeamEdit } from './model/adminTeamEdit';
import type { AdminTeamPoint } from './model/adminTeamPoint';
import type { AdminTeamQuery } from './model/adminTeamQuery';
import type { AdminUserClientQuery } from './model/adminUserClientQuery';
import type { AdminUserClientUpdate } from './model/adminUserClientUpdate';
import type { AdminUserEdit } from './model/adminUserEdit';
import type { AdminUserGoogleBind } from './model/adminUserGoogleBind';
import type { AdminUserGuessQuery } from './model/adminUserGuessQuery';
import type { AdminUserLogin } from './model/adminUserLogin';
import type { AdminUserPwdChange } from './model/adminUserPwdChange';
import type { AdminUserQuery } from './model/adminUserQuery';
import type { AwsUploadParam } from './model/awsUploadParam';
import type { BaseRestAdminUser } from './model/baseRestAdminUser';
import type { BaseRestBlockConf } from './model/baseRestBlockConf';
import type { BaseRestGame } from './model/baseRestGame';
import type { BaseRestGoogleKey } from './model/baseRestGoogleKey';
import type { BaseRestListGameGuessBlock } from './model/baseRestListGameGuessBlock';
import type { BaseRestListPointConf } from './model/baseRestListPointConf';
import type { BaseRestLoginAdmin } from './model/baseRestLoginAdmin';
import type { BaseRestObject } from './model/baseRestObject';
import type { BaseRestString } from './model/baseRestString';
import type { BaseRestUploadLog } from './model/baseRestUploadLog';
import type { BlockConfEdit } from './model/blockConfEdit';
import type { BlockLoggerQuery } from './model/blockLoggerQuery';
import type { BonusAddrUpdate } from './model/bonusAddrUpdate';
import type { DataBanner } from './model/dataBanner';
import type { DataBannerQuery } from './model/dataBannerQuery';
import type { DeleteBannerParams } from './model/deleteBannerParams';
import type { GameGuessBlockParams } from './model/gameGuessBlockParams';
import type { GameGuessBlockRetryParams } from './model/gameGuessBlockRetryParams';
import type { GameGuessDeleteParams } from './model/gameGuessDeleteParams';
import type { PageRestAdminGameContestPage } from './model/pageRestAdminGameContestPage';
import type { PageRestAdminGuessPage } from './model/pageRestAdminGuessPage';
import type { PageRestAdminTeamPage } from './model/pageRestAdminTeamPage';
import type { PageRestAdminUser } from './model/pageRestAdminUser';
import type { PageRestAdminUserGuessPage } from './model/pageRestAdminUserGuessPage';
import type { PageRestBlockCoin } from './model/pageRestBlockCoin';
import type { PageRestBlockLogger } from './model/pageRestBlockLogger';
import type { PageRestDataBanner } from './model/pageRestDataBanner';
import type { PageRestGame } from './model/pageRestGame';
import type { PageRestUserClient } from './model/pageRestUserClient';
import type { PoolAddrUpdate } from './model/poolAddrUpdate';
import type { UpdatePointConfParams } from './model/updatePointConfParams';
import { axiosInstance } from '../utils/axios';
import type { ErrorType } from '../utils/axios';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never;

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
}) => {
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
}) => {
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
}) => {
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
}) => {
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
}) => {
  const mutationOptions = getAdminUserEditMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 积分配置更新
 */
export const updatePointConf = (
  data: UpdatePointConfParams,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestGame>(
    { url: `/gateway/admin/point/conf/update`, method: 'POST', data },
    options
  );
};

export const getUpdatePointConfMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePointConf>>,
    TError,
    { data: UpdatePointConfParams },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updatePointConf>>,
  TError,
  { data: UpdatePointConfParams },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updatePointConf>>,
    { data: UpdatePointConfParams }
  > = (props) => {
    const { data } = props ?? {};

    return updatePointConf(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdatePointConfMutationResult = NonNullable<
  Awaited<ReturnType<typeof updatePointConf>>
>;

export type UpdatePointConfMutationError = ErrorType<unknown>;

/**
 * @summary 积分配置更新
 */
export const useUpdatePointConf = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePointConf>>,
    TError,
    { data: UpdatePointConfParams },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getUpdatePointConfMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 日志查询
 */
export const blockLoggerQuery = (
  blockLoggerQuery: BlockLoggerQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestBlockLogger>(
    {
      url: `/gateway/admin/logger/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: blockLoggerQuery,
    },
    options
  );
};

export const getBlockLoggerQueryMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof blockLoggerQuery>>,
    TError,
    { data: BlockLoggerQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof blockLoggerQuery>>,
  TError,
  { data: BlockLoggerQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof blockLoggerQuery>>,
    { data: BlockLoggerQuery }
  > = (props) => {
    const { data } = props ?? {};

    return blockLoggerQuery(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type BlockLoggerQueryMutationResult = NonNullable<
  Awaited<ReturnType<typeof blockLoggerQuery>>
>;
export type BlockLoggerQueryMutationBody = BlockLoggerQuery;
export type BlockLoggerQueryMutationError = ErrorType<unknown>;

/**
 * @summary 日志查询
 */
export const useBlockLoggerQuery = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof blockLoggerQuery>>,
    TError,
    { data: BlockLoggerQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getBlockLoggerQueryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 默认结果按时间倒序返回，排序字段：createTime
 * @summary 战队查询
 */
export const teamPageQuery = (
  adminTeamQuery: AdminTeamQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestAdminTeamPage>(
    {
      url: `/gateway/admin/game/team/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminTeamQuery,
    },
    options
  );
};

export const getTeamPageQueryMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof teamPageQuery>>,
    TError,
    { data: AdminTeamQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof teamPageQuery>>,
  TError,
  { data: AdminTeamQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof teamPageQuery>>,
    { data: AdminTeamQuery }
  > = (props) => {
    const { data } = props ?? {};

    return teamPageQuery(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type TeamPageQueryMutationResult = NonNullable<Awaited<ReturnType<typeof teamPageQuery>>>;
export type TeamPageQueryMutationBody = AdminTeamQuery;
export type TeamPageQueryMutationError = ErrorType<unknown>;

/**
 * @summary 战队查询
 */
export const useTeamPageQuery = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof teamPageQuery>>,
    TError,
    { data: AdminTeamQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getTeamPageQueryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 变更战队积分，增量变更
 * @summary 战队积分
 */
export const teamPointChange = (
  adminTeamPoint: AdminTeamPoint,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/game/team/point`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminTeamPoint,
    },
    options
  );
};

export const getTeamPointChangeMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof teamPointChange>>,
    TError,
    { data: AdminTeamPoint },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof teamPointChange>>,
  TError,
  { data: AdminTeamPoint },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof teamPointChange>>,
    { data: AdminTeamPoint }
  > = (props) => {
    const { data } = props ?? {};

    return teamPointChange(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type TeamPointChangeMutationResult = NonNullable<
  Awaited<ReturnType<typeof teamPointChange>>
>;
export type TeamPointChangeMutationBody = AdminTeamPoint;
export type TeamPointChangeMutationError = ErrorType<unknown>;

/**
 * @summary 战队积分
 */
export const useTeamPointChange = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof teamPointChange>>,
    TError,
    { data: AdminTeamPoint },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getTeamPointChangeMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 新增的id为空，编辑的id不为空
 * @summary 战队编辑
 */
export const teamEdit = (
  adminTeamEdit: AdminTeamEdit,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/game/team/edit`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminTeamEdit,
    },
    options
  );
};

export const getTeamEditMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof teamEdit>>,
    TError,
    { data: AdminTeamEdit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof teamEdit>>,
  TError,
  { data: AdminTeamEdit },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof teamEdit>>,
    { data: AdminTeamEdit }
  > = (props) => {
    const { data } = props ?? {};

    return teamEdit(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type TeamEditMutationResult = NonNullable<Awaited<ReturnType<typeof teamEdit>>>;
export type TeamEditMutationBody = AdminTeamEdit;
export type TeamEditMutationError = ErrorType<unknown>;

/**
 * @summary 战队编辑
 */
export const useTeamEdit = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof teamEdit>>,
    TError,
    { data: AdminTeamEdit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getTeamEditMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 默认结果按时间倒序返回，排序字段：createTime
 * @summary 游戏查询
 */
export const gameQuery = (
  adminGameQuery: AdminGameQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestGame>(
    {
      url: `/gateway/admin/game/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminGameQuery,
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
    { data: AdminGameQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameQuery>>,
  TError,
  { data: AdminGameQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameQuery>>,
    { data: AdminGameQuery }
  > = (props) => {
    const { data } = props ?? {};

    return gameQuery(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameQueryMutationResult = NonNullable<Awaited<ReturnType<typeof gameQuery>>>;
export type GameQueryMutationBody = AdminGameQuery;
export type GameQueryMutationError = ErrorType<unknown>;

/**
 * @summary 游戏查询
 */
export const useGameQuery = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameQuery>>,
    TError,
    { data: AdminGameQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getGameQueryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 赛事竞猜用户查询
 */
export const gameUserGuessQuery = (
  adminUserGuessQuery: AdminUserGuessQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestAdminUserGuessPage>(
    {
      url: `/gateway/admin/game/guess/user/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminUserGuessQuery,
    },
    options
  );
};

export const getGameUserGuessQueryMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameUserGuessQuery>>,
    TError,
    { data: AdminUserGuessQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameUserGuessQuery>>,
  TError,
  { data: AdminUserGuessQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameUserGuessQuery>>,
    { data: AdminUserGuessQuery }
  > = (props) => {
    const { data } = props ?? {};

    return gameUserGuessQuery(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameUserGuessQueryMutationResult = NonNullable<
  Awaited<ReturnType<typeof gameUserGuessQuery>>
>;
export type GameUserGuessQueryMutationBody = AdminUserGuessQuery;
export type GameUserGuessQueryMutationError = ErrorType<unknown>;

/**
 * @summary 赛事竞猜用户查询
 */
export const useGameUserGuessQuery = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameUserGuessQuery>>,
    TError,
    { data: AdminUserGuessQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getGameUserGuessQueryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 新增和更新
 * @summary 赛事竞猜提交
 */
export const gameGuessSubmit = (
  adminGuessSubmit: AdminGuessSubmit,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/game/guess/submit`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminGuessSubmit,
    },
    options
  );
};

export const getGameGuessSubmitMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameGuessSubmit>>,
    TError,
    { data: AdminGuessSubmit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameGuessSubmit>>,
  TError,
  { data: AdminGuessSubmit },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameGuessSubmit>>,
    { data: AdminGuessSubmit }
  > = (props) => {
    const { data } = props ?? {};

    return gameGuessSubmit(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameGuessSubmitMutationResult = NonNullable<
  Awaited<ReturnType<typeof gameGuessSubmit>>
>;
export type GameGuessSubmitMutationBody = AdminGuessSubmit;
export type GameGuessSubmitMutationError = ErrorType<unknown>;

/**
 * @summary 赛事竞猜提交
 */
export const useGameGuessSubmit = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameGuessSubmit>>,
    TError,
    { data: AdminGuessSubmit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getGameGuessSubmitMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 需要提供至少三个按钮：竞猜结算、用户查询、链上转账
 * @summary 赛事竞猜查询
 */
export const gameGuessQuery = (
  adminGuessQuery: AdminGuessQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestAdminGuessPage>(
    {
      url: `/gateway/admin/game/guess/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminGuessQuery,
    },
    options
  );
};

export const getGameGuessQueryMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameGuessQuery>>,
    TError,
    { data: AdminGuessQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameGuessQuery>>,
  TError,
  { data: AdminGuessQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameGuessQuery>>,
    { data: AdminGuessQuery }
  > = (props) => {
    const { data } = props ?? {};

    return gameGuessQuery(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameGuessQueryMutationResult = NonNullable<Awaited<ReturnType<typeof gameGuessQuery>>>;
export type GameGuessQueryMutationBody = AdminGuessQuery;
export type GameGuessQueryMutationError = ErrorType<unknown>;

/**
 * @summary 赛事竞猜查询
 */
export const useGameGuessQuery = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameGuessQuery>>,
    TError,
    { data: AdminGuessQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getGameGuessQueryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 输入比分结算赛事
 * @summary 赛事竞猜结算
 */
export const gameGuessComplete = (
  adminGuessComplete: AdminGuessComplete,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/game/guess/complete`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminGuessComplete,
    },
    options
  );
};

export const getGameGuessCompleteMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameGuessComplete>>,
    TError,
    { data: AdminGuessComplete },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameGuessComplete>>,
  TError,
  { data: AdminGuessComplete },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameGuessComplete>>,
    { data: AdminGuessComplete }
  > = (props) => {
    const { data } = props ?? {};

    return gameGuessComplete(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameGuessCompleteMutationResult = NonNullable<
  Awaited<ReturnType<typeof gameGuessComplete>>
>;
export type GameGuessCompleteMutationBody = AdminGuessComplete;
export type GameGuessCompleteMutationError = ErrorType<unknown>;

/**
 * @summary 赛事竞猜结算
 */
export const useGameGuessComplete = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameGuessComplete>>,
    TError,
    { data: AdminGuessComplete },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getGameGuessCompleteMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 链上转账记录状态异常时触发重试按钮
 * @summary 赛事竞猜链上回款重试
 */
export const gameGuessBlockRetry = (
  params: GameGuessBlockRetryParams,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    { url: `/gateway/admin/game/guess/complete/block/retry`, method: 'POST', params },
    options
  );
};

export const getGameGuessBlockRetryMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameGuessBlockRetry>>,
    TError,
    { params: GameGuessBlockRetryParams },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameGuessBlockRetry>>,
  TError,
  { params: GameGuessBlockRetryParams },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameGuessBlockRetry>>,
    { params: GameGuessBlockRetryParams }
  > = (props) => {
    const { params } = props ?? {};

    return gameGuessBlockRetry(params, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameGuessBlockRetryMutationResult = NonNullable<
  Awaited<ReturnType<typeof gameGuessBlockRetry>>
>;

export type GameGuessBlockRetryMutationError = ErrorType<unknown>;

/**
 * @summary 赛事竞猜链上回款重试
 */
export const useGameGuessBlockRetry = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameGuessBlockRetry>>,
    TError,
    { params: GameGuessBlockRetryParams },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getGameGuessBlockRetryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 新增的id为空，编辑的id不为空
 * @summary 游戏提交
 */
export const gameEdit = (
  adminGameEdit: AdminGameEdit,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/game/edit`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminGameEdit,
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
    { data: AdminGameEdit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameEdit>>,
  TError,
  { data: AdminGameEdit },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameEdit>>,
    { data: AdminGameEdit }
  > = (props) => {
    const { data } = props ?? {};

    return gameEdit(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameEditMutationResult = NonNullable<Awaited<ReturnType<typeof gameEdit>>>;
export type GameEditMutationBody = AdminGameEdit;
export type GameEditMutationError = ErrorType<unknown>;

/**
 * @summary 游戏提交
 */
export const useGameEdit = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameEdit>>,
    TError,
    { data: AdminGameEdit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getGameEditMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 新增的id为空，编辑的id不为空
 * @summary 赛事提交
 */
export const gameContestEdit = (
  adminGameContestEdit: AdminGameContestEdit,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/game/contest/submit`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminGameContestEdit,
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
    { data: AdminGameContestEdit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameContestEdit>>,
  TError,
  { data: AdminGameContestEdit },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameContestEdit>>,
    { data: AdminGameContestEdit }
  > = (props) => {
    const { data } = props ?? {};

    return gameContestEdit(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameContestEditMutationResult = NonNullable<
  Awaited<ReturnType<typeof gameContestEdit>>
>;
export type GameContestEditMutationBody = AdminGameContestEdit;
export type GameContestEditMutationError = ErrorType<unknown>;

/**
 * @summary 赛事提交
 */
export const useGameContestEdit = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameContestEdit>>,
    TError,
    { data: AdminGameContestEdit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getGameContestEditMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 默认结果按时间倒序返回，排序字段：createTime
 * @summary 赛事查询
 */
export const gameContestQuery = (
  adminGameContestQuery: AdminGameContestQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestAdminGameContestPage>(
    {
      url: `/gateway/admin/game/contest/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminGameContestQuery,
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
    { data: AdminGameContestQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameContestQuery>>,
  TError,
  { data: AdminGameContestQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameContestQuery>>,
    { data: AdminGameContestQuery }
  > = (props) => {
    const { data } = props ?? {};

    return gameContestQuery(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameContestQueryMutationResult = NonNullable<
  Awaited<ReturnType<typeof gameContestQuery>>
>;
export type GameContestQueryMutationBody = AdminGameContestQuery;
export type GameContestQueryMutationError = ErrorType<unknown>;

/**
 * @summary 赛事查询
 */
export const useGameContestQuery = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameContestQuery>>,
    TError,
    { data: AdminGameContestQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getGameContestQueryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 修改Banner
 */
export const updateBanner = (
  dataBanner: DataBanner,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/data/banner/update`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: dataBanner,
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
    { data: DataBanner },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateBanner>>,
  TError,
  { data: DataBanner },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateBanner>>,
    { data: DataBanner }
  > = (props) => {
    const { data } = props ?? {};

    return updateBanner(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateBannerMutationResult = NonNullable<Awaited<ReturnType<typeof updateBanner>>>;
export type UpdateBannerMutationBody = DataBanner;
export type UpdateBannerMutationError = ErrorType<unknown>;

/**
 * @summary 修改Banner
 */
export const useUpdateBanner = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateBanner>>,
    TError,
    { data: DataBanner },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getUpdateBannerMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 新增Banner
 */
export const saveBanner = (
  dataBanner: DataBanner,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/data/banner/save`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: dataBanner,
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
    { data: DataBanner },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof saveBanner>>,
  TError,
  { data: DataBanner },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof saveBanner>>,
    { data: DataBanner }
  > = (props) => {
    const { data } = props ?? {};

    return saveBanner(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type SaveBannerMutationResult = NonNullable<Awaited<ReturnType<typeof saveBanner>>>;
export type SaveBannerMutationBody = DataBanner;
export type SaveBannerMutationError = ErrorType<unknown>;

/**
 * @summary 新增Banner
 */
export const useSaveBanner = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof saveBanner>>,
    TError,
    { data: DataBanner },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getSaveBannerMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 查询Banner
 */
export const queryBanner = (
  dataBannerQuery: DataBannerQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestDataBanner>(
    {
      url: `/gateway/admin/data/banner/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: dataBannerQuery,
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
    { data: DataBannerQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof queryBanner>>,
  TError,
  { data: DataBannerQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof queryBanner>>,
    { data: DataBannerQuery }
  > = (props) => {
    const { data } = props ?? {};

    return queryBanner(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type QueryBannerMutationResult = NonNullable<Awaited<ReturnType<typeof queryBanner>>>;
export type QueryBannerMutationBody = DataBannerQuery;
export type QueryBannerMutationError = ErrorType<unknown>;

/**
 * @summary 查询Banner
 */
export const useQueryBanner = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof queryBanner>>,
    TError,
    { data: DataBannerQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getQueryBannerMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 前台用户更新
 */
export const updateClientUser = (
  adminUserClientUpdate: AdminUserClientUpdate,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/client/update`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminUserClientUpdate,
    },
    options
  );
};

export const getUpdateClientUserMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateClientUser>>,
    TError,
    { data: AdminUserClientUpdate },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateClientUser>>,
  TError,
  { data: AdminUserClientUpdate },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateClientUser>>,
    { data: AdminUserClientUpdate }
  > = (props) => {
    const { data } = props ?? {};

    return updateClientUser(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateClientUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateClientUser>>
>;
export type UpdateClientUserMutationBody = AdminUserClientUpdate;
export type UpdateClientUserMutationError = ErrorType<unknown>;

/**
 * @summary 前台用户更新
 */
export const useUpdateClientUser = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateClientUser>>,
    TError,
    { data: AdminUserClientUpdate },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getUpdateClientUserMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 前台用户查询
 */
export const queryClientUser = (
  adminUserClientQuery: AdminUserClientQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestUserClient>(
    {
      url: `/gateway/admin/client/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminUserClientQuery,
    },
    options
  );
};

export const getQueryClientUserMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof queryClientUser>>,
    TError,
    { data: AdminUserClientQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof queryClientUser>>,
  TError,
  { data: AdminUserClientQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof queryClientUser>>,
    { data: AdminUserClientQuery }
  > = (props) => {
    const { data } = props ?? {};

    return queryClientUser(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type QueryClientUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof queryClientUser>>
>;
export type QueryClientUserMutationBody = AdminUserClientQuery;
export type QueryClientUserMutationError = ErrorType<unknown>;

/**
 * @summary 前台用户查询
 */
export const useQueryClientUser = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof queryClientUser>>,
    TError,
    { data: AdminUserClientQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getQueryClientUserMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 文件上传申请
 */
export const uploadApply = (
  awsUploadParam: AwsUploadParam,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestUploadLog>(
    {
      url: `/gateway/admin/block/upload/apply`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: awsUploadParam,
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
    { data: AwsUploadParam },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof uploadApply>>,
  TError,
  { data: AwsUploadParam },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof uploadApply>>,
    { data: AwsUploadParam }
  > = (props) => {
    const { data } = props ?? {};

    return uploadApply(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UploadApplyMutationResult = NonNullable<Awaited<ReturnType<typeof uploadApply>>>;
export type UploadApplyMutationBody = AwsUploadParam;
export type UploadApplyMutationError = ErrorType<unknown>;

/**
 * @summary 文件上传申请
 */
export const useUploadApply = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadApply>>,
    TError,
    { data: AwsUploadParam },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getUploadApplyMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 用于更新游戏池私钥，返回更新后的公钥地址
 * @summary 游戏池私钥更新
 */
export const updatePoolAddr = (
  poolAddrUpdate: PoolAddrUpdate,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestString>(
    {
      url: `/gateway/admin/block/pool/update`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: poolAddrUpdate,
    },
    options
  );
};

export const getUpdatePoolAddrMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePoolAddr>>,
    TError,
    { data: PoolAddrUpdate },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updatePoolAddr>>,
  TError,
  { data: PoolAddrUpdate },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updatePoolAddr>>,
    { data: PoolAddrUpdate }
  > = (props) => {
    const { data } = props ?? {};

    return updatePoolAddr(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdatePoolAddrMutationResult = NonNullable<Awaited<ReturnType<typeof updatePoolAddr>>>;
export type UpdatePoolAddrMutationBody = PoolAddrUpdate;
export type UpdatePoolAddrMutationError = ErrorType<unknown>;

/**
 * @summary 游戏池私钥更新
 */
export const useUpdatePoolAddr = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePoolAddr>>,
    TError,
    { data: PoolAddrUpdate },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getUpdatePoolAddrMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 系统配置更新
 */
export const updateConf = (
  blockConfEdit: BlockConfEdit,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/block/conf/update`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: blockConfEdit,
    },
    options
  );
};

export const getUpdateConfMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateConf>>,
    TError,
    { data: BlockConfEdit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateConf>>,
  TError,
  { data: BlockConfEdit },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateConf>>,
    { data: BlockConfEdit }
  > = (props) => {
    const { data } = props ?? {};

    return updateConf(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateConfMutationResult = NonNullable<Awaited<ReturnType<typeof updateConf>>>;
export type UpdateConfMutationBody = BlockConfEdit;
export type UpdateConfMutationError = ErrorType<unknown>;

/**
 * @summary 系统配置更新
 */
export const useUpdateConf = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateConf>>,
    TError,
    { data: BlockConfEdit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getUpdateConfMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 币种查询
 */
export const blockCoinQuery = (
  adminCoinQuery: AdminCoinQuery,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<PageRestBlockCoin>(
    {
      url: `/gateway/admin/block/coin/query`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminCoinQuery,
    },
    options
  );
};

export const getBlockCoinQueryMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof blockCoinQuery>>,
    TError,
    { data: AdminCoinQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof blockCoinQuery>>,
  TError,
  { data: AdminCoinQuery },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof blockCoinQuery>>,
    { data: AdminCoinQuery }
  > = (props) => {
    const { data } = props ?? {};

    return blockCoinQuery(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type BlockCoinQueryMutationResult = NonNullable<Awaited<ReturnType<typeof blockCoinQuery>>>;
export type BlockCoinQueryMutationBody = AdminCoinQuery;
export type BlockCoinQueryMutationError = ErrorType<unknown>;

/**
 * @summary 币种查询
 */
export const useBlockCoinQuery = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof blockCoinQuery>>,
    TError,
    { data: AdminCoinQuery },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getBlockCoinQueryMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 币种编辑
 */
export const blockCoinEdit = (
  adminCoinEdit: AdminCoinEdit,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/block/coin/edit`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: adminCoinEdit,
    },
    options
  );
};

export const getBlockCoinEditMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof blockCoinEdit>>,
    TError,
    { data: AdminCoinEdit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof blockCoinEdit>>,
  TError,
  { data: AdminCoinEdit },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof blockCoinEdit>>,
    { data: AdminCoinEdit }
  > = (props) => {
    const { data } = props ?? {};

    return blockCoinEdit(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type BlockCoinEditMutationResult = NonNullable<Awaited<ReturnType<typeof blockCoinEdit>>>;
export type BlockCoinEditMutationBody = AdminCoinEdit;
export type BlockCoinEditMutationError = ErrorType<unknown>;

/**
 * @summary 币种编辑
 */
export const useBlockCoinEdit = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof blockCoinEdit>>,
    TError,
    { data: AdminCoinEdit },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getBlockCoinEditMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 用于更新分红账户
 * @summary 分红地址更新
 */
export const updateBonusAddr = (
  bonusAddrUpdate: BonusAddrUpdate,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestString>(
    {
      url: `/gateway/admin/block/bonus/update`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: bonusAddrUpdate,
    },
    options
  );
};

export const getUpdateBonusAddrMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateBonusAddr>>,
    TError,
    { data: BonusAddrUpdate },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateBonusAddr>>,
  TError,
  { data: BonusAddrUpdate },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateBonusAddr>>,
    { data: BonusAddrUpdate }
  > = (props) => {
    const { data } = props ?? {};

    return updateBonusAddr(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateBonusAddrMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateBonusAddr>>
>;
export type UpdateBonusAddrMutationBody = BonusAddrUpdate;
export type UpdateBonusAddrMutationError = ErrorType<unknown>;

/**
 * @summary 分红地址更新
 */
export const useUpdateBonusAddr = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateBonusAddr>>,
    TError,
    { data: BonusAddrUpdate },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getUpdateBonusAddrMutationOptions(options);

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

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

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
  return axiosInstance<BaseRestLoginAdmin>(
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

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

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

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 积分配置列表
 */
export const getPointConfList = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<BaseRestListPointConf>(
    { url: `/gateway/admin/point/conf/list`, method: 'GET', signal },
    options
  );
};

export const getGetPointConfListQueryKey = () => {
  return [`/gateway/admin/point/conf/list`] as const;
};

export const getGetPointConfListQueryOptions = <
  TData = Awaited<ReturnType<typeof getPointConfList>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getPointConfList>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPointConfListQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPointConfList>>> = ({ signal }) =>
    getPointConfList(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getPointConfList>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetPointConfListQueryResult = NonNullable<Awaited<ReturnType<typeof getPointConfList>>>;
export type GetPointConfListQueryError = ErrorType<unknown>;

/**
 * @summary 积分配置列表
 */
export const useGetPointConfList = <
  TData = Awaited<ReturnType<typeof getPointConfList>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getPointConfList>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetPointConfListQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * 用于获取链上转账记录，状态异常时显示重试按钮
 * @summary 赛事竞猜结算链上转账
 */
export const gameGuessBlock = (
  params: GameGuessBlockParams,
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<BaseRestListGameGuessBlock>(
    { url: `/gateway/admin/game/guess/complete/block`, method: 'GET', params, signal },
    options
  );
};

export const getGameGuessBlockQueryKey = (params: GameGuessBlockParams) => {
  return [`/gateway/admin/game/guess/complete/block`, ...(params ? [params] : [])] as const;
};

export const getGameGuessBlockQueryOptions = <
  TData = Awaited<ReturnType<typeof gameGuessBlock>>,
  TError = ErrorType<unknown>
>(
  params: GameGuessBlockParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof gameGuessBlock>>, TError, TData>;
    request?: SecondParameter<typeof axiosInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGameGuessBlockQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof gameGuessBlock>>> = ({ signal }) =>
    gameGuessBlock(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof gameGuessBlock>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GameGuessBlockQueryResult = NonNullable<Awaited<ReturnType<typeof gameGuessBlock>>>;
export type GameGuessBlockQueryError = ErrorType<unknown>;

/**
 * @summary 赛事竞猜结算链上转账
 */
export const useGameGuessBlock = <
  TData = Awaited<ReturnType<typeof gameGuessBlock>>,
  TError = ErrorType<unknown>
>(
  params: GameGuessBlockParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof gameGuessBlock>>, TError, TData>;
    request?: SecondParameter<typeof axiosInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGameGuessBlockQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 系统配置获取
 */
export const getAdminConf = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<BaseRestBlockConf>(
    { url: `/gateway/admin/block/conf/get`, method: 'GET', signal },
    options
  );
};

export const getGetAdminConfQueryKey = () => {
  return [`/gateway/admin/block/conf/get`] as const;
};

export const getGetAdminConfQueryOptions = <
  TData = Awaited<ReturnType<typeof getAdminConf>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminConf>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAdminConfQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAdminConf>>> = ({ signal }) =>
    getAdminConf(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getAdminConf>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetAdminConfQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminConf>>>;
export type GetAdminConfQueryError = ErrorType<unknown>;

/**
 * @summary 系统配置获取
 */
export const useGetAdminConf = <
  TData = Awaited<ReturnType<typeof getAdminConf>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminConf>>, TError, TData>;
  request?: SecondParameter<typeof axiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetAdminConfQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * 传需要删除的战队Id，逻辑删除
 * @summary 战队删除
 */
export const teamDelete = (
  teamDeleteBody: number[],
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/game/team/delete`,
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      data: teamDeleteBody,
    },
    options
  );
};

export const getTeamDeleteMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof teamDelete>>,
    TError,
    { data: number[] },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof teamDelete>>,
  TError,
  { data: number[] },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof teamDelete>>, { data: number[] }> = (
    props
  ) => {
    const { data } = props ?? {};

    return teamDelete(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type TeamDeleteMutationResult = NonNullable<Awaited<ReturnType<typeof teamDelete>>>;
export type TeamDeleteMutationBody = number[];
export type TeamDeleteMutationError = ErrorType<unknown>;

/**
 * @summary 战队删除
 */
export const useTeamDelete = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof teamDelete>>,
    TError,
    { data: number[] },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getTeamDeleteMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 只能物理删除无人参与的赛事
 * @summary 赛事竞猜删除
 */
export const gameGuessDelete = (
  params: GameGuessDeleteParams,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    { url: `/gateway/admin/game/guess/delete`, method: 'DELETE', params },
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
 * @summary 赛事竞猜删除
 */
export const useGameGuessDelete = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameGuessDelete>>,
    TError,
    { params: GameGuessDeleteParams },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getGameGuessDeleteMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 传需要删除的Id，逻辑删除
 * @summary 游戏删除
 */
export const gameDelete = (
  gameDeleteBody: number[],
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/game/delete`,
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      data: gameDeleteBody,
    },
    options
  );
};

export const getGameDeleteMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameDelete>>,
    TError,
    { data: number[] },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameDelete>>,
  TError,
  { data: number[] },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof gameDelete>>, { data: number[] }> = (
    props
  ) => {
    const { data } = props ?? {};

    return gameDelete(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameDeleteMutationResult = NonNullable<Awaited<ReturnType<typeof gameDelete>>>;
export type GameDeleteMutationBody = number[];
export type GameDeleteMutationError = ErrorType<unknown>;

/**
 * @summary 游戏删除
 */
export const useGameDelete = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameDelete>>,
    TError,
    { data: number[] },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getGameDeleteMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 传需要删除的赛事Id，逻辑删除
 * @summary 赛事删除
 */
export const gameContestDelete = (
  gameContestDeleteBody: number[],
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/admin/game/contest/delete`,
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      data: gameContestDeleteBody,
    },
    options
  );
};

export const getGameContestDeleteMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameContestDelete>>,
    TError,
    { data: number[] },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof gameContestDelete>>,
  TError,
  { data: number[] },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof gameContestDelete>>,
    { data: number[] }
  > = (props) => {
    const { data } = props ?? {};

    return gameContestDelete(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type GameContestDeleteMutationResult = NonNullable<
  Awaited<ReturnType<typeof gameContestDelete>>
>;
export type GameContestDeleteMutationBody = number[];
export type GameContestDeleteMutationError = ErrorType<unknown>;

/**
 * @summary 赛事删除
 */
export const useGameContestDelete = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof gameContestDelete>>,
    TError,
    { data: number[] },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getGameContestDeleteMutationOptions(options);

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
}) => {
  const mutationOptions = getDeleteBannerMutationOptions(options);

  return useMutation(mutationOptions);
};
