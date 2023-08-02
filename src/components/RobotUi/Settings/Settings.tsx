import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Box, Divider, List, ListItemButton, Paper } from '@mui/material';

/** Components */
import Help from './Help/Help';
import General from './General/General';
import { Text } from 'shared-components';

/** styles */
import { styles } from './Settings.styles';

/** redux */

/** helpers */

export default function Settings() {
  const intl = useIntl();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.messageContainer}>
        <Paper
          elevation={5}
          sx={styles.paper}
        >
          <Box>
            <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'space-between' }}>
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={() => setSelectedIndex(0)}
              >
                <Text id='general' />
              </ListItemButton>
              {/* TODO: Is Actions needed for customers to do ROS specific actions? */}
              {/* <ListItemButton
                selected={selectedIndex === 1}
                onClick={() => setSelectedIndex(1)}
              >
                <Text id='actions' />
              </ListItemButton> */}
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={() => setSelectedIndex(2)}
              >
                <Text id='help' />
              </ListItemButton>
            </List>
          </Box>
          <Divider
            flexItem
            orientation='vertical'
            variant='middle'
          />
          {selectedIndex === 0 && <General />}
          {selectedIndex === 1 && 'Actions'}
          {selectedIndex === 2 && <Help />}
        </Paper>
      </Box>
      <Box sx={styles.eyesContainer}>
        <Image
          priority
          src='images/eye_left.svg'
          height={64}
          width={64}
          alt={intl.formatMessage({ id: 'leftEye' })}
        />
        <Image
          priority
          src='/images/eye_right.svg'
          height={64}
          width={64}
          alt={intl.formatMessage({ id: 'rightEye' })}
        />
      </Box>
    </Box>
  );
}
