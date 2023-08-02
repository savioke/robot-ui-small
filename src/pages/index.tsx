import React from 'react';

//
/** Mui Components */
import { Container } from '@mui/material';

/** Components */
import RobotUi from 'components/RobotUi/RobotUi';

/** redux */

/** helpers */

export default function RobotUiPage() {
  return (
    <Container
      disableGutters
      maxWidth={false}
    >
      <RobotUi />
    </Container>
  );
}
