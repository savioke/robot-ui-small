import { IntlShape } from 'react-intl';

export const DisplayScreenOptions = {
  DeliverForm: 'Deliver Form' as const,
  Dashboard: 'Dashboard' as const,
  Home: 'Home' as const,
  PassCode: 'Passcode' as const,
  Settings: 'Settings' as const,
  DeliveryMainScreen: 'Delivery main screen' as const,
  EnterRoomNumber: 'Enter room number' as const,
  EnterRoomMessage: 'Enter room number message' as const,
  ViewRoomSummary: 'View room number summary' as const,
};

export const Themes = {
  Default: `url(/images/robot-ui-background.jpg)`,
  'Charcoal Gray': `linear-gradient(#CFD8DC, #546E7A)`,
  'Cool Sky': `linear-gradient(#6DD5FA, #2980B9)`,
  'Cosmic Fusion': `linear-gradient(#7B1FA2, #7C4DFF)`,
  Timber: `linear-gradient(#00dbde, #fc00ff)`,
};

export const Language = {
  English: 'en',
  Spanish: 'es',
  Japanese: 'ja',
};

export const DisplayMessageOptions = (
  intl: IntlShape,
): {
  [key: string]: string;
} => ({
  'Your order has arrived!': intl.formatMessage({ id: 'yourOrderHasArrived!' }),
  'Thank you, have a nice day!': intl.formatMessage({ id: 'thankYouHaveANiceDay' }),
  'Please load the item': intl.formatMessage({ id: 'pleaseLoadTheItem' }),
  'Heading back to my dock': intl.formatMessage({ id: 'headingBackToMyDock' }),
  'Closing the lid': intl.formatMessage({ id: 'closingTheLid' }),
});
