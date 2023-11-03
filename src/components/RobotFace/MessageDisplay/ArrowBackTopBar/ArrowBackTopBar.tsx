import React from 'react';
import { useDispatch, useSelector } from 'typeDux';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

/** Mui Components */
import { Box, Button, Breadcrumbs } from '@mui/material';

/** Components */
import Text from 'sharedComponents/Text/Text';

/** styles */
import { styles } from './ArrowBackTopBar.styles';

/** redux */
import { setDisplayScreen } from 'state/ui/ui.slice';
import { getDisplayScreen } from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

export default function ArrowBackTopBar() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const router = useRouter();
  const displayScreen = useSelector(getDisplayScreen);

  if (displayScreen === DisplayScreenOptions.RoomNumber) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.DeliveryDashboard))}
        >
          <Image
            priority
            src='/images/back_arrow.svg'
            height={70}
            width={70}
            alt={intl.formatMessage({ id: 'backArrow' })}
          />
        </Button>
        {/* TODO: This bring text down a bit. Robot screen doesn't have it centered like the PC browser does. */}
        {/* <Box sx={styles.textContainer}> */}
        <Text
          variant='h6'
          component='h1'
          id='delivery'
          sx={styles.breadCrumbTrailText}
        />
        -
        <Text
          variant='h6'
          component='h1'
          id='roomNumber'
        />
        {/* </Box> */}
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
              variant='h6'
              component='h1'
              id='delivery'
              sx={styles.breadCrumbTrailText}
            />
            <Text
              variant='h6'
              component='h1'
              id='search'
              sx={styles.breadCrumbTrailText}
            />
            <Text
              variant='h6'
              component='h1'
              id='message'
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
            variant='h6'
            component='h1'
            id='delivery'
            sx={styles.breadCrumbTrailText}
          />

          <Text
            variant='h6'
            component='h1'
            id='roomNumber'
            sx={styles.breadCrumbTrailText}
          />
          <Text
            variant='h6'
            component='h1'
            id='message'
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
              variant='h6'
              component='h1'
              id='delivery'
              sx={styles.breadCrumbTrailText}
            />
            <Text
              variant='h6'
              component='h1'
              id='search'
              sx={styles.breadCrumbTrailText}
            />
            <Text
              variant='h6'
              component='h1'
              id='message'
              sx={styles.breadCrumbTrailText}
            />
            <Text
              variant='h6'
              component='h1'
              id='summary'
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
        {/* TODO: This bring text down a bit. Robot screen doesn't have it centered like the PC browser does. */}
        {/* <Box sx={styles.textContainer}> */}
        <Text
          variant='h6'
          component='h1'
          id='delivery'
          sx={styles.breadCrumbTrailText}
        />
        -
        <Text
          variant='h6'
          component='h1'
          id='roomNumber'
          sx={styles.breadCrumbTrailText}
        />
        -
        <Text
          variant='h6'
          component='h1'
          id='message'
          sx={styles.breadCrumbTrailText}
        />
        -
        <Text
          variant='h6'
          component='h1'
          id='summary'
        />
        {/* </Box> */}
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
        {/* TODO: This bring text down a bit. Robot screen doesn't have it centered like the PC browser does. */}
        {/* <Box sx={styles.textContainer}> */}
        <Text
          variant='h6'
          component='h1'
          id='utilities'
        />
        {/* </Box> */}
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
        {/* TODO: This bring text down a bit. Robot screen doesn't have it centered like the PC browser does. */}
        {/* <Box sx={styles.textContainer}> */}
        <Text
          variant='h6'
          component='h1'
          id='favorites'
        />
        {/* </Box> */}
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
        {/* TODO: This bring text down a bit. Robot screen doesn't have it centered like the PC browser does. */}
        {/* <Box sx={styles.textContainer}> */}
        <Text
          variant='h6'
          component='h1'
          id='utilities'
        />
        -
        <Text
          variant='h6'
          component='h1'
          id='actions'
        />
        {/* </Box> */}
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
        {/* TODO: This bring text down a bit. Robot screen doesn't have it centered like the PC browser does. */}
        {/* <Box sx={styles.textContainer}> */}
        <Text
          variant='h6'
          component='h1'
          id='delivery'
        />
        {/* </Box> */}
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
        {/* TODO: This bring text down a bit. Robot screen doesn't have it centered like the PC browser does. */}
        {/* <Box sx={styles.textContainer}> */}
        <Text
          variant='h6'
          component='h1'
          id='delivery'
          sx={styles.breadCrumbTrailText}
        />
        -
        <Text
          variant='h6'
          component='h1'
          id='search'
        />
        {/* </Box> */}
      </Box>
    );
  } else if (
    displayScreen === DisplayScreenOptions.PassCode ||
    displayScreen === DisplayScreenOptions.CancelTask ||
    displayScreen === DisplayScreenOptions.CancelTaskConfirmation
  ) {
    return (
      <Box sx={styles.arrowBackContainer}>
        <Button
          sx={styles.button}
          onClick={() => dispatch(setDisplayScreen(DisplayScreenOptions.Home))}
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
  }

  return <Box sx={{ width: '70px', height: '70px' }}></Box>;
}
