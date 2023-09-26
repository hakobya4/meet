import moment from 'moment';
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
          <h2>{moment(event.created).format('MMMM Do YYYY, h:mm:ss a')}</h2>
          {details ?
        <p className="details">{event.description}</p> :
        null
      }
          <button className='details-btn' onClick={handleDetails}>
              {!details ? 'Show Details' : 'Hide Details'}
          </button>
        </div>
      </li>
  );
}

export default Event;