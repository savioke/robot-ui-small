import React from "react";
import { useIntl } from "react-intl";

/** Mui Components */
import { Typography, SxProps, Theme, TypographyVariant } from "@mui/material";

/** Components */

/** styles */
import { styles } from "./Text.styles";

/** redux */

/** helpers */

interface TextProps {
  /**
   * The content of the text element. Can be a string or other React elements.
   */
  children?: React.ReactNode;
  /**
   * The identifier for the internationalized text.
   */
  id?: string;
  /**
   * Indicates whether the text should be displayed in lowercase.
   */
  isLowerCaseText?: boolean;
  /**
   * The styling props for the text element.
   */
  sx?: SxProps<Theme>;
  /**
   * The variant of the typography to use for the text element.
   * @default 'body1'
   */
  variant?: TypographyVariant;
  /**
   * Internationaliztion variables for dynamic values and HTML elements
   * @default 'body1'
   */
  values?: {
    [key: string]: any;
  };
  /**
   * Additional props that can be passed to the text element.
   */
  [key: string]: unknown;
}

/**
 * Internationalized extension of the Mui Typography component.
 *
 * https://mui.com/material-ui/react-typography/
 */
export default function Text({
  id,
  children,
  isLowerCaseText,
  sx,
  variant = "body1",
  values,
  ...otherProps
}: TextProps) {
  const intl = useIntl();
  const text = id ? intl.formatMessage({ id }, { ...values }) : "";

  return (
    <Typography
      variant={variant}
      sx={[...(isLowerCaseText ? [styles.lowerCaseText] : []), ...(Array.isArray(sx) ? sx : [sx])]}
      {...otherProps}
    >
      {text}
      {children}
    </Typography>
  );
}
