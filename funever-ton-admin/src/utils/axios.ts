import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { isArray, isString, map, transform } from 'lodash';

const isPlainObject = (value: unknown) => value?.constructor === Object;

const flattenValues = (obj: any, isEmptyStr = true): Record<string, any> | any[] => {
  const transformed = transform(obj, (accumulator: any, value, key) => {
    let newValue = value;

    if (isArray(value)) {
      newValue = map(value, (item) => {
        if (isPlainObject(item)) {
          return flattenValues(item, isEmptyStr);
        }
        return item;
      });
    } else if (isPlainObject(value)) {
      newValue = flattenValues(value, isEmptyStr);
    }

    if (newValue !== null) {
      if (isEmptyStr) {
        accumulator[key] = newValue;
      }
      if (!isEmptyStr && newValue !== '') {
        if (isString(newValue)) {
          accumulator[key] = newValue?.replace(/(^\s*)|(\s*$)/g, '');
        } else {
          accumulator[key] = newValue;
        }
      }
    }
  });

  return transformed;
};

const safeFlattenValues = (obj: any, isEmptyStr = true): Record<string, any> | any[] => {
  if (obj === null) return obj;
  if (
    Array.isArray(obj) &&
    obj.every((item) => typeof item === 'string' || typeof item === 'number')
  ) {
    return obj;
  }
  return flattenValues(obj, isEmptyStr);
};

const AXIOS_INSTANCE = Axios.create({
  baseURL: '/',
}); // use your own URL here or environment variable

AXIOS_INSTANCE.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    config.headers!['Api-Env'] = 'zh_cn';
    if (token) {
      config.headers!['Admin-token'] = token;
    }
    const isEmptyStr = (config as { emptyStr?: boolean })?.emptyStr;
    const isFormData = (config as { isFormData?: boolean })?.isFormData;
    if (isFormData) {
      return config;
    }
    config.data = safeFlattenValues(config.data, isEmptyStr);

    return config;
  },
  (error) => Promise.reject(error)
);
AXIOS_INSTANCE.interceptors.response.use(
  (response) => {
    const { status } = response.data;
    if (status && status !== 200) {
      return Promise.reject(response);
    }
    return Promise.resolve(response);
  },
  (error) => Promise.reject(error)
);
export interface CancelablePromise<T> extends Promise<T> {
  cancel(): void;
}

// add a second `options` argument here if you want to pass extra options to each generated query
export const axiosInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): CancelablePromise<T extends void ? never : T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise as CancelablePromise<T extends void ? never : T>;
};

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = AxiosError<Error>;

export default AXIOS_INSTANCE;
