import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
// Layout
import MainLayout from './layouts/MainLayout';
// Pages
import Home from './pages/Home';
// Theme Provider
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './utilities/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <MainLayout path="/" exact Component={Home} />

        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
