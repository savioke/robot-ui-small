import React from 'react';
import { useDispatch, useSelector } from 'typeDux';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

/** Mui Components */
import { Box, Button, Breadcrumbs } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

/** Components */
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './ArrowBackTopBar.styles';

/** redux */
import {
  setDisplayScreen,
  setNotificationMessage,
  setPasscode,
  setTransitMessage,
} from 'state/ui/ui.slice';
import { getDisplayScreen, getIsIdleBehaviorInterrupted } from 'state/ui/ui.selectors';
import { getSocket } from 'state/socket/socket.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';
import { resetMappingFormValues } from 'state/mapping/mapping.slice';
import { TaskFormValues, TaskConfigDeliver } from 'types/r2c2';

export default function ArrowBackTopBar({
  favorites,
}: {
  favorites?: TaskFormValues<TaskConfigDeliver>[];
}) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const router = useRouter();
  const socket = useSelector(getSocket);
  const displayScreen = useSelector(getDisplayScreen);
  const isIdleBehaviorInterrupted = useSelector(getIsIdleBehaviorInterrupted);

  if (displayScreen === DisplayScreenOptions.RoomNumber) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => {
            router.push(router.pathname);
            dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryDashboard));
          }}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
        <Breadcrumbs
          separator='-'
          aria-label='breadcrumb'
        >
          <Text
            variant='h5'
            component='h1'
            id='delivery'
          />
          <Text
            variant='h5'
            component='h1'
            id='roomNumber'
            sx={styles.breadCrumbText}
          />
        </Breadcrumbs>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Search) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => {
            router.push(router.pathname);
            dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryDashboard));
          }}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
        <Breadcrumbs
          separator='-'
          aria-label='breadcrumb'
        >
          <Text
            variant='h5'
            component='h1'
            id='delivery'
          />
          <Text
            variant='h5'
            component='h1'
            id='search'
            sx={styles.breadCrumbText}
          />
        </Breadcrumbs>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.GoToSearch) {
    // TODO: Condense this logic in a single "Search" component
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => {
            router.push(router.pathname);
            dispatch(setDisplayScreen(DisplayScreenOptions.Actions));
          }}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
        <Breadcrumbs
          separator='-'
          aria-label='breadcrumb'
        >
          <Text
            variant='h5'
            component='h1'
            id='actions'
          />
          <Text
            variant='h5'
            component='h1'
            id='search'
            sx={styles.breadCrumbText}
          />
        </Breadcrumbs>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.DeliveryMessage) {
    if (router.asPath === '/#search') {
      return (
        <Box sx={styles.arrowBackContainer}>
          <Button
            sx={styles.button}
            onClick={() => {
              dispatch(setDisplayScreen(DisplayScreenOptions.Search));
            }}
          >
            <Image
              priority
              src='/images/back_arrow.svg'
              height={70}
              width={70}
              alt={intl.formatMessage({ id: 'backArrow' })}
            />
          </Button>
          <Breadcrumbs
            separator='-'
            aria-label='breadcrumb'
          >
            <Text
              variant='h5'
              component='h1'
              id='delivery'
            />
            <Text
              variant='h5'
              component='h1'
              id='search'
            />
            <Text
              variant='h5'
              component='h1'
              id='message'
              sx={styles.breadCrumbText}
            />
          </Breadcrumbs>
        </Box>
      );
    }

    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.RoomNumber))}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
        <Breadcrumbs
          separator='-'
          aria-label='breadcrumb'
        >
          <Text
            variant='h5'
            component='h1'
            id='delivery'
          />

          <Text
            variant='h5'
            component='h1'
            id='roomNumber'
          />
          <Text
            variant='h5'
            component='h1'
            id='message'
            sx={styles.breadCrumbText}
          />
        </Breadcrumbs>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.DeliverySummary) {
    if (router.asPath === '/#search') {
      return (
        <Box sx={styles.arrowBackContainer}>
          <Button
            sx={styles.button}
            onClick={() => {
              dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryMessage));
            }}
          >
            <Image
              priority
              src='/images/back_arrow.svg'
              height={70}
              width={70}
              alt={intl.formatMessage({ id: 'backArrow' })}
            />
          </Button>
          <Breadcrumbs
            separator='-'
            aria-label='breadcrumb'
          >
            <Text
              variant='h5'
              component='h1'
              id='delivery'
            />
            <Text
              variant='h5'
              component='h1'
              id='search'
            />
            <Text
              variant='h5'
              component='h1'
              id='message'
            />
            <Text
              variant='h5'
              component='h1'
              id='summary'
              sx={styles.breadCrumbText}
            />
          </Breadcrumbs>
        </Box>
      );
    }

    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryMessage))}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
        <Text
          variant='h5'
          component='h1'
          id='delivery'
        />
        -
        <Text
          variant='h5'
          component='h1'
          id='roomNumber'
        />
        -
        <Text
          variant='h5'
          component='h1'
          id='message'
        />
        -
        <Text
          variant='h5'
          component='h1'
          id='summary'
          sx={styles.breadCrumbText}
        />
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Utilities) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard))}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
        <Breadcrumbs
          separator='-'
          aria-label='breadcrumb'
        >
          <Text
            variant='h5'
            component='h1'
            id='utilities'
          />
        </Breadcrumbs>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Favorites) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard))}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
        <Text
          variant='h5'
          component='h1'
          id='favorites'
          sx={{ fontWeight: 500 }}
        />
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'flex-end', marginRight: '59px' }}>
          <Breadcrumbs separator={<NavigateNext />}>
            {favorites?.map((favorite) => (
              <Text variant='h5'>{favorite.config.dropoff_location}</Text>
            ))}
          </Breadcrumbs>
        </Box>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Actions) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Utilities))}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
        <Breadcrumbs
          separator='-'
          aria-label='breadcrumb'
        >
          <Text
            variant='h5'
            component='h1'
            id='utilities'
          />
          <Text
            variant='h5'
            component='h1'
            id='actions'
            sx={styles.breadCrumbText}
          />
        </Breadcrumbs>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Help) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Utilities))}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
        <Breadcrumbs
          separator='-'
          aria-label='breadcrumb'
        >
          <Text
            variant='h5'
            component='h1'
            id='utilities'
          />
          <Text
            variant='h5'
            component='h1'
            id='help'
            sx={styles.breadCrumbText}
          />
        </Breadcrumbs>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.Status) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Utilities))}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
        <Breadcrumbs
          separator='-'
          aria-label='breadcrumb'
        >
          <Text
            variant='h5'
            component='h1'
            id='utilities'
          />
          <Text
            variant='h5'
            component='h1'
            id='status'
            sx={styles.breadCrumbText}
          />
        </Breadcrumbs>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.DeliveryDashboard) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Dashboard))}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
        <Text
          variant='h5'
          component='h1'
          id='delivery'
        />
      </Box>
    );
  } else if (
    displayScreen === DisplayScreenOptions.PassCode ||
    displayScreen === DisplayScreenOptions.CancelTask
  ) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => {
            dispatch(setNotificationMessage(''));
            dispatch(setPasscode(''));
            dispatch(setDisplayScreen(DisplayScreenOptions.Home));

            if (isIdleBehaviorInterrupted) {
              dispatch(setTransitMessage('Resuming...'));
              socket?.emit('idle_resume');
            }
          }}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.MappingChoice) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Actions))}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
        <Breadcrumbs
          separator='-'
          aria-label='breadcrumb'
        >
          <Text
            variant='h5'
            component='h1'
            id='utilities'
          />
          <Text
            variant='h5'
            component='h1'
            id='startMapping'
            sx={styles.breadCrumbText}
          />
        </Breadcrumbs>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.OverrideMap) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => {
            dispatch(resetMappingFormValues());
            dispatch(setDisplayScreen(DisplayScreenOptions.MappingChoice));
          }}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
        <Breadcrumbs
          separator='-'
          aria-label='breadcrumb'
        >
          <Text
            variant='h5'
            component='h1'
            id='utilities'
          />
          <Text
            variant='h5'
            component='h1'
            id='startMapping'
          />
          <Text
            variant='h5'
            component='h1'
            id='overrideMap'
            sx={styles.breadCrumbText}
          />
        </Breadcrumbs>
      </Box>
    );
  } else if (displayScreen === DisplayScreenOptions.CreateMap) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => {
            dispatch(resetMappingFormValues());
            dispatch(setDisplayScreen(DisplayScreenOptions.MappingChoice));
          }}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
        <Breadcrumbs
          separator='-'
          aria-label='breadcrumb'
        >
          <Text
            variant='h5'
            component='h1'
            id='utilities'
          />
          <Text
            variant='h5'
            component='h1'
            id='startMapping'
          />
          <Text
            variant='h5'
            component='h1'
            id='createMap'
            sx={styles.breadCrumbText}
          />
        </Breadcrumbs>
      </Box>
    );
  }

  return <Box sx={{ width: '70px', height: '70px' }}></Box>;
}
