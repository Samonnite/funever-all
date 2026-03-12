import React, { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { Direction } from "./direction";
import {
  createIsInThosePages,
  createUseValueByRoute,
  direction2PathCreater,
  directionUserCreater,
} from "./direction-factory";

// import { LoadingScreen } from './loading';
function fallbackRender({
  error,
  refreshCount,
}: {
  error: Error;
  refreshCount: number;
}) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  if (
    ["Failed to fetch dynamically imported module", "Unable to preload"].find(
      (msg) => error.message.includes(msg)
    ) &&
    refreshCount === 0
  ) {
    return <div className="w-full h-full" />;
  }
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}
const Loadable =
  (Component: React.ElementType) => (props: Record<string, unknown>) => {
    const refreshCount = Number(sessionStorage.getItem("refreshCount")) || 0;
    return (
      <Suspense>
        <ErrorBoundary
          FallbackComponent={({ error }) =>
            fallbackRender({ error, refreshCount })
          }
          onError={(error) => {
            if (
              [
                "Failed to fetch dynamically imported module",
                "Unable to preload",
              ].find((msg) => error.message.includes(msg)) &&
              refreshCount === 0
            ) {
              setTimeout(() => {
                sessionStorage.setItem("refreshCount", "1");
                location.reload();
              }, 500);
            }
          }}
        >
          <Component {...props} />
        </ErrorBoundary>
      </Suspense>
    );
  };

const HomeLayout = Loadable(lazy(() => import("components/HomeContent")));
const MainLayout = Loadable(lazy(() => import("components/MainContent")));
const HomePage = Loadable(lazy(() => import("pages/home")));
const CommunityPage = Loadable(lazy(() => import("pages/home/community")));
const GamingCircle = Loadable(lazy(() => import("pages/home/gamingCircle")));
const RankingList = Loadable(lazy(() => import("pages/home/rankingList")));
const TaskPage = Loadable(lazy(() => import("pages/home/task")));
const QuizDetail = Loadable(lazy(() => import("pages/quiz/detail")));
const MinePage = Loadable(lazy(() => import("pages/mine")));
const MineSetting = Loadable(lazy(() => import("pages/mine/setting")));
const MineSettingLanguage = Loadable(
  lazy(() => import("pages/mine/setting/language"))
);
const MineSettingAbout = Loadable(
  lazy(() => import("pages/mine/setting/about"))
);
const MineSettingShare = Loadable(
  lazy(() => import("pages/mine/setting/share"))
);
const MineQuiz = Loadable(lazy(() => import("pages/mine/quiz")));
const MineQuizDetail = Loadable(lazy(() => import("pages/mine/quiz/detail")));
const MineFlow = Loadable(lazy(() => import("pages/mine/flow")));
const Manage = Loadable(lazy(() => import("pages/manage")));
const ManageEdit = Loadable(lazy(() => import("pages/manage/edit")));
const ManagePreview = Loadable(lazy(() => import("pages/manage/preview")));
const ManagePreviewSuccess = Loadable(
  lazy(() => import("pages/manage/preview/success"))
);
const Notice = Loadable(lazy(() => import("pages/notice")));
const QuizUser = Loadable(lazy(() => import("pages/quiz/user")));

const Routers = [
  {
    path: "",
    direction: Direction.index,
    element: <Navigate to="/home" />,
  },
  {
    path: "/",
    direction: Direction.index,
    element: <MainLayout />,
    children: [
      {
        path: "mine",
        direction: Direction.mine,
        element: <MinePage />,
      },
      {
        path: "mine/setting",
        direction: Direction.mineSetting,
        element: <MineSetting />,
      },
      {
        path: "mine/setting/language",
        direction: Direction.mineSettingLanguage,
        element: <MineSettingLanguage />,
      },
      {
        path: "mine/setting/share",
        direction: Direction.mineSettingShare,
        element: <MineSettingShare />,
      },
      {
        path: "mine/setting/about",
        direction: Direction.mineSettingAbout,
        element: <MineSettingAbout />,
      },
      {
        path: "mine/quiz",
        direction: Direction.mineQuiz,
        element: <MineQuiz />,
      },
      {
        path: "mine/quiz/:id",
        direction: Direction.mineQuizDetail,
        element: <MineQuizDetail />,
      },
      {
        path: "mine/flow/:coin",
        direction: Direction.mineFlow,
        element: <MineFlow />,
      },
      {
        path: "manage",
        direction: Direction.manage,
        element: <Manage />,
      },
      {
        path: "manage/edit/:id?",
        direction: Direction.manageEdit,
        element: <ManageEdit />,
      },
      {
        path: "manage/preview",
        direction: Direction.managePreview,
        element: <ManagePreview />,
      },
      {
        path: "manage/preview/success",
        direction: Direction.managePreviewSuccess,
        element: <ManagePreviewSuccess />,
      },
      {
        path: "notice",
        direction: Direction.notice,
        element: <Notice />,
      },
      {
        path: "quiz/:id",
        direction: Direction.quiz,
        element: <QuizDetail />,
      },
      {
        path: "quiz/user/:id",
        direction: Direction.quizUser,
        element: <QuizUser />,
      },
    ],
  },
  {
    path: "/home/",
    direction: Direction.index,
    element: <HomeLayout />,
    children: [
      {
        path: "",
        direction: Direction.home,
        element: <HomePage />,
      },
      {
        path: "task",
        direction: Direction.task,
        element: <TaskPage />,
      },
      {
        path: "rankingList",
        direction: Direction.rankingList,
        element: <RankingList />,
      },
      {
        path: "gamingCircle",
        direction: Direction.gamingCircle,
        element: <GamingCircle />,
      },
      {
        path: "community",
        direction: Direction.community,
        element: <CommunityPage />,
      },
    ],
  },

  { path: "*", direction: Direction.unfound, element: <h1>404</h1> },
];

export const Direction2Path = direction2PathCreater(Routers);

export const useDirection = directionUserCreater(Direction2Path);

const router = createBrowserRouter(Routers);

export const FuneverRouter = () => {
  return (
    <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
  );
};

export const useValueByRoute = createUseValueByRoute(Direction2Path);

export const isInThosePages = createIsInThosePages(Direction2Path);
