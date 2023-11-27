import React from 'react';

/** Mui Components */
import { Button, ButtonProps } from '@mui/material';

/** Components */

/** styles */
import { styles } from './KeyboardButton.styles';

/** redux */

export default function KeyboardButton({ children, sx, ...otherProps }: ButtonProps) {
  return (
    <Button
      sx={[styles.keyboardButtons, ...(Array.isArray(sx) ? sx : [sx])]}
      {...otherProps}
    >
      {children}
    </Button>
  );
}
