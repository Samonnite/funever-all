import {
  kycStatusObj,
  userBizStatusObj,
  withdrawBizStatusObj,
  rechargeBizStatusObj,
  enableStatusObj,
  boolStatusObj,
  pamymentStatusObj,
  symbolTypeTextObj,
  kycTypeTextObj,
  menuTextObj,
  directionTextObj,
  walletAccountStatusObj,
  followStatusObj,
  FollowSourceUserModeTypeCellObj,
  FollowSourceUserFollowTypCellObj,
  forbiddenTypeObjStatus,
  appTypeObjStatus,
  userWinSwitchObjCellObj,
  optionDirectionTextObj,
  userWinStatusObj,
  priceTypeTextObj,
  orderTypeTextObj,
  reverseboolStatusObj,
  klineControlStatusTextObj,
  awsStatusObjText,
  appTypeObjText,
  typeListTextObj,
  adminTypeListTextObj,
  blockOkTextObj,
  guessStatusText,
  userGuessQueryTextObj,
  userTransferTextObj,
  userTransferTypeTextObj,
  reversenableStatusObj,
  goldStatusObjTextObj,
} from 'model/common';
import dayjs from 'dayjs';
import { isBoolean, isNaN } from 'lodash';
import { CellClassParams, ValueFormatterParams } from 'ag-grid-enterprise';
import { useDeepCompareEffect } from 'ahooks';
import { useMemo, useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

const CellValueGetters = (map: Record<string, any>) => ({
  cellStyle: (params: CellClassParams) => {
    if (params.value) {
      return { color: map[params?.value].color };
    }
    return null;
  },
  valueFormatter: (params: ValueFormatterParams) => (params?.value ? map[params?.value].text : ''),
});

const CellBooleanValueGetters = (map: Record<string, any>) => ({
  cellStyle: (params: CellClassParams) => {
    const stringValue = isBoolean(params.value) ? `${Number(params.value)}` : `${params.value}`;
    if (stringValue) {
      return { color: map[stringValue].color };
    }
    return null;
  },
  cellDataType: 'text',
  valueFormatter: (params: ValueFormatterParams) => {
    const stringValue = isBoolean(params.value) ? `${Number(params.value)}` : `${params.value}`;
    return stringValue ? map[stringValue].text : '';
  },
});

export const PaymentCellValue = CellValueGetters(pamymentStatusObj);
export const AwsStatusObjCellValue = CellValueGetters(awsStatusObjText);
export const AppTypeObjCellValue = CellValueGetters(appTypeObjText);
export const TypeListTextObjCellValue = CellValueGetters(typeListTextObj);
export const WalletAccountCellValue = CellValueGetters(walletAccountStatusObj);
export const DirectionCellValue = CellValueGetters(directionTextObj);
export const OptionDirectionCellValue = CellValueGetters(optionDirectionTextObj);
export const SymbolTypeCellValue = CellValueGetters(symbolTypeTextObj);
export const PriceTypeCellValue = CellValueGetters(priceTypeTextObj);
export const OrderTypeCellValue = CellValueGetters(orderTypeTextObj);
export const BizStatusCellValue = CellValueGetters(userBizStatusObj);
export const WithdrawBizStatusCellValue = CellValueGetters(withdrawBizStatusObj);
export const RechargeBizStatusCellValue = CellValueGetters(rechargeBizStatusObj);
export const KYCTypeCellValue = CellValueGetters(kycTypeTextObj);
export const MenuTypeCellValue = CellValueGetters(menuTextObj);
export const KYCStatusCellValue = CellValueGetters(kycStatusObj);
export const ForbiddenTypeCellValue = CellValueGetters(forbiddenTypeObjStatus);
export const AppTypeCellValue = CellValueGetters(appTypeObjStatus);
export const UserWinSwitchCellValue = CellValueGetters(userWinSwitchObjCellObj);
export const klineControlStatusCellValue = CellValueGetters(klineControlStatusTextObj);
export const GuessStatusTextCellValue = CellValueGetters(guessStatusText);
export const UserGuessQueryTextObjCellValue = CellValueGetters(userGuessQueryTextObj);
export const UerTransferTextObjCellValue = CellValueGetters(userTransferTextObj);
export const UserTransferTypeTextObjCellValue = CellValueGetters(userTransferTypeTextObj);
export const GoldStatusObjTextObjCellValue = CellValueGetters(goldStatusObjTextObj);

export const FollowStatusCellValue = CellBooleanValueGetters(followStatusObj);
export const BlockOkTextObjCellValue = CellBooleanValueGetters(blockOkTextObj);
export const AdminTypeListTextObjCellValue = CellBooleanValueGetters(adminTypeListTextObj);
export const BooleanCellValue = CellBooleanValueGetters(boolStatusObj);
export const ReverseBooleanCellValue = CellBooleanValueGetters(reverseboolStatusObj);
export const StatusCellValue = CellBooleanValueGetters(enableStatusObj);
export const ReverseStatusCellValue = CellBooleanValueGetters(reversenableStatusObj);
export const FollowSourceUserModeTypeCellValue = CellBooleanValueGetters(
  FollowSourceUserModeTypeCellObj
);
export const FollowSourceUserFollowTypCellValue = CellBooleanValueGetters(
  FollowSourceUserFollowTypCellObj
);
export const UserWinSwitchObjCellValue = CellBooleanValueGetters(userWinSwitchObjCellObj);
export const UserWinStatusObjCellValue = CellBooleanValueGetters(userWinStatusObj);

export const ColorCellRenderer = ({ value }: any) => {
  const ARROW_UP = '\u2191';
  const ARROW_DOWN = '\u2193';
  const [lastValue, setLastValue] = useState(0);
  useDeepCompareEffect(() => () => setLastValue(value), [value]);

  const cellForamt = useMemo(() => {
    const style = {
      up: {
        color: '#46e372',
      },
      down: {
        color: '#ff005c',
      },
    };
    if (!lastValue) {
      return {
        value,
      };
    }
    if (lastValue > value) {
      return {
        style: style.down,
        value: `${ARROW_DOWN} ${value}`,
      };
    }
    if (lastValue < value) {
      return {
        style: style.up,
        value: `${ARROW_UP} ${value}`,
      };
    }
    return {
      value,
    };
  }, [lastValue, value]);

  return (
    <span
      style={{
        borderRadius: '20px',
        padding: '5px 12px',
        ...cellForamt.style,
      }}
    >
      {cellForamt.value}
    </span>
  );
};

export const DateTimeFormatter = (params: ValueFormatterParams) => {
  if (!params.value || isNaN(params.value)) return '';
  return dayjs(Number(params.value)).format('YYYY-MM-DD HH:mm:ss');
};

export const HashLinkRender = ({ value }: { value: string }) => {
  const [preview] = useLocalStorage('preview', {});

  return (
    <a href={`${preview.solscan}/tx/${value}`} target="_blank" rel="noreferrer">
      {`${value?.slice(0, 8)}...${value?.slice(-8)}`}
    </a>
  );
};
