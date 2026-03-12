import { useMount, useUnmount } from 'ahooks';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { isObject } from 'lodash';
import pickBy from 'lodash/pickBy';

const searchParams = atomWithStorage('searchParams', null);
export const useQueryParams = <T extends object>(id?: string, defaultParams?: any) => {
  const key = id || 'default';
  const [query, setQuery] = useAtom(searchParams || { [key!]: defaultParams });

  useMount(() => {
    if (defaultParams) {
      setQuery((pre: any) => ({ ...pre, [key!]: defaultParams as any }));
    }
  });

  // useUnmount(() => {
  //   setQuery(null);
  // });

  const returns = query?.[key] || {};
  console.log(returns);
  return [
    { ...defaultParams, ...returns },
    (pre: any) => {
      const params = pickBy(pre) as any;
      const keyValue = key ? defaultParams : '';
      console.log(keyValue);

      return setQuery((p: any) => ({ ...p, [key!]: { ...params, ...keyValue } }));
    },
  ] as const;
};
