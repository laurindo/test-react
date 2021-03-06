import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Index } from './views/cars/Index';
import { CarDetails } from './views/cars/CarDetails';
import { MyOrders } from './views/orders/MyOrders';
import Header from './components/Header';
import Footer from './components/Footer';
import NoMatchScreen from './views/NoMatchScreen';
import ErrorBoundary from './errors';

export const RouterApp = () => {
  return (
    <HashRouter>
      <ErrorBoundary>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/car/:id" component={CarDetails} />
            <Route path="/my-orders" component={MyOrders} />
            <Route path="*" component={NoMatchScreen} />
          </Switch>
          <Footer />
        </div>
      </ErrorBoundary>
    </HashRouter>
  );
};
