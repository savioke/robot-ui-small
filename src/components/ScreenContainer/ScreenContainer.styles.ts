export const styles = {
  container: (stateTheme: string) => ({
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    backgroundImage: `${stateTheme}`,
    backgroundSize: 'cover',
    paddingRight: 2,
    paddingLeft: 1,
  }),
};
