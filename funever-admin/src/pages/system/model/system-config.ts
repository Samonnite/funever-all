import {
  getGetAdminConfQueryKey,
  useUpdateConf,
  useGetAdminConf,
  useUpdatePoolAddr,
  useUpdateBonusAddr,
} from 'api';
import { useInvalidate } from 'hooks/useInvalidate';

export const SystemSettingModel = (() => ({
  useInvalidateSetting() {
    const invalidate = useInvalidate();
    return () => invalidate(...getGetAdminConfQueryKey());
  },
  useSystemSetting() {
    const { data: res, ...result } = useGetAdminConf();
    return {
      systemSetting: res?.data,
      ...result,
    };
  },
  useUpdateSetting() {
    const invalidate = this.useInvalidateSetting();
    const { mutateAsync: updateSetting, ...result } = useUpdateConf({
      mutation: {
        onSuccess() {
          invalidate();
        },
      },
    });
    return {
      updateSetting,
      ...result,
    };
  },
  useUpdatePool() {
    const { mutateAsync: updatePool, ...result } = useUpdatePoolAddr();
    return {
      updatePool,
      ...result,
    };
  },
  useUpdateBouns() {
    const { mutateAsync: updateBouns, ...result } = useUpdateBonusAddr();
    return {
      updateBouns,
      ...result,
    };
  },
}))();
