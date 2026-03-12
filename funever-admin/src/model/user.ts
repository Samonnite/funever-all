import { useAdminUserInfo } from 'api';

export const useGetUser = () => {
  const { data: res, ...result } = useAdminUserInfo({
    query: {
      enabled: false,
    },
  });
  const user = res?.data;

  return {
    user,
    ...result,
  };
};
