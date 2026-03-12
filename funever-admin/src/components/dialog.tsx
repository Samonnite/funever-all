// import styled from '@emotion/styled';
// import MuiDialog from '@mui/material/Dialog';
// import classNames from 'classnames';
// import React, { ComponentProps } from 'react';
// import CloseIcon from '@mui/icons-material/Close';

// import { Card, CardHeader, Divider, IconButton } from '@mui/material';
// import Scrollbar from './Scrollbar';

// const Container = styled(MuiDialog)`
//   --dialog-header-height: 80px;
//   .MuiPaper-root {
//     min-width: 560px;
//     // max-height: initial;
//     // max-width: initial;
//     // min-height: initial;
//     // min-width: initial;
//   }
//   .MuiCardHeader-root {
//     padding-top: 10px;
//   }
//   .scrollbar {
//     max-height: calc(90vh - var(--dialog-header-height));
//     padding: 15px;
//   }
//   .dialog-title {
//     font-weight: 700;
//     font-size: 30px;
//     line-height: var(--dialog-header-height);
//     text-align: center;
//   }
//   .close-button {
//     position: absolute;
//     top: 15px;
//     left: 15px;
//   }
// `;
// const transitionDuration = {
//   appear: 150,
//   enter: 150,
//   exit: 0,
// };
// type Props = ComponentProps<typeof MuiDialog>;
// const Dialog: React.FC<Props> = ({ className, title, children, onClose, ...props }) => (
//   <Container
//     {...props}
//     transitionDuration={transitionDuration}
//     className={classNames(className)}
//     onClose={onClose}
//   >
//     <Card sx={{ overflow: 'auto' }}>
//       <CardHeader
//         title={title}
//         sx={{ marginBottom: 1 }}
//         action={
//           <IconButton
//             aria-label="close"
//             onClick={(e) => {
//               onClose?.(e, 'escapeKeyDown');
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//         }
//       />
//       <Divider />

//       <Scrollbar className="scrollbar">{children}</Scrollbar>
//     </Card>
//   </Container>
// );

// export default Dialog;

import { useRef, useEffect } from 'react';
// @mui
import { DialogTitle, DialogContent } from '@mui/material';
import MuiDialog, { DialogProps } from '@mui/material/Dialog';

// ----------------------------------------------------------------------
type Props = Omit<DialogProps, 'title'> & { title?: React.ReactElement | string };

const Dialog: React.FC<Props> = ({ title, children, open, onClose, ...props }) => {
  const descriptionElementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <MuiDialog {...props} open={open} onClose={onClose} scroll="paper">
      <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>

      <DialogContent
        dividers
        ref={descriptionElementRef}
        tabIndex={-1}
        sx={{
          '.MuiFormControl-root': {
            my: '10px',
          },
        }}
      >
        {children}
      </DialogContent>
    </MuiDialog>
  );
};

export default Dialog;
