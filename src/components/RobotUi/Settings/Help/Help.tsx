import React from "react";

/** Mui Components */
import { Box } from "@mui/material";

/** Components */
import Text from "components/Text/Text";

/** styles */
import { styles } from "./Help.styles";

/** redux */

/** helpers */

export default function Help() {
  // TODO: Internationalize
  return (
    <Box sx={styles.container}>
      <Box>
        <Text component="b">Email</Text>
        <Text>support@relayrobotics.com</Text>
      </Box>
      <Box>
        <Text component="b">Phone</Text>
        <Text>123.456.7890</Text>
      </Box>
    </Box>
  );
}
