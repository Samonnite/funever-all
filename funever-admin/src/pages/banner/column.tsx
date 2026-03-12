import { LoadingButton } from '@mui/lab';
import { DataBanner } from 'api/model';
import {  StatusCellValue } from 'components/cellRender';
import LightboxImg from 'components/lightbox/lighibox-img';

export const useColumn = ({
  openDialog,
  openDeleteDialog,
}: {
  openDialog: (row: DataBanner) => void;
  openDeleteDialog: (row: DataBanner) => void;
}) => {
  const column = [
    {
      headerName: '排序',
      field: 'sorted',
    },
    {
      headerName: 'banner名称',
      field: 'title',
    },
    {
      headerName: '内容',
      field: 'content',
    },
    {
      headerName: '跳转地址',
      field: 'jumpUrl',
    },
    {
      headerName: '图片',
      field: 'imgUrl',
      cellRenderer: ({ value }: { value: string }) => (
        <LightboxImg src={value} sx={{ width: 36, height: 36 }} />
      ),
    },
    {
      headerName: '状态',
      field: 'enable',
      ...StatusCellValue,
    },
    {
      headerName: '操作',
      minWidth: 180,
      field: 'id',
      filter: false,
      sortable: false,
      cellRenderer: ({ data: row }: { data: DataBanner }) => (
        <>
          <LoadingButton onClick={() => openDialog(row)}>编辑</LoadingButton>
          <LoadingButton onClick={() => openDeleteDialog(row)}>删除</LoadingButton>
        </>
      ),
    },
  ];
  return {
    column,
  };
};
