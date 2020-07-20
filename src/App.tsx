import * as React from 'react';
import { hot } from 'react-hot-loader';
import './styles/index.scss';

import Context from './context';
import NavigationBar from './components/navigation-bar';
import Map from './components/map';

const App = () => {
  const [context, setContext] = React.useState(null);
  return (
    <div className="container">
      <Context.Provider value={[context, setContext]}>
        <NavigationBar />
        <Map />
      </Context.Provider>
    </div>
  );
};

export default hot(module)(App);
