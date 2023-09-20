
import { useState } from "react";

const Event = ({ event }) => {
  const [details, setDetails] = useState(false);
   const handleDetails = () => {
    setDetails(!details);
  };

  return (
      <li>
        <div className='event'>
          <h1>{event.summary}</h1>
          <h2>{event.location}</h2>
          <h2>{event.created}</h2>
          {details ?
        <p >{event.description}</p> :
        null
      }
          <button onClick={handleDetails}>
              {!details ? 'Show Details' : 'Hide Details'}
          </button>
        </div>
      </li>
  );
}

export default Event;