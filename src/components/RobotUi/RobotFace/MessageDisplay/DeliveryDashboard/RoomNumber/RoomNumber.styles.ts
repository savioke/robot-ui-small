export const styles = {
  textfield: {
    '& .MuiInput-root': { fontSize: '100px' },
    '& .MuiInputBase-input.Mui-disabled': {
      WebkitTextFillColor: '#000000',
    },
  },
  textFieldContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    marginLeft: 3,
    justifyContent: 'center',
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
};
