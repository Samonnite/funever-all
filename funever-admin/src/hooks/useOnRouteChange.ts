import { useDeepCompareEffect } from 'ahooks';
import { useLocation } from 'react-router-dom';

export const useOnRouteChange = (cb: (pathname: string) => void) => {
  const history = useLocation();

  useDeepCompareEffect(() => cb(history.pathname), [history.pathname]);
};
