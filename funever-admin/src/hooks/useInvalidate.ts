import { QueryKey, useQueryClient } from '@tanstack/react-query';

export const useInvalidate = () => {
  const queryClient = useQueryClient();
  return (...queryKey: QueryKey) =>
    queryClient.invalidateQueries({
      queryKey,
    });
};
