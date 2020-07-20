import * as React from 'react';
import Context from '../../context';

const CoordinateSearch = () => {
  const [context, setContext] = React.useContext(Context);

  return (
    <div className="coordindate-search">
      <div className="input-wrapper">
        <p>Lng:</p>
        <input type="text" value={context.longitude} />
      </div>
      <div className="input-wrapper">
        <p>Lat:</p>
        <input type="text" value={context.latitude} />
      </div>
    </div>
  );
};

export default CoordinateSearch;
