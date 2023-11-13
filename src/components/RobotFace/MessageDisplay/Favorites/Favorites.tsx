import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'typeDux';

/** Mui Components */
import { Avatar, Box, Button, Checkbox } from '@mui/material';

/** Components */
import ArrowBackTopBar from '../ArrowBackTopBar/ArrowBackTopBar';
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './Favorites.styles';

/** redux */
import { getFavorites } from 'state/r2c2/r2c2.selectors';
import { setConfirmationMessage } from 'state/ui/ui.slice';

/** helpers */
import useSocketIo from 'utilities/useSocketIo/useSocketIo';
import { AvatarBackgroundColors, DeliverStatus, DisplayMessageOptions } from 'appConstants';
import { TaskConfigDeliver, TaskFormValues } from 'types/r2c2';
import { useSelector } from 'typeDux';
import { setDeliverStatus } from 'state/r2c2/r2c2.slice';

const stringAvatar = ({ dropoff_location, index }: { dropoff_location: string; index: number }) => {
  const initials = dropoff_location.includes(' ')
    ? dropoff_location
        .split(' ')
        .map((word) => word[0])
        .join('')
    : dropoff_location.split('')[0];

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
  const dispatch = useDispatch();
  const socket = useSocketIo();
  const [checked, setChecked] = React.useState<number[]>([]);
  const [tasks, setTasks] = React.useState<TaskFormValues<TaskConfigDeliver>[]>([]);
  const favorites = useSelector(getFavorites);

  // TODO: This function can be cleaned up.
  const handleToggle =
    ({ index, task }: { index: number; task: TaskFormValues<TaskConfigDeliver> }) =>
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
        {favorites.map(({ dropoff_location, dropoff_message }, index) => (
          <Box
            key={index}
            sx={styles.paperContainer}
            onClick={handleToggle({
              task: {
                type: 'DELIVER',
                version: '2.0',
                config: {
                  dropoff_location,
                  dropoff_message,
                },
              },
              index,
            })}
          >
            <Button sx={styles.favoriteButton}>
              <Avatar
                variant='square'
                {...stringAvatar({ dropoff_location, index })}
              />
              <Text
                variant='h5'
                sx={[styles.boldFont, { textTransform: 'capitalize' }]}
              >
                {dropoff_location}
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
            // Adds load_package to first task to bulk load all items for multi-stop capabilities.
            const updatedTasks = [
              {
                ...tasks[0],
                config: {
                  ...tasks[0].config,
                  load_package: true,
                },
              },
              ...tasks.slice(1),
            ];

            socket?.emit('queue_tasks', updatedTasks);
            dispatch(setDeliverStatus(DeliverStatus['LOAD_PACKAGE']));
            return dispatch(
              setConfirmationMessage(DisplayMessageOptions(intl)['Please load your package']),
            );
          }}
        >
          {intl.formatMessage({ id: 'go' })}
        </Button>
      </Box>
    </Box>
  );
}
