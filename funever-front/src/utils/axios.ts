import Axios, { AxiosError, AxiosRequestConfig } from "axios";

const AXIOS_INSTANCE = Axios.create({
  baseURL: "/",
}); // use your own URL here or environment variable

type ToastFunc = (message: string) => void;

let showToastFunc: ToastFunc;

export const setToastFunc = (func: ToastFunc) => {
  showToastFunc = func;
};

AXIOS_INSTANCE.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    config.headers!["Api-Env"] = "zh_cn";
    if (token) {
      config.headers!["Api-token"] = token;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
AXIOS_INSTANCE.interceptors.response.use(
  (response) => {
    const { status } = response.data;
    if (status && status !== 200) {
      const message = response?.data?.message;
      if (status !== 1002) {
        showToastFunc(message);
      } else {
        localStorage.removeItem("accessToken");
        window.location.href = "/";
      }
      return Promise.reject(response);
    }
    return Promise.resolve(response);
  },
  (error) => {
    const message =
      error?.data?.message || error?.response?.data?.message || error.message;
    showToastFunc(message);
    return Promise.reject(error);
  }
);
export interface CancelablePromise<T> extends Promise<T> {
  cancel(): void;
}

// add a second `options` argument here if you want to pass extra options to each generated query
export const axiosInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): CancelablePromise<T extends void ? never : T> => {
  // eslint-disable-next-line import/no-named-as-default-member
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled");
  };

  return promise as CancelablePromise<T extends void ? never : T>;
};

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = AxiosError<Error>;

export default AXIOS_INSTANCE;
