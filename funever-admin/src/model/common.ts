export const defaultPaga = {
  pageNum: 1,
  pageSize: 100,
};

export const statusListOptions = [
  {
    label: '禁用',
    value: '0',
  },
  {
    label: '可用',
    value: '1',
  },
];

export const reverseStatusListOptions = [
  {
    label: '未删除',
    value: '0',
  },
  {
    label: '已删除',
    value: '1',
  },
];

export const guessStatusOptions = [
  {
    label: '押注中',
    value: 'betting',
  },
  {
    label: '进行中',
    value: 'process',
  },
  {
    label: '结算中',
    value: 'settlement',
  },
  {
    label: '已完成',
    value: 'completed',
  },
];

export const guessStatusText: Record<string, any> = {
  betting: {
    text: '押注中',
    color: '#FF5630',
  },
  process: {
    text: '进行中',
    color: '#00AB55',
  },
  settlement: {
    text: '结算中',
    color: '#00B8D9',
  },
  completed: {
    text: '已完成',
    color: '#3366FF',
  },
};

export const userGuessQueryText = {
  wait: '未结算',
  win: '盈利',
  loss: '亏损',
  draw: '平局',
};

export const userGuessQueryTextObj: Record<string, any> = {
  wait: {
    text: '未结算',
    color: '#FF5630',
  },
  win: {
    text: '盈利',
    color: '#46e372',
  },
  loss: {
    text: '亏损',
    color: '#ff005c',
  },
  draw: {
    text: '平局',
    color: '#FFAB00',
  },
};

export const userTransferTextObj: Record<string, any> = {
  wait: {
    text: '待确认',
    color: '#FF5630',
  },
  scuess: {
    text: '转账成功',
    color: '#46e372',
  },
  fail: {
    text: '转账失败',
    color: '#ff005c',
  },
};

export const userTransferTypeTextObj: Record<string, any> = {
  '1': {
    text: '下注',
    color: '#3366FF',
  },
  '2': {
    text: '盈利',
    color: '#46e372',
  },
};

export const blockOkOptions = [
  {
    label: '正常',
    value: '1',
  },
  {
    label: '异常',
    value: '0',
  },
];

export const blockOkTextObj: Record<string, any> = {
  '1': {
    text: '正常',
    color: '#46e372',
  },
  '0': {
    text: '异常',
    color: '#ff005c',
  },
};

export const boolStatusOptions = [
  {
    label: '否',
    value: '0',
  },
  {
    label: '是',
    value: '1',
  },
];

export const adminList = [
  {
    label: '超级管理员',
    value: '1',
  },
  {
    label: '普通管理员',
    value: '0',
  },
];

export const typeList = [
  {
    label: '普通用户',
    value: 'normal',
  },
  {
    label: '管理员',
    value: 'admin',
  },
];

export const adminTypeListTextObj: Record<string, any> = {
  '0': {
    text: '普通管理员',
    color: '#46e372',
  },
  '1': {
    text: '超级管理员',
    color: '#ff005c',
  },
};

export const typeListTextObj: Record<string, any> = {
  normal: {
    text: '普通用户',
    color: '#46e372',
  },
  admin: {
    text: '管理员',
    color: '#ff005c',
  },
};

export const userTypeObj = {
  '1': '真实用户',
  '2': '模拟用户',
};

export const pamymentObj = {
  bankcard: '银行卡',
  alipay: '支付宝',
  weipay: '微信支付',
  digiccy: '数字货币',
};

export const awsStatusObj = {
  '0': '申请',
  '1': '上传成功',
  '2': '上传失败',
};

export const appTypeObj = {
  '0': '后台',
  '1': 'iOS',
  '2': 'Android',
  '3': 'H5',
};

export const awsStatusObjText: Record<string, any> = {
  '0': {
    text: '申请',
    color: '#FF5630',
  },
  '1': {
    text: '上传成功',
    color: '#46e372',
  },
  '2': {
    text: '上传失败',
    color: '#ff005c',
  },
};

export const appTypeObjText: Record<string, any> = {
  '0': {
    text: '后台',
    color: '#FF5630',
  },
  '1': {
    text: 'iOS',
    color: '#00B8D9',
  },
  '2': {
    text: 'Android',
    color: '#00AB55',
  },
  '3': {
    text: 'H5',
    color: '#3366FF',
  },
};

