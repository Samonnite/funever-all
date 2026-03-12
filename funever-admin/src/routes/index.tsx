import { Navigate, useRoutes } from 'react-router-dom';
// auth
import AuthGuard from '../auth/AuthGuard';
import GuestGuard from '../auth/GuestGuard';
// layouts
import CompactLayout from '../layouts/compact';
import DashboardLayout from '../layouts/dashboard';
// config
import { PATH_AFTER_LOGIN } from '../config-global';
//
import {
  // Auth
  LoginPage,
  RegisterPage,
  VerifyCodePage,
  NewPasswordPage,
  ResetPasswordPage,
  // UserAccountPage,
  //
  Page500,
  Page403,
  Page404,
  RealUserList,
  SystemConfig,
  GeneralAppPage,
  UserAccountPage,
  SystemAdministrator,
  GameList,
  ContestList,
  TeamList,
  GuessList,
  CoinList,
  SystemPoint,
  BannerList,
} from './elements';
import { PATH_DASHBOARD } from './paths';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Auth
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <RegisterPage />
            </GuestGuard>
          ),
        },
        { path: 'login-unprotected', element: <LoginPage /> },
        { path: 'register-unprotected', element: <RegisterPage /> },
        {
          element: <CompactLayout />,
          children: [
            { path: 'reset-password', element: <ResetPasswordPage /> },
            { path: 'new-password', element: <NewPasswordPage /> },
            { path: 'verify', element: <VerifyCodePage /> },
          ],
        },
      ],
    },

    // Dashboard
    {
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/account" replace />, index: true },
            { path: 'account', element: <UserAccountPage /> },
          ],
        },
        {
          path: PATH_DASHBOARD.general.app,
          element: <GeneralAppPage />,
        },
        // {
        //   path: PATH_DASHBOARD.home.root,
        //   element: <Dashboard />,
        // },
        {
          path: PATH_DASHBOARD.system.root,
          element: <Navigate to={PATH_DASHBOARD.system.systemConfig.root} replace />,
        },
        {
          path: PATH_DASHBOARD.system.systemConfig.root,
          element: <SystemConfig />,
        },
        {
          path: PATH_DASHBOARD.system.administrator.root,
          element: <SystemAdministrator />,
        },
        {
          path: PATH_DASHBOARD.system.point.root,
          element: <SystemPoint />,
        },
        {
          path: PATH_DASHBOARD.system.coin,
          element: <CoinList />,
        },
        {
          path: PATH_DASHBOARD.users.root,
          element: <Navigate to={PATH_DASHBOARD.users.real} replace />,
        },
        {
          path: PATH_DASHBOARD.users.real,
          element: <RealUserList />,
        },
        {
          path: PATH_DASHBOARD.game.root,
          element: <Navigate to={PATH_DASHBOARD.game.manage} replace />,
        },
        {
          path: PATH_DASHBOARD.game.manage,
          element: <GameList />,
        },
        {
          path: PATH_DASHBOARD.game.contest,
          element: <ContestList />,
        },
        {
          path: PATH_DASHBOARD.game.team,
          element: <TeamList />,
        },
        {
          path: PATH_DASHBOARD.guess.manage,
          element: <GuessList />,
        },
        {
          path: PATH_DASHBOARD.banner.root,
          element: <BannerList />,
        },
      ],
    },
    {
      element: <CompactLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
