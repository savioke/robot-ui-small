export const styles = {
  textfield: {
    '& .MuiInput-root': {
      fontSize: '100px',
    },
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
  leftSideContent: {
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
  contentContainer: {
    marginLeft: 3,
  },
};
