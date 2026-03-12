// import { useEffect, useRef, useState } from 'react';
// // @mui
// import {
//   Box,
//   List,
//   Badge,
//   Avatar,
//   Divider,
//   Typography,
//   ListItemText,
//   ListItemAvatar,
//   ListItemButton,
// } from '@mui/material';
// // utils
// import { useBacklog } from 'pages/home/model';
// // _mock_
// import { TodoVO } from 'api/model';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useSocketMessage } from 'hooks/useSocketMessage';
// import { useDeepCompareEffect, useInterval } from 'ahooks';
// import { useSoundNotify } from 'hooks/useSoundNotify';
// import { PATH_DASHBOARD } from 'routes/paths';
// import { DepositModel, WithdrawModel } from 'pages/asset/model';
// import { RealNameReviewModel } from 'pages/task/model';
// import { ManagedCopyReviewModel } from 'pages/task/model/managed-copy-review';
// import { defaultPaga } from 'model/common';
// import { _notifications } from '../../../_mock/arrays';
// // components
// import Iconify from '../../../components/iconify';
// import Scrollbar from '../../../components/scrollbar';
// import MenuPopover from '../../../components/menu-popover';
// import { IconButtonAnimate } from '../../../components/animate';

// // ----------------------------------------------------------------------

// export default function NotificationsPopover() {
//   const location = useLocation();
//   const { pathname } = location;
//   const { refetch: refetchRecharge } = DepositModel.useDepositHistoryList();
//   const { refetch: refetchWithdraw } = WithdrawModel.useWithdrawHistoryList();
//   const { refetch: refetchKyc } = RealNameReviewModel.useKycList();
//   const { refetch: refetchManagedCopy } = ManagedCopyReviewModel.useReviewList();
//   const pathQueryMap = {
//     [PATH_DASHBOARD.task.recharge]: refetchRecharge,
//     [PATH_DASHBOARD.task.without]: refetchWithdraw,
//     [PATH_DASHBOARD.task.realName]: refetchKyc,
//     [PATH_DASHBOARD.task.follow]: refetchManagedCopy,
//   };
//   const currentQuery = pathQueryMap[pathname as keyof typeof pathQueryMap];
//   const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);
//   const { lastMessage, sendJsonMessage, getWebSocket } = useSocketMessage({
//     ch: 'notice',
//     event: 'todo',
//   });
//   const pingRequest = { ch: 'ping' };
//   const [notifications] = useState(_notifications);

//   const { backlog } = useBacklog();
//   const { addNotify } = useSoundNotify(backlog);
//   const unread = useRef<TodoVO>({
//     deposit: 0,
//     follow: 0,
//     kyc: 0,
//     total: 0,
//     trust: 0,
//     withdraw: 0,
//   });

//   const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
//     setOpenPopover(event.currentTarget);
//   };

//   const handleClosePopover = () => {
//     setOpenPopover(null);
//   };

//   useEffect(() => {
//     if (backlog) {
//       unread.current = backlog;
//     }
//   }, [backlog]);

//   useDeepCompareEffect(() => {
//     if (lastMessage.length) {
//       unread.current = lastMessage[0];
//       if (currentQuery) {
//         currentQuery({ ...defaultPaga });
//       }
//       addNotify(unread.current);
//     }
//   }, [lastMessage[0]]);

//   const sendHeartbeat = () => {
//     if (getWebSocket?.()?.readyState === WebSocket.OPEN) {
//       sendJsonMessage(pingRequest);
//     }
//   };

//   // 定时发送心跳请求
//   useInterval(sendHeartbeat, 1000 * 10);

//   return (
//     <>
//       <IconButtonAnimate
//         color={openPopover ? 'primary' : 'default'}
//         onClick={handleOpenPopover}
//         sx={{ width: 40, height: 40 }}
//       >
//         <Badge badgeContent={Number(unread.current.total)} color="error">
//           <Iconify icon="eva:bell-fill" />
//         </Badge>
//       </IconButtonAnimate>

//       <MenuPopover open={openPopover} onClose={handleClosePopover} sx={{ width: 360, p: 0 }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
//           <Box sx={{ flexGrow: 1 }}>
//             <Typography variant="subtitle1">通知</Typography>

//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//               你有 {unread.current.total} 条待办事项
//             </Typography>
//           </Box>
//         </Box>
//         <Divider sx={{ borderStyle: 'dashed' }} />
//         <Scrollbar sx={{ height: { xs: 340, sm: 'auto' } }}>
//           <List disablePadding>
//             {notifications.map((notification) => (
//               <NotificationItem
//                 key={notification.id}
//                 notification={notification}
//                 unread={unread.current}
//                 onClose={handleClosePopover}
//               />
//             ))}
//           </List>
//         </Scrollbar>
//       </MenuPopover>
//     </>
//   );
// }

// // ----------------------------------------------------------------------

// type NotificationItemProps = {
//   id: keyof TodoVO;
//   title: string;
//   avatar: string | null;
//   type: string;
//   path: string;
// };

// function NotificationItem({
//   notification,
//   unread,
//   onClose,
// }: {
//   notification: NotificationItemProps;
//   unread: TodoVO;
//   onClose: () => void;
// }) {
//   const { avatar, title } = renderContent(notification, unread);
//   const navigate = useNavigate();

//   return (
//     <ListItemButton
//       sx={{
//         py: 1.5,
//         px: 2.5,
//         mt: '1px',
//       }}
//       onClick={() => {
//         navigate(notification.path);
//         onClose();
//       }}
//     >
//       <ListItemAvatar>
//         <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
//       </ListItemAvatar>
//       <ListItemText disableTypography primary={title} />
//     </ListItemButton>
//   );
// }

// // ----------------------------------------------------------------------

// function renderContent(notification: NotificationItemProps, unread: TodoVO) {
//   const title = (
//     <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//       <Typography variant="subtitle2">{notification.title}</Typography>
//       <Typography component="span" variant="body2" sx={{ color: 'text.error' }}>
//         <Badge badgeContent={unread?.[notification.id] || 0} color="error" />
//       </Typography>
//     </Box>
//   );

//   if (notification.type === 'order_placed') {
//     return {
//       avatar: <img alt={notification.title} src="/assets/icons/notification/ic_package.svg" />,
//       title,
//     };
//   }
//   if (notification.type === 'friend_interactive') {
//     return {
//       avatar: <img alt={notification.title} src="/assets/icons/faqs/ic_payment.svg" />,
//       title,
//     };
//   }
//   if (notification.type === 'order_shipped') {
//     return {
//       avatar: <img alt={notification.title} src="/assets/icons/notification/ic_shipping.svg" />,
//       title,
//     };
//   }
//   if (notification.type === 'mail') {
//     return {
//       avatar: <img alt={notification.title} src="/assets/icons/notification/ic_mail.svg" />,
//       title,
//     };
//   }
//   if (notification.type === 'chat_message') {
//     return {
//       avatar: <img alt={notification.title} src="/assets/icons/notification/ic_chat.svg" />,
//       title,
//     };
//   }
//   return {
//     avatar: notification.avatar ? <img alt={notification.title} src={notification.avatar} /> : null,
//     title,
//   };
// }
export {};
