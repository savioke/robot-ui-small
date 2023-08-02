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
  messageContainer: {
    minWidth: '80%',
    position: 'relative',
    marginBottom: 7,
  },
  paper: {
    minHeight: 184,
    display: 'flex',
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
