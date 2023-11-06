const messageText = '30px';

export const styles = {
  leftSideTextContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginRight: 5,
    marginLeft: 3,
    marginTop: 6,
  },
  leftSideContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rightSideContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-end',
  },
  button: {
    height: '65px',
    width: '350px',
    fontSize: '24px',
    backgroundColor: '#0AA15B',
  },
  confirmTextContainer: {
    marginBottom: 2,
  },
  messageTextContainer: {
    width: '75%',
  },
  gridItem: {
    display: 'flex',
  },
  summaryTextContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  deliveryTitle: {
    fontSize: '55px',
  },
  messageText: {
    marginLeft: 2,
    fontSize: messageText,
  },
  whatIWillSayText: {
    fontSize: '35px',
    marginBottom: 2,
  },
  list: {
    listStyleType: 'decimal',
    marginLeft: 5,
  },
  listItemText: {
    display: 'list-item',
    fontSize: '24px',
    color: '#707070',
  },
  errorMessageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  errorMessage: {
    fontSize: messageText,
  },
};
