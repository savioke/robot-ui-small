import React from 'react';
import { useIntl } from 'react-intl';

/** Mui Components */
import { Avatar, Box, Button, Checkbox } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './Favorites.styles';

/** redux */
import { getFavorites } from 'state/r2c2/r2c2.selectors';

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';
import { AvatarBackgroundColors } from 'appConstants';
import { DeliverValues } from 'types/r2c2';
import { useSelector } from 'typeDux';

const stringAvatar = ({ name, index }: { name: string; index: number }) => {
  const initials = name.includes(' ')
    ? name
        .split(' ')
        .map((word) => word[0])
        .join('')
    : name.split('')[0];

  return {
    sx: {
      bgcolor: AvatarBackgroundColors[index],
      minWidth: '132px',
      minHeight: '132px',
      borderRadius: '30px',
      fontSize: '70px',
    },
    children: initials,
  };
};

export default function Favorites() {
  const intl = useIntl();
  const socket = useSocketIo();
  const [checked, setChecked] = React.useState<number[]>([]);
  const [tasks, setTasks] = React.useState<DeliverValues[]>([]);
  const favorites = useSelector(getFavorites);

  // TODO: This function can be cleaned up.
  const handleToggle =
    ({ index, task }: { index: number; task: DeliverValues }) =>
    () => {
      const currentIndex = checked.indexOf(index);
      const newChecked = [...checked];
      const newTasks = [...tasks];

      if (currentIndex === -1) {
        newChecked.push(index);
        newTasks.push(task);
      } else {
        newChecked.splice(currentIndex, 1);
        newTasks.splice(currentIndex, 1);
      }

      setChecked(newChecked);
      setTasks(newTasks);
    };

  return (
    <Box sx={styles.rootContainer}>
      <ArrowBackTopBar />
      <Box sx={styles.dashboardContainer}>
        {favorites.map((favorite, index) => (
          <Box
            key={index}
            sx={styles.paperContainer}
            onClick={handleToggle({
              task: {
                type: 'DELIVER',
                version: '2.0',
                config: {
                  dropoff_location: favorite,
                  // TODO: This should be returned from the favorites array after parsing..
                  dropoff_message: 'Please take your package',
                },
              },
              index,
            })}
          >
            <Button sx={styles.favoriteButton}>
              <Avatar
                variant='square'
                {...stringAvatar({ name: favorite, index })}
              />
              <Text
                variant='h5'
                sx={[styles.boldFont, { textTransform: 'capitalize' }]}
              >
                {favorite}
              </Text>
              <Checkbox
                checked={checked.indexOf(index) !== -1}
                sx={styles.checkbox}
              />
            </Button>
          </Box>
        ))}
      </Box>
      <Box sx={styles.buttonContainer}>
        <Button
          sx={styles.goButton}
          variant='contained'
          onClick={(event) => {
            event.preventDefault();
            socket?.emit('queue_tasks', tasks);
          }}
        >
          {intl.formatMessage({ id: 'go' })}
        </Button>
      </Box>
    </Box>
  );
}
