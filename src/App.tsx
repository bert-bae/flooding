import * as React from 'react';
import { hot } from 'react-hot-loader';
import './styles/index.scss';

import NavigationBar from './components/navigation-bar';
import Map from './components/map';

const App = () => {
  return (
    <div className="container">
      <NavigationBar />
      <Map />
    </div>
  );
};

export default hot(module)(App);
