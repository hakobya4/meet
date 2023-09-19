import mockData from '../mock-data';
import { useState } from "react";

const Event = () => {
  const [details, setDetails] = useState(false);
   const handleDetails = () => {
    setDetails(!details);
  };

  return (
      <li>
        <div className='eventDetails'>
          <h1>{mockData[0].summary}</h1>
          <h2>{mockData[0].location}</h2>
          <h2>{mockData[0].created}</h2>
          <button onClick={handleDetails}>
              {!details ? 'Show Details' : 'Hide Details'}
          </button>
        </div>
        {details? (
        <div className='eventKind'>
          <h1>{mockData[0].kind}</h1>
        </div>): null}
      </li>
  );
}

export default Event;