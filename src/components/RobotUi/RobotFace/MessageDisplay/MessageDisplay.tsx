import React from 'react';
import { useSelector } from 'typeDux';

/** Mui Components */

/** Components */
import DeliverForm from './DeliverForm/DeliverForm';
import Dashboard from './Dashboard/Dashboard';
import MingleForm from './MingleForm/MingleForm';
import { Button, Text } from 'shared-components';

/** styles */

/** redux */
import { getDisplayMessage, getDisplayScreen } from 'state/ui/ui.selectors';

/** helpers */
import { DisplayScreenOptions } from 'appConstants';

interface MessageDisplayProps {
  formRef: React.RefObject<HTMLFormElement>;
}

export default function MessageDisplay({ formRef }: MessageDisplayProps) {
  const displayMessage = useSelector(getDisplayMessage);
  const displayScreen = useSelector(getDisplayScreen);

  if (displayMessage) {
    return (
      <>
        <Text variant='h2'>{displayMessage}</Text>
        {/* TODO: What to emit here to confirm the user has pressed button? */}
        <Button>Done</Button>
      </>
    );
  } else if (displayScreen === DisplayScreenOptions.Dashboard) {
    return <Dashboard />;
  } else if (displayScreen === DisplayScreenOptions.DeliverForm) {
    return <DeliverForm formRef={formRef} />;
  } else if (displayScreen === DisplayScreenOptions.MingleForm) {
    return <MingleForm formRef={formRef} />;
  }

  return <Text variant='h2'>Hello, I'm Hal</Text>;
}
