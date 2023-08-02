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

export default function RobotUi() {
  const displayScreen = useSelector(getDisplayScreen);

  if (displayScreen === DisplayScreenOptions.PassCode) {
    return <PassCode />;
  } else if (displayScreen === DisplayScreenOptions.Settings) {
    return <Settings />;
  }

  return <RobotFace />;
}
