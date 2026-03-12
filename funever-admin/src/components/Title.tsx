import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function Title({
  title,
  action,
}: {
  title: React.ReactElement | string;
  action?: React.ReactNode;
}) {
  return (
    <Grid container spacing={2} sx={{ mb: 1 }}>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={8} lg={8} xl={8} sx={{ textAlign: 'right' }}>
        {action}
      </Grid>
    </Grid>
  );
}
