import React from 'react';

/** Mui Components */
import { Button, ButtonProps } from '@mui/material';

/** Components */

/** styles */
import { styles } from './KeypadButton.styles';

/** redux */

export default function KeypadButton({ children, sx, ...otherProps }: ButtonProps) {
  return (
    <Button
      sx={[styles.keypadButton, ...(Array.isArray(sx) ? sx : [sx])]}
      {...otherProps}
    >
      {children}
    </Button>
  );
}
