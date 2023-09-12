import * as React from 'react';
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';



export const UploadFileBtn = () => {

  const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

  return (
    <>
<Button
  component="label"
  variant="contained"
  startIcon={<CloudUploadIcon />}
  href="#file-upload"
>
  Upload a file
  <VisuallyHiddenInput type="file" />
</Button>
    </>
  );
};

