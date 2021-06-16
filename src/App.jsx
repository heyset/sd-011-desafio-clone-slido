import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Answered, Home, NotFound } from './pages';

import './App.css';

function App() {
  return (
    <>
      <header>
        Desafio de Clone do Sli.do
      </header>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/answered" component={ Answered } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>

      <footer>
        copyright com ctz aqui
      </footer>
    </>
  );
}

export default App;
