import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
// Layout
import MainLayout from './layouts/MainLayout';
// Pages
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout path="/" exact Component={Home} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
