import { useState } from 'react';

const NavMenu = () => {
  const [toggle, setToggle] = useState(false);

  const toggler = (current) => {
    return setToggle(!current);
  };

  return (
    <div className={`app-menu ${toggle ? 'toggled' : ''}`}>
      <img
        className="menu-icon"
        src="/menu.png"
        onClick={() => toggler(toggle)}
      />
      <div className="menu-list">
        <a>hello world</a>
      </div>
    </div>
  );
};

export default NavMenu;