export const pamymentStatusObj: Record<string, any> = {
  bankcard: {
    text: '银行卡',
    color: '#FF5630',
  },
  alipay: {
    text: '支付宝',
    color: '#00B8D9',
  },
  weipay: {
    text: '微信支付',
    color: '#00AB55',
  },
  digiccy: {
    text: '数字货币',
    color: '#3366FF',
  },
};

export const walletAccountObj = {
  capital: '资金账户',
  option: '期权账户',
  forex: '外汇账户',
  digiccy: '合约账户',
  spot: '币币账户',
};

export const walletAccountStatusObj: Record<string, any> = {
  capital: {
    text: '资金账户',
    color: '#00AB55',
  },
  option: {
    text: '期权账户',
    color: '#FF5630',
  },
  forex: {
    text: '外汇账户',
    color: '#00B8D9',
  },
  swap: {
    text: '合约账户',
    color: '#3366FF',
  },
  spot: {
    text: '币币账户',
    color: '#ff005c',
  },
};

export const symbolTypeObj = {
  forex: '外汇',
  swap: '数字货币',
};

export const directionObj = {
  plong: '买入开多',
  pshort: '卖出开空',
};

export const directionTextObj: Record<string, any> = {
  plong: {
    text: '买入开多',
    color: '#46e372',
  },
  pshort: {
    text: '卖出开空',
    color: '#ff005c',
  },
};
export const orderTypeObj = {
  buy: '买入',
  sell: '卖出',
};

export const orderTypeTextObj: Record<string, any> = {
  buy: {
    text: '买入',
    color: '#46e372',
  },
  sell: {
    text: '卖出',
    color: '#ff005c',
  },
};
export const optionDirectionTextObj: Record<string, any> = {
  up: {
    text: '看涨',
    color: '#46e372',
  },
  down: {
    text: '看跌',
    color: '#ff005c',
  },
};

export const followStatusObj: Record<string, any> = {
  '1': {
    text: '跟单中',
    color: '#46e372',
  },
  '0': {
    text: '已暂停',
    color: '#ff005c',
  },
};

export const kycTypeObj = {
  idcard: '身份证',
  passport: '护照',
};

export const kycTypeTextObj: Record<string, any> = {
  idcard: {
    text: '身份证',
    color: '#00B8D9',
  },
  passport: {
    text: '护照',
    color: '#00AB55',
  },
};

export const menuTextObj: Record<string, any> = {
  '1': {
    text: '菜单',
    color: '#00AB55',
  },
  '2': {
    text: '按钮',
    color: '#00B8D9',
  },
};

export const userStatusOptions = [
  {
    label: '真实',
    value: 1,
  },
  {
    label: '模拟',
    value: 2,
  },
];

export const kycStatusObj: Record<string, any> = {
  '0': {
    text: '未认证',
    color: '#FF5630',
  },
  '1': {
    text: '认证中',
    color: '#FFAB00',
  },
  '2': {
    text: '认证通过',
    color: '#46e372',
  },
  '3': {
    text: '认证失败',
    color: '#ff005c',
  },
};

export const userBizStatusObj: Record<string, any> = {
  '1': {
    text: '正常',
    color: '#46e372',
  },
  '2': {
    text: '禁止交易',
    color: '#FFAB00',
  },
  '3': {
    text: '禁止登陆',
    color: '#ff005c',
  },
};

export const withdrawBizStatusObj: Record<string, any> = {
  '0': {
    text: '待审核',
    color: '#FF5630',
  },
  '1': {
    text: '待付款',
    color: '#FFAB00',
  },
  '2': {
    text: '已付款',
    color: '#46e372',
  },
  '3': {
    text: '已驳回',
    color: '#ff005c',
  },
};

export const enableStatusObj: Record<string, any> = {
  '0': {
    text: '已禁用',
    color: '#ff005c',
  },
  '1': {
    text: '已启用',
    color: '#46e372',
  },
};

export const reversenableStatusObj: Record<string, any> = {
  '1': {
    text: '已删除',
    color: '#ff005c',
  },
  '0': {
    text: '未删除',
    color: '#46e372',
  },
};

export const boolStatusObj: Record<string, any> = {
  '0': {
    text: '否',
    color: '#ff005c',
  },
  '1': {
    text: '是',
    color: '#46e372',
  },
};

export const klineControlStatusText: Record<string, any> = {
  waiting: '未开始',
  runing: '运行中',
  canceled: '已取消',
  completed: '已完成',
};

