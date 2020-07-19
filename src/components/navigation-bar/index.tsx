import React from 'react';
import NavMenu from './nav-menu';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="app-title">Flooding</div>
      <NavMenu />
    </div>
  );
};

export default NavigationBar;
