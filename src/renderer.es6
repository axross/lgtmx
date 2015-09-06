import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';

import store from './store';
import Application from './Application';
import {
  IndexRoute,
} from './routes';

const router = history => (
  <Router history={history}>
    <Route component={Application}>
      <Route
        path="/"
        component={IndexRoute}
      />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  const history = new HashHistory();

  React.render(
    <Provider store={store}>
      {() => router(history)}
    </Provider>,
    document.body
  );
});
