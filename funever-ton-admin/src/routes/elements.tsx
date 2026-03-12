import { Suspense, lazy } from 'react';
// components
import { ErrorBoundary } from 'react-error-boundary';
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------
function fallbackRender({ error, refreshCount }: { error: Error; refreshCount: number }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  if (
    ['Failed to fetch dynamically imported module', 'Unable to preload'].find((msg) =>
      error.message.includes(msg)
    ) &&
    refreshCount === 0
  ) {
    return <div className="w-full h-full" />;
  }
  return <LoadingScreen />;
}
const Loadable = (Component: React.ElementType) => (props: Record<string, unknown>) => {
  const refreshCount = Number(sessionStorage.getItem('refreshCount')) || 0;
  return (
    <Suspense>
      <ErrorBoundary
        FallbackComponent={({ error }) => fallbackRender({ error, refreshCount })}
        onError={(error) => {
          if (
            ['Failed to fetch dynamically imported module', 'Unable to preload'].find((msg) =>
              error.message.includes(msg)
            ) &&
            refreshCount === 0
          ) {
            setTimeout(() => {
              sessionStorage.setItem('refreshCount', '1');
              window.location.reload();
            }, 500);
          }
        }}
      >
        <Component {...props} />
      </ErrorBoundary>
    </Suspense>
  );
};

// ----------------------------------------------------------------------

// AUTH
export const LoginPage = Loadable(lazy(() => import('../pages/auth/LoginPage')));
export const RegisterPage = Loadable(lazy(() => import('../pages/auth/RegisterPage')));
export const VerifyCodePage = Loadable(lazy(() => import('../pages/auth/VerifyCodePage')));
export const NewPasswordPage = Loadable(lazy(() => import('../pages/auth/NewPasswordPage')));
export const ResetPasswordPage = Loadable(lazy(() => import('../pages/auth/ResetPasswordPage')));

// DASHBOARD: GENERAL
export const GeneralAppPage = Loadable(lazy(() => import('../pages/dashboard/GeneralAppPage')));
export const GeneralEcommercePage = Loadable(
  lazy(() => import('../pages/dashboard/GeneralEcommercePage'))
);
export const GeneralAnalyticsPage = Loadable(
  lazy(() => import('../pages/dashboard/GeneralAnalyticsPage'))
);
export const GeneralBankingPage = Loadable(
  lazy(() => import('../pages/dashboard/GeneralBankingPage'))
);
export const GeneralBookingPage = Loadable(
  lazy(() => import('../pages/dashboard/GeneralBookingPage'))
);
export const GeneralFilePage = Loadable(lazy(() => import('../pages/dashboard/GeneralFilePage')));

// DASHBOARD: ECOMMERCE
export const EcommerceShopPage = Loadable(
  lazy(() => import('../pages/dashboard/EcommerceShopPage'))
);
export const EcommerceProductDetailsPage = Loadable(
  lazy(() => import('../pages/dashboard/EcommerceProductDetailsPage'))
);
export const EcommerceProductListPage = Loadable(
  lazy(() => import('../pages/dashboard/EcommerceProductListPage'))
);
export const EcommerceProductCreatePage = Loadable(
  lazy(() => import('../pages/dashboard/EcommerceProductCreatePage'))
);
export const EcommerceProductEditPage = Loadable(
  lazy(() => import('../pages/dashboard/EcommerceProductEditPage'))
);
export const EcommerceCheckoutPage = Loadable(
  lazy(() => import('../pages/dashboard/EcommerceCheckoutPage'))
);

// DASHBOARD: INVOICE
export const InvoiceListPage = Loadable(lazy(() => import('../pages/dashboard/InvoiceListPage')));
export const InvoiceDetailsPage = Loadable(
  lazy(() => import('../pages/dashboard/InvoiceDetailsPage'))
);
export const InvoiceCreatePage = Loadable(
  lazy(() => import('../pages/dashboard/InvoiceCreatePage'))
);
export const InvoiceEditPage = Loadable(lazy(() => import('../pages/dashboard/InvoiceEditPage')));

// DASHBOARD: USER
export const UserProfilePage = Loadable(lazy(() => import('../pages/dashboard/UserProfilePage')));
export const UserCardsPage = Loadable(lazy(() => import('../pages/dashboard/UserCardsPage')));
export const UserListPage = Loadable(lazy(() => import('../pages/dashboard/UserListPage')));
export const UserAccountPage = Loadable(lazy(() => import('../pages/dashboard/UserAccountPage')));
export const UserCreatePage = Loadable(lazy(() => import('../pages/dashboard/UserCreatePage')));
export const UserEditPage = Loadable(lazy(() => import('../pages/dashboard/UserEditPage')));

// DASHBOARD: BLOG
export const BlogPostsPage = Loadable(lazy(() => import('../pages/dashboard/BlogPostsPage')));
export const BlogPostPage = Loadable(lazy(() => import('../pages/dashboard/BlogPostPage')));
export const BlogNewPostPage = Loadable(lazy(() => import('../pages/dashboard/BlogNewPostPage')));

// DASHBOARD: FILE MANAGER
export const FileManagerPage = Loadable(lazy(() => import('../pages/dashboard/FileManagerPage')));

// DASHBOARD: APP
export const ChatPage = Loadable(lazy(() => import('../pages/dashboard/ChatPage')));
export const MailPage = Loadable(lazy(() => import('../pages/dashboard/MailPage')));
export const CalendarPage = Loadable(lazy(() => import('../pages/dashboard/CalendarPage')));
export const KanbanPage = Loadable(lazy(() => import('../pages/dashboard/KanbanPage')));

// TEST RENDER PAGE BY ROLE
export const PermissionDeniedPage = Loadable(
  lazy(() => import('../pages/dashboard/PermissionDeniedPage'))
);

// BLANK PAGE
export const BlankPage = Loadable(lazy(() => import('../pages/dashboard/BlankPage')));

// MAIN
export const Page500 = Loadable(lazy(() => import('../pages/Page500')));
export const Page403 = Loadable(lazy(() => import('../pages/Page403')));
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));

// admin
// 系统管理
export const SystemConfig = Loadable(lazy(() => import('pages/system/system-config/index')));
export const SystemAdministrator = Loadable(lazy(() => import('pages/system/administrator')));
export const SystemPoint = Loadable(lazy(() => import('pages/system/point')));
export const SystemSign = Loadable(lazy(() => import('pages/system/sign')));
export const SystemTask = Loadable(lazy(() => import('pages/system/task')));
// 币种管理
export const CoinList = Loadable(lazy(() => import('pages/coin/index')));

// 用户管理
export const RealUserList = Loadable(lazy(() => import('pages/users/real')));

// 游戏管理
export const GameList = Loadable(lazy(() => import('pages/game')));
export const ContestList = Loadable(lazy(() => import('pages/contest')));
export const TeamList = Loadable(lazy(() => import('pages/team')));
// 竞猜管理
export const GuessList = Loadable(lazy(() => import('pages/guess')));
// banner管理
export const BannerList = Loadable(lazy(() => import('pages/banner')));
// 资产管理
export const GoldAssetList = Loadable(lazy(() => import('pages/assets/gold')));
export const WalletRecordList = Loadable(lazy(() => import('pages/assets/wallet-record')));
export const WalletList = Loadable(lazy(() => import('pages/assets/wallet')));