export const klineControlStatusTextObj: Record<string, any> = {
  waiting: {
    text: '未开始',
    color: '#FF5630',
  },
  runing: {
    text: '运行中',
    color: '#46e372',
  },
  canceled: {
    text: '已取消',
    color: '#ff005c',
  },
  completed: {
    text: '已完成',
    color: '#3366FF',
  },
};

export const reverseboolStatusObj: Record<string, any> = {
  '1': {
    text: '否',
    color: '#ff005c',
  },
  '0': {
    text: '是',
    color: '#46e372',
  },
};

export const priceTypeObj: Record<string, any> = {
  market: '市价',
  limit: '限价',
};
export const priceTypeTextObj: Record<string, any> = {
  market: {
    text: '市价',
    color: '#ff005c',
  },
  limit: {
    text: '限价',
    color: '#46e372',
  },
};

export const rechargeBizStatusOptions: Record<string, any> = {
  '0': '待审核',
  '1': '已到账',
  '2': '已驳回',
};

export const rechargeBizStatusObj: Record<string, any> = {
  '0': {
    text: '待审核',
    color: '#FFAB00',
  },
  '1': {
    text: '已到账',
    color: '#46e372',
  },
  '2': {
    text: '已驳回',
    color: '#ff005c',
  },
};

export const symbolTypeTextObj: Record<string, any> = {
  swap: {
    text: '数字货币',
    color: '#3366FF',
  },
  forex: {
    text: '外汇',
    color: '#00B8D9',
  },
  spot: {
    text: '币币',
    color: '#00B8D9',
  },
};

export const FollowSourceUserModeTypeObj: Record<string, string> = {
  fixed: '固定手数',
  scale: '开仓比例',
  fund: '账户资金比例',
  ratio: '固定开仓系数',
} as const;

export const FollowSourceUserModeTypeCellObj: Record<string, any> = {
  fixed: {
    text: '固定手数',
    color: '#FF5630',
  },
  scale: {
    text: '开仓比例',
    color: '#FFAB00',
  },
  fund: {
    text: '账户资金比例',
    color: '#46e372',
  },
  ratio: {
    text: '固定开仓系数',
    color: '#ff005c',
  },
};

export const FollowSourceUserFollowTypeObj: Record<string, string> = {
  positive: '正向跟单',
  reverse: '反向跟单',
  profit: '只跟盈利',
  lost: '只跟亏损',
} as const;

export const FollowSourceUserFollowTypCellObj: Record<string, any> = {
  positive: {
    text: '正向跟单',
    color: '#FF5630',
  },
  reverse: {
    text: '反向跟单',
    color: '#FFAB00',
  },
  profit: {
    text: '只跟盈利',
    color: '#46e372',
  },
  lost: {
    text: '只跟亏损',
    color: '#ff005c',
  },
};

export type Nullable<T> = {
  [P in keyof T]: T[P] | null | string;
};

export const forbiddenTypeObj = {
  '1': '接口访问',
  '2': '发送验证码',
};

export const forbiddenTypeObjStatus: Record<string, any> = {
  '1': {
    text: '接口访问',
    color: '#00B8D9',
  },
  '2': {
    text: '发送验证码',
    color: '#00AB55',
  },
};

export const appTypeObjStatus: Record<string, any> = {
  '1': {
    text: 'Android',
    color: '#00B8D9',
  },
  '2': {
    text: 'iOS',
    color: '#00AB55',
  },
};

export const winSwitchQueryObj: Record<string, any> = {
  1: '盈利',
  2: '亏损',
};

export const winSwitchObj: Record<string, any> = {
  0: '关闭',
  1: '盈利',
  2: '亏损',
};

export const userWinSwitchObj: Record<string, any> = {
  0: '关闭',
  1: '盈利',
  2: '亏损',
  3: '跟随全局',
};

export const userWinSwitchObjCellObj: Record<string, any> = {
  0: {
    text: '关闭',
    color: '#FF5630',
  },
  1: {
    text: '盈利',
    color: '#46e372',
  },
  2: {
    text: '亏损',
    color: '#ff005c',
  },
  3: {
    text: '跟随全局',
    color: '#FFAB00',
  },
};

export const userWinStatusObj: Record<string, any> = {
  0: {
    text: '未结算',
    color: '#FF5630',
  },
  1: {
    text: '盈利',
    color: '#46e372',
  },
  2: {
    text: '亏损',
    color: '#ff005c',
  },
};

export const pointTypeText: Record<string, string> = {
  register: '注册',
  login: '今日登录',
  post: '今日发帖',
  invite: '邀请好友',
  stake: '参与竞猜',
};
