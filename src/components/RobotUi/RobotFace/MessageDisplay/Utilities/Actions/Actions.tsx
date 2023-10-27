import React from 'react';
import { useIntl } from 'react-intl';
import Image from 'next/image';
import { useDispatch } from 'typeDux';

/** Mui Components */
import { Box, Button } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'components/Text/Text';

/** styles */
import { styles } from './Actions.styles';

/** redux */

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';

export default function Actions() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socket = useSocketIo(dispatch, intl);

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
        <Box sx={styles.paperContainer}>
          <Button
            onClick={() => {
              console.info('OPENING LID');
              socket?.emit('choice_made', { name: 'Open Lid' });
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
              console.info('CLOSING LID');
              socket?.emit('choice_made', { name: 'Close Lid' });
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
          {/* TODO: Add in socket events */}
          <Button>
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
          {/* TODO: Add in socket events */}
          <Button>
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
      </Box>
    </Box>
  );
}
