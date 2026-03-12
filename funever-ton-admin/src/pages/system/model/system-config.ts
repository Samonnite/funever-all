import { getGetBaseConfigQueryKey, useUpdateConfigBase, useGetBaseConfig } from 'api';
import { useInvalidate } from 'hooks/useInvalidate';

export const SystemSettingModel = (() => ({
  useInvalidateSetting() {
    const invalidate = useInvalidate();
    return () => invalidate(...getGetBaseConfigQueryKey());
  },
  useSystemSetting() {
    const { data: res, ...result } = useGetBaseConfig();
    return {
      systemSetting: res?.data,
      ...result,
    };
  },
  useUpdateSetting() {
    const invalidate = this.useInvalidateSetting();
    const { mutateAsync: updateSetting, ...result } = useUpdateConfigBase({
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
}))();
