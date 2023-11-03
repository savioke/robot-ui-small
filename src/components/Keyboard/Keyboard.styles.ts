export const styles = {
  keyboardContainer: {
    flex: 1,
  },
  gridContainer: {
    minHeight: '620px',
  },
  iconButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  iconButton: {
    paddingLeft: 0,
    width: '75px',
    height: '75px',
  },
  numberButtons: {
    backgroundColor: '#414141',
    height: '100%',
    width: '100%',
    borderRadius: '10px',
    fontSize: '34px',
    fontWeight: 600,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:active': {
      backgroundColor: '#BBBBBB',
    },
    '&:focus': {
      backgroundColor: '#BBBBBB',
    },
  },
  confirmButton: {
    width: '100%',
    height: '65px',
    fontSize: '24px',
    backgroundColor: '#0AA15B',
  },
  spaceButton: {
    width: '100%',
    height: '65px',
    backgroundColor: '#414141',
    fontSize: '24px',
  },
  backspaceIcon: {
    color: 'white',
  },
  transformButton: {
    width: '100%',
    height: '65px',
    color: '#414141',
    borderColor: '#414141',
    fontSize: '24px',
    '&:hover': {
      borderColor: '#414141',
    },
  },
  capitalizeButton: {
    width: '100%',
    height: '65px',
    backgroundColor: '#414141',
    fontSize: '24px',
  },
};
