import React from 'react';
import { useSelector } from 'typeDux';

/** Mui Components */
import { Box, Divider } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './Status.styles';

/** redux */
import { getDisplayState } from 'state/r2c2/r2c2.selectors';

/** helpers */

export default function Status() {
  const displayState = useSelector(getDisplayState);

  return (
    <>
      <Box sx={styles.leftSideContent}>
        <ArrowBackTopBar />
        <Box sx={styles.contentContainer}>
          <Text
            variant='h3'
            component='h1'
            id='myStatusAndInformation'
            sx={styles.title}
          />
          <Box sx={styles.textContainer}>
            <Text
              variant='h5'
              id='hostname:'
              values={{
                hostname: (
                  <Text
                    component='span'
                    variant='h5'
                  >
                    {displayState.hostname}
                  </Text>
                ),
              }}
            />
            <Text
              variant='h5'
              id='nickname:'
              values={{
                nickname: (
                  <Text
                    component='span'
                    variant='h5'
                  >
                    {displayState.nickname}
                  </Text>
                ),
              }}
            />
            <Divider sx={styles.divider} />
            <Text
              variant='h5'
              id='networkConnectivity:'
              values={{
                networkConnectivity: (
                  <Text
                    component='span'
                    variant='h5'
                  >
                    {String(!!displayState.connected)}
                  </Text>
                ),
              }}
            />
            <Divider sx={styles.divider} />
            <Text
              variant='h5'
              id='battery:'
              values={{
                battery: (
                  <Text
                    component='span'
                    variant='h5'
                  >
                    {displayState.battery.percent}
                  </Text>
                ),
              }}
            />
            <Text
              variant='h5'
              id='batteryVoltage:'
              values={{
                batteryVoltage: (
                  <Text
                    component='span'
                    variant='h5'
                  >
                    {displayState.battery.voltage}
                  </Text>
                ),
              }}
            />
            <Text
              variant='h5'
              id='chargingDock:'
              values={{
                chargingDock: (
                  <Text
                    component='span'
                    variant='h5'
                  >
                    {String(!!displayState.battery.chargingDock)}
                  </Text>
                ),
              }}
            />
            <Text
              variant='h5'
              id='chargingPlug:'
              values={{
                chargingPlug: (
                  <Text
                    component='span'
                    variant='h5'
                  >
                    {String(!!displayState.battery.chargingPlug)}
                  </Text>
                ),
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
