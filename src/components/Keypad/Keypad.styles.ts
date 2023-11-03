export const styles = {
  keypadContainer: {
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
  numberButtons: {
    backgroundColor: '#414141',
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    fontSize: '32px',
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
  backSpaceIcon: {
    color: 'white',
  },
  iconButtonHover: {
    '&:hover': {
      backgroundColor: '#0AA15B',
    },
  },
  confirmButton: {
    height: '65px',
    fontSize: '24px',
    backgroundColor: '#0AA15B',
  },
  confirmButtonGridItem: {
    display: 'flex',
    alignItems: 'center',
  },
};
