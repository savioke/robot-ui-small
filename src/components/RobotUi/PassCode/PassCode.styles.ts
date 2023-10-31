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
    height: '613px',
    padding: 2,
    marginBottom: -5,
    borderRadius: '20px',
  },
  keypadContainer: {
    flex: 0.8,
  },
  textfield: {
    '& .MuiInput-root': { fontSize: '100px' },
    // https://stackoverflow.com/questions/70361697/how-to-change-text-color-of-disabled-mui-text-field-mui-v5
    '& .MuiInputBase-input.Mui-disabled': {
      WebkitTextFillColor: '#000000',
    },
  },
  textFieldContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  roomNumberContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  innerPaper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '55px',
  },
};
