import React from 'react';
import { useSelector } from 'typeDux';

/** Mui Components */

/** Components */
import PassCode from './PassCode/PassCode';
import RobotFace from './RobotFace/RobotFace';
import Settings from './Settings/Settings';

/** redux */
import { getDisplayScreen } from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';
import RoomNumber from './RobotFace/MessageDisplay/DeliveryDashboard/RoomNumber/RoomNumber';
import RoomMessage from './RobotFace/MessageDisplay/DeliveryDashboard/RoomMessage/RoomMessage';
import RoomSummary from './RobotFace/MessageDisplay/DeliveryDashboard/RoomSummary/RoomSummary';

export default function RobotUi() {
  const displayScreen = useSelector(getDisplayScreen);

  if (displayScreen === DisplayScreenOptions.PassCode) {
    return <PassCode />;
  } else if (displayScreen === DisplayScreenOptions.Settings) {
    return <Settings />;
  } else if (displayScreen === DisplayScreenOptions.RoomNumber) {
    return <RoomNumber />;
  } else if (displayScreen === DisplayScreenOptions.RoomMessage) {
    return <RoomMessage />;
  } else if (displayScreen === DisplayScreenOptions.RoomSummary) {
    return <RoomSummary />;
  }

  return <RobotFace />;
}
