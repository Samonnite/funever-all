import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, CircularProgress, Grid, Switch } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import Title from 'components/Title';
import { useSnackbar } from 'notistack';
import LightboxImg from 'components/lightbox/lighibox-img';
import { uploadFn } from 'components/upload/upload-fn';
import RoleBasedGuard from 'auth/RoleBasedGuard';
import { SystemSettingModel } from '../model/system-config';
import UpdateDialog from './update-dialog';
import PoolDialog from './pool-dialog';
import BonusDialog from './bonus-dialog';

function createData(name: string, content?: boolean | number | string, operate?: string) {
  return { name, content, operate };
}

const SystemRegisterConfig = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { systemSetting } = SystemSettingModel.useSystemSetting();
  const { updateSetting, isLoading } = SystemSettingModel.useUpdateSetting();

  const [isUploadLoading, setLoading] = useState(false);
  const [isCloseLoading, setCloseLoading] = useState(false);
  const [current, setCurrent] = useState(-1);
  const [currentRate, setCurrentRate] = useState<string>();
  const [type, setType] = useState<'string' | 'number'>('number');
  const [open, setOpen] = useState(false);
  const [openPool, setOpenPool] = useState(false);
  const [openBonus, setOpenBonus] = useState(false);

  const registerRows = [createData('前台登陆是否验证签名', systemSetting?.loginSign, 'loginSign')];

  const uploadRows = [createData('系统图标', systemSetting?.systemLogo, 'systemLogo')];

  const rateRows = [
    createData('分红比例(单位100%)', systemSetting?.bonusRate, 'bonusRate'),
    createData('平局手续费(单位100%)', systemSetting?.drawFee, 'drawFee'),
  ];

  const textRows = [
    createData('系统名称', systemSetting?.systemName, 'systemName'),
    createData('区块链浏览器', systemSetting?.solscan, 'solscan'),
    createData('节点', systemSetting?.node, 'node'),
    createData('节点ws', systemSetting?.nodeWss, 'nodeWss'),
  ];

  const bonusRows = [createData('抽成账户', systemSetting?.addrBonus, 'addrBonus')];
  const poolRows = [createData('游戏池账户', systemSetting?.addrPool, 'addrPool')];

  const handleFileChosen = async (field: string, file: File) => {
    setLoading(true);
    const isApk = field === 'googleAuthUrl';
    const path = isApk ? 'app' : 'setting';
    uploadFn(file, path)
      .then(({ url }) => {
        updateSetting({
          data: {
            ...systemSetting,
            [field]: url,
          },
        }).then(() => {
          enqueueSnackbar('更新成功！');
        });
      })
      .catch((err) => {
        enqueueSnackbar(err.message || '上传失败', {
          variant: 'error',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box sx={{ maxWidth: '100%' }}>
      <Title title="系统配置" />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>配置项</TableCell>
                  <TableCell align="center">配置内容</TableCell>
                  <TableCell align="right">操作</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {registerRows.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row" width={380}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" width="60%">
                      {row.content ? '开启' : '关闭'}
                    </TableCell>
                    <TableCell align="right">
                      <Switch
                        checked={!!row.content}
                        onChange={async () => {
                          if (isLoading) return;
                          await setCurrent(index);
                          await updateSetting({
                            data: {
                              ...systemSetting,
                              [row.operate as string]: !row.content,
                            },
                          });
                          enqueueSnackbar('更新成功！');
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
                {rateRows.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row" width={380}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" width="60%">
                      {row.content}%
                    </TableCell>
                    <TableCell align="right">
                      <LoadingButton
                        onClick={async () => {
                          setOpen(true);
                          setCurrentRate(row.operate);
                          setType('number');
                        }}
                      >
                        编辑
                      </LoadingButton>
                    </TableCell>
                  </TableRow>
                ))}
                {uploadRows.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row" width={380}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" width="60%">
                      <LightboxImg src={row.content as string} sx={{ width: 70, margin: 'auto' }} />
                    </TableCell>
                    <TableCell align="right" width={280}>
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <LoadingButton
                            disabled={!row.content}
                            loading={isCloseLoading && current === index}
                            onClick={async () => {
                              if (isLoading) return;
                              await setCurrent(index);
                              await setCloseLoading(true);
                              await updateSetting({
                                data: {
                                  ...systemSetting,
                                  [row.operate as string]: '',
                                },
                              });
                              setCloseLoading(false);
                              enqueueSnackbar('更新成功！');
                            }}
                          >
                            关闭
                          </LoadingButton>
                        </Grid>
                        <Grid item>
                          <Button component="label">
                            {isUploadLoading && current === index ? (
                              <CircularProgress size="1em" color="inherit" />
                            ) : (
                              <>
                                上传
                                <input
                                  type="file"
                                  accept="image/*,video/*"
                                  hidden
                                  onChange={(e) => {
                                    if (e?.target?.files !== null) {
                                      setCurrent(index);
                                      handleFileChosen(row.operate as string, e.target.files[0]);
                                      const { target } = e;
                                      if (target) {
                                        target.value = '';
                                      }
                                    }
                                  }}
                                />
                              </>
                            )}
                          </Button>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                ))}
                {textRows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row" width={380}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" width="60%">
                      {row.content}
                    </TableCell>
                    <TableCell align="right">
                      <LoadingButton
                        onClick={async () => {
                          setOpen(true);
                          setCurrentRate(row.operate);
                          setType('string');
                        }}
                      >
                        编辑
                      </LoadingButton>
                    </TableCell>
                  </TableRow>
                ))}
                {bonusRows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row" width={380}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" width="60%">
                      {row.content}
                    </TableCell>
                    <TableCell align="right">
                      <RoleBasedGuard roles={[true as any]}>
                        <LoadingButton
                          onClick={async () => {
                            setOpenBonus(true);
                          }}
                        >
                          编辑
                        </LoadingButton>
                      </RoleBasedGuard>
                    </TableCell>
                  </TableRow>
                ))}
                {poolRows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row" width={380}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" width="60%">
                      {row.content}
                    </TableCell>
                    <TableCell align="right">
                      <RoleBasedGuard roles={[true as any]}>
                        <LoadingButton
                          onClick={async () => {
                            setOpenPool(true);
                          }}
                        >
                          编辑
                        </LoadingButton>
                      </RoleBasedGuard>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      {open && (
        <UpdateDialog
          open={open}
          onClose={() => setOpen(false)}
          data={currentRate}
          systemSetting={systemSetting}
          type={type}
        />
      )}
      {openPool && <PoolDialog open={openPool} onClose={() => setOpenPool(false)} />}
      {openBonus && <BonusDialog open={openBonus} onClose={() => setOpenBonus(false)} />}
    </Box>
  );
};

export default SystemRegisterConfig;
