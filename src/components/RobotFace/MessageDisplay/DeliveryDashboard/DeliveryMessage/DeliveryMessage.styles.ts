export const styles = {
  textfield: {
    fontSize: '24px',
    '& .MuiInput-root': { fontSize: '100px' },
  },
  textFieldContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginRight: 5,
    // TODO: Hacky way to not have the arrow :after from covering the outline
    zIndex: 2000,
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
    marginTop: 5,
    marginLeft: 3,
  },
};
