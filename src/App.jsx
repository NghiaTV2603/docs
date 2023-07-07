// eslint-disable-next-line no-unused-vars
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as colors from '@mui/material/colors';
import routes from './app/routes.jsx';
function App() {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: colors.blue[500],
            light: colors.blue[700],
            dark: colors.blue[300],
          },
          secondary: {
            main: colors.pink[500],
            light: colors.pink[700],
            dark: colors.pink[300],
          },
          grey: {
            ...colors.grey,
            850: '#2d2d2d',
          },
        },
      }),
    [],
  );
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
}

export default App;
