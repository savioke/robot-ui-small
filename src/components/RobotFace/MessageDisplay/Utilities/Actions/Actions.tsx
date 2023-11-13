import React from 'react';
import { useIntl } from 'react-intl';
import Image from 'next/image';
import { useDispatch, useSelector } from 'typeDux';

/** Mui Components */
import { Box, Button } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './Actions.styles';

/** redux */
import { getUtilities } from 'state/r2c2/r2c2.selectors';

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';
import { setDisplayScreen } from 'state/ui/ui.slice';
import { DisplayScreenOptions } from 'appConstants';

export default function Actions() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socket = useSocketIo(dispatch, intl);
  const utilities = useSelector(getUtilities);

  return (
    <Box sx={styles.rootContainer}>
      <ArrowBackTopBar />
      <Text
        variant='h3'
        component='h1'
        id='whatCanIDoForYou?'
        sx={styles.title}
      />
      <Box sx={styles.dashboardContainer}>
        {utilities?.map((utility) => {
          if (utility.toLowerCase() === 'all') {
            return (
              <>
                <Box sx={styles.paperContainer}>
                  <Button
                    onClick={() => {
                      socket?.emit('open_lid');
                    }}
                  >
                    <Image
                      priority
                      src='images/open-lid.svg'
                      height={140}
                      width={140}
                      alt={intl.formatMessage({ id: 'openLid' })}
                    />
                  </Button>
                  <Text
                    variant='h5'
                    id='openLid'
                    sx={styles.boldFont}
                  />
                </Box>
                <Box sx={styles.paperContainer}>
                  <Button
                    onClick={() => {
                      socket?.emit('close_lid');
                    }}
                  >
                    <Image
                      priority
                      src='images/close-lid.svg'
                      height={140}
                      width={140}
                      alt={intl.formatMessage({ id: 'closeLid' })}
                    />
                  </Button>
                  <Text
                    variant='h5'
                    id='closeLid'
                    sx={styles.boldFont}
                  />
                </Box>
                <Box sx={styles.paperContainer}>
                  <Button
                    onClick={() => {
                      dispatch(setDisplayScreen(DisplayScreenOptions.GoToSearch));
                    }}
                  >
                    <Image
                      priority
                      src='images/go-to-location.svg'
                      height={140}
                      width={140}
                      alt={intl.formatMessage({ id: 'goToLocation' })}
                    />
                  </Button>
                  <Text
                    variant='h5'
                    id='goToLocation'
                    sx={styles.boldFont}
                  />
                </Box>
                <Box sx={styles.paperContainer}>
                  <Button
                    onClick={() => {
                      socket?.emit('queue_tasks', {
                        type: 'SEND_TO_DOCK',
                        version: '2.0',
                      });
                    }}
                  >
                    <Image
                      priority
                      src='images/return-to-dock.svg'
                      height={140}
                      width={140}
                      alt={intl.formatMessage({ id: 'returnToDock' })}
                    />
                  </Button>
                  <Text
                    variant='h5'
                    id='returnToDock'
                    sx={styles.boldFont}
                  />
                </Box>
                <Box sx={styles.paperContainer}>
                  <Button
                    onClick={() => {
                      dispatch(setDisplayScreen(DisplayScreenOptions.MappingChoice));
                    }}
                  >
                    <Image
                      priority
                      src='images/start-mapping.svg'
                      height={140}
                      width={140}
                      alt={intl.formatMessage({ id: 'startMapping' })}
                    />
                  </Button>
                  <Text
                    variant='h5'
                    id='startMapping'
                    sx={styles.boldFont}
                  />
                </Box>
              </>
            );
          } else if (utility.toLowerCase() === 'open lid') {
            return (
              <Box sx={styles.paperContainer}>
                <Button
                  onClick={() => {
                    socket?.emit('open_lid');
                  }}
                >
                  <Image
                    priority
                    src='images/open-lid.svg'
                    height={140}
                    width={140}
                    alt={intl.formatMessage({ id: 'openLid' })}
                  />
                </Button>
                <Text
                  variant='h5'
                  id='openLid'
                  sx={styles.boldFont}
                />
              </Box>
            );
          } else if (utility.toLowerCase() === 'close lid') {
            return (
              <Box sx={styles.paperContainer}>
                <Button
                  onClick={() => {
                    socket?.emit('close_lid');
                  }}
                >
                  <Image
                    priority
                    src='images/close-lid.svg'
                    height={140}
                    width={140}
                    alt={intl.formatMessage({ id: 'closeLid' })}
                  />
                </Button>
                <Text
                  variant='h5'
                  id='closeLid'
                  sx={styles.boldFont}
                />
              </Box>
            );
          } else if (utility.toLowerCase() === 'go to') {
            return (
              <Box sx={styles.paperContainer}>
                <Button
                  onClick={() => {
                    dispatch(setDisplayScreen(DisplayScreenOptions.GoToSearch));
                  }}
                >
                  <Image
                    priority
                    src='images/go-to-location.svg'
                    height={140}
                    width={140}
                    alt={intl.formatMessage({ id: 'goToLocation' })}
                  />
                </Button>
                <Text
                  variant='h5'
                  id='goToLocation'
                  sx={styles.boldFont}
                />
              </Box>
            );
          } else if (utility.toLowerCase() === 'dock') {
            return (
              <Box sx={styles.paperContainer}>
                <Button
                  onClick={() => {
                    socket?.emit('queue_tasks', {
                      type: 'SEND_TO_DOCK',
                      version: '2.0',
                    });
                  }}
                >
                  <Image
                    priority
                    src='images/return-to-dock.svg'
                    height={140}
                    width={140}
                    alt={intl.formatMessage({ id: 'returnToDock' })}
                  />
                </Button>
                <Text
                  variant='h5'
                  id='returnToDock'
                  sx={styles.boldFont}
                />
              </Box>
            );
          } else if (utility.toLowerCase() === 'map') {
            return (
              <Box sx={styles.paperContainer}>
                <Button
                  onClick={() => {
                    dispatch(setDisplayScreen(DisplayScreenOptions.MappingChoice));
                  }}
                >
                  <Image
                    priority
                    src='images/start-mapping.svg'
                    height={140}
                    width={140}
                    alt={intl.formatMessage({ id: 'startMapping' })}
                  />
                </Button>
                <Text
                  variant='h5'
                  id='startMapping'
                  sx={styles.boldFont}
                />
              </Box>
            );
          }
        })}
      </Box>
    </Box>
  );
}
