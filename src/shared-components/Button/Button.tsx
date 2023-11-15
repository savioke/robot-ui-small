import React from 'react';

/** Mui Components */
import { Button as MuiButton, ButtonProps } from '@mui/material';

/** Components */

/** styles */
import { styles } from './Button.styles';

/** redux */

export default function Button({ children, sx, ...otherProps }: ButtonProps) {
  return (
    <MuiButton
      sx={[styles.button, ...(Array.isArray(sx) ? sx : [sx])]}
      {...otherProps}
    >
      {children}
    </MuiButton>
  );
}
