// import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
// import useSound from 'use-sound';

// // import Notify from 'assets/audio/notify.mp3';
// import Deposit from 'assets/audio/deposit.mp3';
// import Follow from 'assets/audio/follow.mp3';
// import Kyc from 'assets/audio/kyc.mp3';
// import Trust from 'assets/audio/trust.mp3';
// import Withdraw from 'assets/audio/withdraw.mp3';
// import { useSnackbar } from 'notistack';
// import { TodoVO } from 'api/model';
// import { keys, pickBy } from 'lodash';

// const fieldToTextMapping: { [key in keyof TodoVO]: any } = {
//   deposit: {
//     text: '您有新的充值审核！',
//     source: Deposit,
//   },
//   follow: {
//     text: '您有新的用户跟单信号源审核！',
//     source: Follow,
//   },
//   kyc: {
//     text: '您有新的实名认证审核！',
//     source: Kyc,
//   },
//   trust: {
//     text: '您有新的托管跟单审核！',
//     source: Trust,
//   },
//   withdraw: {
//     text: '您有新的提现审核！',
//     source: Withdraw,
//   },
// };

// export const useSoundNotify = (backlog?: TodoVO) => {
//   const playCount = useRef(0);
//   const fieldKey = useRef<keyof TodoVO>('total');
//   const [trigger, setTrigger] = useState(false);
//   const [defaultBacklog, setDefaultBacklog] = useState(backlog);

//   const onend = () => {
//     if (playCount.current < 3) {
//       playCount.current += 1;
//       setTrigger((prev) => !prev);
//     } else {
//       playCount.current = 0;
//     }
//   };
//   const [playdeposit] = useSound(Deposit, {
//     onend,
//   });
//   const [playfollow] = useSound(Follow, {
//     onend,
//   });
//   const [playkyc] = useSound(Kyc, {
//     onend,
//   });
//   const [playtrust] = useSound(Trust, {
//     onend,
//   });
//   const [playwithdraw] = useSound(Withdraw, {
//     onend,
//   });
//   const soundFunctions: { [key: string]: () => void } = useMemo(
//     () => ({
//       playdeposit,
//       playfollow,
//       playkyc,
//       playtrust,
//       playwithdraw,
//     }),
//     [playdeposit, playfollow, playkyc, playtrust, playwithdraw]
//   );
//   useEffect(() => {
//     if (backlog) {
//       setDefaultBacklog(backlog);
//     }
//   }, [backlog]);

//   const getIncreasedFields = (newObj: TodoVO, oldObj: TodoVO) => {
//     // Filter out the fields that have increased in the newObj compared to the oldObj
//     const increasedFieldsObj = pickBy(
//       newObj,
//       (value, key) => key !== 'total' && Number(value) > (Number(oldObj[key as keyof TodoVO]) || 0)
//     );

//     // Return the keys of the increased fields
//     return keys(increasedFieldsObj);
//   };

//   const play = useCallback(() => {
//     const funcName = `play${fieldKey.current}`;
//     if (typeof soundFunctions[funcName] === 'function') {
//       soundFunctions[funcName]();
//     }
//   }, [soundFunctions]);

//   useEffect(() => {
//     if (playCount.current < 3 && playCount.current > 0) {
//       play();
//     }
//   }, [trigger, play]);

//   useEffect(
//     () => () => {
//       document.title =
//         playCount.current > 0 ? fieldToTextMapping[fieldKey.current].text : '交易管理后台';
//     },
//     [trigger]
//   );

//   const { enqueueSnackbar } = useSnackbar();

//   const addNotify = (message: TodoVO) => {
//     const increasedFields = getIncreasedFields(message, defaultBacklog || {});

//     if (increasedFields.length) {
//       fieldKey.current = increasedFields[0] as keyof TodoVO;
//       playCount.current = 0;
//       play();

//       const notificationMessage = fieldToTextMapping[fieldKey.current].text;
//       document.title = notificationMessage;
//       enqueueSnackbar(notificationMessage, {
//         autoHideDuration: 1000 * 10,
//       });
//     }
//     setDefaultBacklog(message);
//   };

//   return {
//     addNotify,
//   };
// };
export {};
