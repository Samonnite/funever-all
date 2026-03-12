import { useEffect } from "react";
import {
  matchPath,
  RouteObject,
  useLocation,
  useNavigate,
} from "react-router-dom";

export type _RouteObject = RouteObject & {
  direction: number;
  children?: _RouteObject[];
};

export function direction2PathCreater(routes: _RouteObject[]) {
  const Direction2Path: Record<number, string> = {};
  const getPath = (routes: _RouteObject[], parentPath = "") => {
    routes.forEach((route) => {
      const { path, direction, children } = route;
      const fullPath = parentPath + path;
      if (children) {
        getPath(children, fullPath);
      }
      if (direction != null && path != null) {
        Direction2Path[direction] = fullPath;
      }
    });
  };
  getPath(routes);
  return Direction2Path;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const obj2QueryString = (obj: Record<string, any>) => {
  return "?" + new URLSearchParams(obj).toString();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const paramsReplacer = (path: string, obj: Record<string, any>) => {
  Object.keys(obj).forEach((k) => {
    const reg = new RegExp(`:${k}`, "g");
    path = path.replace(reg, obj[k]);
  });
  return path;
};

export const directionUserCreater =
  (Direction2Path: Record<number, string>) => () => {
    const navigator = useNavigate();
    return (
      direction: number,
      {
        params,
        query,
      }: {
        params?: Record<string, unknown>;
        query?: Record<string, unknown>;
      } = {}
    ) => {
      let path = Direction2Path[direction];

      if (params) {
        path = paramsReplacer(path, params);
      }

      if (query) {
        path = `${path}${obj2QueryString(query)}`;
      }
      /**
       * maybe ReactRouter V6's fault
       * navigation will preserve scroll position
       * fix like this temporarily
       */
      document.documentElement.scrollTop = 0;
      navigator(path);
    };
  };

export const createUseValueByRoute =
  (Direction2Path: Record<number, string>) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <T extends Record<number, any>>(value: T): undefined | T[keyof T] => {
    const matchedRoute = Object.keys(value).find((direction) => {
      return matchPath(
        {
          path: Direction2Path[direction as unknown as number],
        },
        location.pathname
      );
    });
    return value[matchedRoute as unknown as keyof typeof value];
  };

export const useOnRouteChange = (cb: () => void) => {
  const history = useLocation();

  useEffect(() => {
    return cb();
  }, [history.pathname, cb]);
};

export const createIsInThosePages =
  (Direction2Path: Record<number, string>) => (directions: number[]) => {
    return directions
      .map((direction) => {
        return !!matchPath(
          {
            path: Direction2Path[direction],
          },
          location.pathname
        );
      })
      .find((bl) => bl);
  };

export const useRouteMatch = (patterns: readonly string[]) => {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
};
