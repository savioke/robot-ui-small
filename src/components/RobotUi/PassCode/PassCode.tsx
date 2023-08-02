import React from "react";
import OtpInput from "react-otp-input";
import { useIntl } from "react-intl";

/** Mui Components */
import { Box } from "@mui/material";

/** Components */
import Text from "components/Text/Text";
import Keypad from "../Keypad/Keypad";

/** styles */
import { styles } from "./PassCode.styles";

/** redux */

/** helpers */

export default function PassCode() {
  const intl = useIntl();
  const [passCode, setPassCode] = React.useState("");

  return (
    <Box sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <Box sx={styles.inputContainer}>
          <Text sx={{ marginBottom: 4 }} variant="h4">
            {intl.formatMessage({ id: "enterYourPasscode" })}
          </Text>
          <OtpInput
            inputType="number"
            value={passCode}
            onChange={setPassCode}
            numInputs={4}
            containerStyle={styles.otpContainer}
            renderInput={(props, index) => {
              // Spread out style object to prevent duplicate style attributes
              // eslint-disable-next-line no-unused-vars
              const { style, maxLength, ...inputProps } = props;

              return (
                <input
                  maxLength={1}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "100%",
                    color: "white",
                    background: passCode[index] ? "white" : "transparent",
                    borderColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",
                  }}
                  {...inputProps}
                />
              );
            }}
          />
        </Box>
        <Keypad keypadValues={passCode} setKeypadValues={setPassCode} />
      </Box>
    </Box>
  );
}
