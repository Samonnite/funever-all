const fs = require('fs');
const path = require('path');

// 定义要生成文件的数据
const data = {
	title: '待办事项管理',
	path: '/task-management',
	children: [
		{
			title: '充值审核',
			path: '/task-management/recharge-review',
		},
		{
			title: '实名认证审核',
			path: '/task-management/real-name-authentication',
		},
		{
			title: '用户跟单信号源审核',
			path: '/task-management/user-copy-source-review ',
		},
		{
			title: '托管跟单审核',
			path: '/task-management/managed-copy-review ',
		},
		{
			title: '提现审核',
			path: '/task-management/payout-review',
		},
	],
};

function generatePage(data, parentPath = '') {
	const pagePath = data.path;
	const pageName = pagePath.split('/').slice(-1)[0];
	const componentName = pageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');



	// const myComponentPath = path.join(__dirname, '../src/components/example.tsx');
	// const myComponentContent = fs.readFileSync(myComponentPath, 'utf8');

	// const props = {
	// 	title: data.title,
	// };

	// const fileContent = myComponentContent.replace(/\${(.+?)}/g, (_, propName) => props[propName]);
	const fileContent =
		`import AgTable from '@/components/table';
import React from 'react';
import { AssetModel } from 'pages/asset-management/model';
import Title from '@/components/Title';
import { Card } from '@mui/material';
import QueryForm from 'pages/asset-management/components/query-form';
import { useColumn } from './column';

const ${componentName} = () => {
	const { assetList } = AssetModel.useAssetList();
	const {column} = useColumn();
	return (
		<div>
			<Title title="${data.title}" />
			<Card  sx={{ px: 2 }}>
				<QueryForm />
				<AgTable columnDefs={column} rowData={assetList}></AgTable>
			</Card>
		</div>
	);
};

export default ${componentName};
`
	const fileColumn =
		`import { Button } from '@/components/@wonder/button';
		import { AssetModel } from '../model';

		export const useColumn = () => {
			const { closePosition } = AssetModel.useClosePosition();
			const column = [
				{
					headerName: '用户ID',
					field: 'uid',

					headerCheckboxSelection: true,
					checkboxSelection: true,
					width: 300,
				},
				{
					headerName: '手机号',
					field: 'phone',
				},
				{
					headerName: '邮箱',
					field: 'email',
				},
				{
					headerName: '姓名',
					field: 'name',
				},
				{
					headerName: '持仓类别',
					field: 'symbolType',
				},
				{
					headerName: '平仓均价',
					field: 'closePrice',
				},
				{
					headerName: '平仓收益(静态)',
					field: 'closeProfit',
				},
				{
					headerName: '平仓收益率(静态)',
					field: 'closeProfitRate',
				},
				{
					headerName: '已平仓量',
					field: 'closeQty',
				},
				{
					headerName: '完全平仓时间',
					field: 'closeTime',
				},
				{
					headerName: '基本货币',
					field: 'coinBase',
				},
				{
					headerName: '报价货币',
					field: 'coinPrice',
				},
				{
					headerName: '利润货币',
					field: 'coinSettle',
				},
				{
					headerName: '开仓时间',
					field: 'createTime',
				},
				{
					headerName: '持仓方向',
					field: 'direction',
				},
				{
					headerName: '持仓方向国际化',
					field: 'directionText',
				},
				{
					headerName: '跟随仓位Id',
					field: 'fid',
				},
				{
					headerName: '是否跟单',
					field: 'following',
				},
				{
					headerName: '持仓数量',
					field: 'holdQty',
				},
				{
					headerName: '杠杆大小',
					field: 'leverage',
				},
				{
					headerName: '预估强平价',
					field: 'lipPrice',
				},
				{
					headerName: '保证金',
					field: 'margin',
				},
				{
					headerName: '开仓均价',
					field: 'openPrice',
				},
				{
					headerName: '仓位Id',
					field: 'pid',
				},
				{
					headerName: '持仓收益(动态)',
					field: 'profit',
				},
				{
					headerName: '持仓收益率(动态)',
					field: 'profitRate',
				},
				{
					headerName: '仓位状态',
					field: 'status',
				},
				{
					headerName: '仓位状态国际化',
					field: 'statusText',
				},
				{
					headerName: '交易对',
					field: 'symbol',
				},
				{
					headerName: '交易对类型国际化',
					field: 'symbolType',
				},
				{
					headerName: '操作',
					cellRenderer: () => {
						return <Button variant="contained">平仓</Button>;
					},
					cellRendererParams: {
						clicked: function (field) {
							closePosition({
								data: {
									pidList: [field.data.pid],
								},
							});
						},
					},
				},
			];
			return {
				column,
			};
		};
`
	// const fileContent = `import React from 'react';


	//   const ${componentName} = () => {
	// 	return (
	// 	  <div>
	// 		<h1>${data.title}</h1>
	// 	  </div>
	// 	);
	//   };

	//   export default ${componentName};
	//   `;

	// 创建目录和文件
	const fullPath = path.join('src/pages', parentPath, pageName);
	fs.mkdirSync(fullPath, { recursive: true });
	fs.writeFileSync(`${fullPath}/index.tsx`, fileContent);
	fs.writeFileSync(`${fullPath}/column.tsx`, fileColumn);
	// fs.unlink(`${fullPath}/column.ts`)
	// 输出日志
	console.log(`已成功生成文件 ${fullPath}/index.tsx`);
	// 递归生成所有子页面
	if (data.children && data.children.length > 0) {
		for (const child of data.children) {
			generatePage(child, pagePath);
		}
	}
}





// 调用函数生成文件夹和文件
generatePage(data);