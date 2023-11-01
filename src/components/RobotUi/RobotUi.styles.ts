export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
    height: '100%',
    '&::after': {
      content: "''",
      position: 'absolute',
      left: 0,
      right: '81%',
      bottom: -40,
      margin: '0 auto',
      width: 0,
      height: 0,
      borderBottom: '50px solid white',
      borderLeft: '35px solid transparent',
    },
  },
  messageContainer: {
    width: '80%',
    minWidth: '1137px',
    position: 'relative',
  },
  paper: {
    height: '629px',
    padding: 2,
    marginBottom: -5,
    borderRadius: '20px',
  },
};
