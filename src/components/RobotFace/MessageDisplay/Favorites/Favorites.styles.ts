export const styles = {
  avatar: {
    minWidth: '132px',
    minHeight: '132px',
    borderRadius: '30px',
    fontSize: '70px',
  },
  rootContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  dashboardContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 2,
  },
  paperContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '144px',
    borderRadius: '30px',
  },
  settingsIcon: {
    fontSize: 112,
  },
  boldFont: {
    fontWeight: 600,
  },
  title: {
    marginLeft: 7,
    marginBottom: 3,
  },
  favoriteButton: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  goButton: {
    width: '350px',
    fontSize: '24px',
    backgroundColor: '#0AA15B',
    '&:hover': {
      backgroundColor: '#0AA15B',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  checkbox: {
    padding: 0,
  },
};
