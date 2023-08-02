import React from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "typeDux";

/** Mui Components */
import { Grid, Fab, IconButton, Button } from "@mui/material";

/** Components */

/** styles */
import { styles } from "./Keypad.styles";
import BackspaceIcon from "../SvgIcons/BackspaceIcon/BackspaceIcon";

/** redux */
import { setDisplayScreen } from "state/ui/ui.slice";

/** helpers */
import { DisplayScreenOptions } from "appConstants";

interface KeypadProps {
  keypadValues: string;
  setKeypadValues: React.Dispatch<React.SetStateAction<string>>;
}

export default function Keypad({ keypadValues, setKeypadValues }: KeypadProps) {
  const intl = useIntl();
  const dispatch = useDispatch();

  const addToKeypadValues = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setKeypadValues((previousValue) => {
      if (previousValue.length === 4) {
        return previousValue;
      }

      return previousValue + event.currentTarget.value;
    });
  };

  return (
    <Grid container rowSpacing={2}>
      <Grid container item xs={12}>
        <Grid item xs={4} sx={styles.fabContainer}>
          <Fab onClick={addToKeypadValues} size="large" sx={styles.fab} value={1}>
            {intl.formatMessage({ id: "1" })}
          </Fab>
        </Grid>
        <Grid item xs={4} sx={styles.fabContainer}>
          <Fab onClick={addToKeypadValues} size="large" sx={styles.fab} value={2}>
            {intl.formatMessage({ id: "2" })}
          </Fab>
        </Grid>
        <Grid item xs={4} sx={styles.fabContainer}>
          <Fab onClick={addToKeypadValues} size="large" sx={styles.fab} value={3}>
            {intl.formatMessage({ id: "3" })}
          </Fab>
        </Grid>
      </Grid>
      <Grid container item spacing={1} xs={12}>
        <Grid item xs={4} sx={styles.fabContainer}>
          <Fab onClick={addToKeypadValues} size="large" sx={styles.fab} value={4}>
            {intl.formatMessage({ id: "4" })}
          </Fab>
        </Grid>
        <Grid item xs={4} sx={styles.fabContainer}>
          <Fab onClick={addToKeypadValues} size="large" sx={styles.fab} value={5}>
            {intl.formatMessage({ id: "5" })}
          </Fab>
        </Grid>
        <Grid item xs={4} sx={styles.fabContainer}>
          <Fab onClick={addToKeypadValues} size="large" sx={styles.fab} value={6}>
            {intl.formatMessage({ id: "6" })}
          </Fab>
        </Grid>
      </Grid>
      <Grid container item spacing={1} xs={12}>
        <Grid item xs={4} sx={styles.fabContainer}>
          <Fab onClick={addToKeypadValues} size="large" sx={styles.fab} value={7}>
            {intl.formatMessage({ id: "7" })}
          </Fab>
        </Grid>
        <Grid item xs={4} sx={styles.fabContainer}>
          <Fab onClick={addToKeypadValues} size="large" sx={styles.fab} value={8}>
            {intl.formatMessage({ id: "8" })}
          </Fab>
        </Grid>
        <Grid item xs={4} sx={styles.fabContainer}>
          <Fab onClick={addToKeypadValues} size="large" sx={styles.fab} value={9}>
            {intl.formatMessage({ id: "9" })}
          </Fab>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4} sx={[styles.fabContainer, styles.iconButtonContainer]}>
          <IconButton
            onClick={() => setKeypadValues((accessCode) => accessCode.slice(0, -1))}
            sx={styles.iconButton}
          >
            <BackspaceIcon />
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={styles.fabContainer}>
          <Fab size="large" onClick={addToKeypadValues} sx={styles.fab} value={0}>
            {intl.formatMessage({ id: "0" })}
          </Fab>
        </Grid>
        <Grid item xs={4} sx={styles.fabContainer}>
          <Button
            size="large"
            sx={styles.button}
            onClick={() => {
              // TODO: Hook in error message for invalid code... This might be verified from R2C2.
              if (keypadValues !== "1234") {
                return;
                // return setErrorMessage('Invalid passcode')
              }

              return dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard));
            }}
          >
            {intl.formatMessage({ id: "ok" })}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
