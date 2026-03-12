import { Box, Grid } from '@mui/material';
import Image from 'components/image/Image';
import { Lightbox } from 'components/lightbox';
import React, { useMemo, useState } from 'react';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Download from 'yet-another-react-lightbox/plugins/download';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

import 'yet-another-react-lightbox/plugins/thumbnails.css';
import isArray from 'lodash/isArray';

const LightboxImg = ({
  src,
  sx,
  round = false,
}: {
  src: string | string[];
  sx?: Object;
  round?: boolean;
}) => {
  const [imgOpen, setImgOpen] = useState(false);
  const [active, setActive] = useState(0);
  const slides = useMemo(() => {
    if (isArray(src)) {
      return src.map((item) => ({
        src: item,
        downloadUrl: item,
      }));
    }
    return [
      {
        src,
        downloadUrl: src,
      },
    ];
  }, [src]);

  return (
    <Box sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', height: '100%' }}>
      {isArray(src) ? (
        <Grid container spacing={3} alignItems="center">
          {src.map((item, index) => (
            <Grid item key={item + index}>
              <Image
                onClick={() => {
                  setActive(index);
                  setImgOpen(true);
                }}
                src={item}
                alt=""
                sx={{ objectFit: 'cover', borderRadius: round ? '50%' : '', ...sx }}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Image
          onClick={() => setImgOpen(true)}
          src={src}
          alt=""
          sx={{ objectFit: 'cover', borderRadius: round ? '50%' : '', ...sx }}
        />
      )}
      {src && (
        <Lightbox
          index={active}
          slides={slides}
          controller={{
            closeOnBackdropClick: true,
          }}
          // carousel={{ finite: true }}
          plugins={[Zoom, Download, Thumbnails]}
          open={imgOpen}
          render={{
            iconPrev: isArray(src) ? undefined : () => '',
            iconNext: isArray(src) ? undefined : () => '',
          }}
          zoom={{
            scrollToZoom: true,
          }}
          close={() => setImgOpen(false)}
        />
      )}
    </Box>
  );
};

export default React.memo(LightboxImg);
