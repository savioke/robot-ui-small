export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
    height: '100%',
    marginBottom: -4,
    '&::after': {
      content: "''",
      position: 'absolute',
      left: 0,
      right: '84%',
      bottom: -32,
      margin: '0 auto',
      width: 0,
      height: 0,
      borderBottom: '50px solid white',
      borderLeft: '50px solid transparent',
    },
  },
  messageContainer: {
    width: '80%',
    minWidth: '1137px',
    position: 'relative',
  },
  paper: {
    minHeight: '500px',
    padding: 2,
    marginBottom: -4,
    borderRadius: '20px',
  },
  keypadContainer: {
    flex: 0.8,
  },
};
