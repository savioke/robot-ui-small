import { IntlShape } from 'react-intl';

export const DisplayScreenOptions = {
  DeliverForm: 'Deliver Form' as const,
  Dashboard: 'Dashboard' as const,
  Home: 'Home' as const,
  PassCode: 'Passcode' as const,
  Settings: 'Settings' as const,
  DeliveryDashboard: 'Delivery dashboard' as const,
  DeliveryMessage: 'Delivery message' as const,
  DeliverySummary: 'Delivery summary' as const,
  RoomNumber: 'Room number' as const,
  Favorites: 'Favorites' as const,
  Utilities: 'Utilities' as const,
  Actions: 'Actions' as const,
  CancelTask: 'CancelTask' as const,
  CancelTaskConfirmation: 'CancelTaskConfirmation' as const,
  Search: 'Search' as const,
  Status: 'Status' as const,
  Help: 'Help' as const,
  MappingChoice: 'Mapping Choice' as const,
  OverrideMap: 'Override Map' as const,
  CreateMap: 'Create Map' as const,
  GoToSearch: 'GoToSearch' as const,
  AuthorizePin: 'Authorize PIN' as const,
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

// TODO: Finalize default messaging
export const DisplayMessageOptions = (
  intl: IntlShape,
): {
  [key: string]: string;
} => ({
  'Your order has arrived!': intl.formatMessage({ id: 'yourOrderHasArrived!' }),
  'Thank you, have a nice day!': intl.formatMessage({ id: 'thankYouHaveANiceDay' }),
  'Please load your package': intl.formatMessage({ id: 'pleaseLoadYourPackage' }),
  'Please take your package': intl.formatMessage({ id: 'pleaseTakeYourPackage' }),
  'Heading back to my dock': intl.formatMessage({ id: 'headingBackToMyDock' }),
  'Closing the lid': intl.formatMessage({ id: 'closingTheLid' }),
});

export const AvatarBackgroundColors = [
  '#004B66',
  '#B476DC',
  '#D34E87',
  '#7B5097',
  '#E7AB44',
  '#0AA15B',
  '#9F6A0D',
  '#186212',
  '#4B0AA1',
];

export const DeliverStatus = {
  NONE: 0,
  GO_TO_PICKUP: 1,
  NOTIFY_PICKUP: 2,
  AUTHORIZE_PICKUP: 3,
  LOAD_PACKAGE: 4,
  GO_TO_DROPOFF: 5,
  NOTIFY_DROPOFF: 6,
  AUTHORIZE_DROPOFF: 7,
  TAKE_PACKAGE: 8,
  DONE: 9,
  GO_TO_RETURN: 10,
  NOTIFY_RETURN: 11,
  AUTHORIZE_RETURN: 12,
  RETURN_PACKAGE: 13,
  RETURNED: 14,
};

export const GoToLocationStatus = {
  NONE: 0,
  GO_TO: 1,
  ARRIVED: 2,
};

export const IdleStatus = {
  NONE: 0,
  GO_TO_DOCK: 1,
  DOCKED: 2,
  IDLE: 3,
};
