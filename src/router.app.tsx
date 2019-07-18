import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Index } from './views/cars/Index';
import { CarDetails } from './views/cars/CarDetails';
import Header from './components/Header';
import NoMatchScreen from './views/NoMatchScreen';

export const RouterApp = () => {
  return (
    <Router>
      <div>
        <Header />]
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/car/:id" component={CarDetails} />
          <Route path="*" component={NoMatchScreen} />
        </Switch>
      </div>
    </Router>
  );
};
