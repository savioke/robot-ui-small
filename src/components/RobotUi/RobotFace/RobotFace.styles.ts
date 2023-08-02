import { DisplayScreenOptions } from 'appConstants';

export const styles = {
  eyesContainer: {
    width: '40%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  messageContainer: (displayScreen: string) => ({
    minWidth: '80%',
    position: 'relative',
    marginBottom: displayScreen !== DisplayScreenOptions.DeliverForm ? 7 : 3.5,
  }),
  paper: {
    minHeight: 144,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '5px solid white',
    flexDirection: 'column',
    padding: 2,
    '&::after': {
      content: "''",
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -9,
      margin: '0 auto',
      width: 0,
      height: 0,
      borderTop: '10px solid white',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
    },
  },
};
