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
        <a
          href="https://www.nationalgeographic.com/news/2017/09/climate-change-costs-us-economy-billions-report/"
          target="_blank"
        >
          Cost of Climate Change
        </a>
        <a
          href="https://oceanservice.noaa.gov/facts/sealevel.html#:~:text=The%20two%20major%20causes%20of,as%20glaciers%20and%20ice%20sheets."
          target="_blank"
        >
          Rising Sea Levels
        </a>
        <a
          href="https://davidsuzuki.org/what-you-can-do/top-10-ways-can-stop-climate-change/"
          target="_blank"
        >
          Combat Climate Change
        </a>
        <a
          href="https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement"
          target="_blank"
        >
          Paris Climate Agreement
        </a>
      </div>
    </div>
  );
};

export default NavMenu;
