import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useSnackbar } from 'components/snackbar';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'auth/useAuthContext';

// eslint-disable-next-line import/no-mutable-exports
export let queryClientRef: React.MutableRefObject<QueryClient> | null = null;
const Provider: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = async (error: any) => {
    const status = error?.data?.status;
    const message = error?.data?.message || error?.response?.data?.message || error.message;
    enqueueSnackbar(message, { variant: 'error' });
    if (status === 1002) {
      await logout?.();
      navigate('/');
    }
  };

  const mutationCacheRef = useRef<MutationCache>(
    new MutationCache({
      onError,
    })
  );

  const queryCacheRef = useRef<QueryCache>(
    new QueryCache({
      onError,
    })
  );

  queryClientRef = useRef(
    new QueryClient({
      mutationCache: mutationCacheRef.current,
      queryCache: queryCacheRef.current,
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, // default: true
          staleTime: 30,
          retry: false,
        },
      },
    })
  );

  if (queryClientRef.current == null) return null;

  return <QueryClientProvider client={queryClientRef.current}>{children}</QueryClientProvider>;
};

export default Provider;
