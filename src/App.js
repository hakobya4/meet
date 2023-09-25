import CitySearch from './components/CitySearch';
import CityEventsChart from './components/CityEventsChart';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import { InfoAlert } from './components/Alert';
import { ErrorAlert } from './components/Alert';
import { WarningAlert } from './components/Alert';

import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities"); 
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    let warningText
    if (navigator.onLine) {
     warningText = ""
   } else {
    warningText = "You are offline, events may not update"
   }
   setWarningAlert(warningText)
    fetchData();
  }, [currentCity , currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
      </div>
      <div className="error-container">
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
      </div>
      <div className="warning-container">
        {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
      </div>
      <CitySearch 
      allLocations={allLocations} 
      setCurrentCity={setCurrentCity}
      setInfoAlert={setInfoAlert}/>
      <NumberOfEvents 
      setCurrentNOE={setCurrentNOE} 
      setErrorAlert={setErrorAlert}/>
      <CityEventsChart allLocations={allLocations} events={events} />
      <EventList events={events}/>
    </div>
  );
}

export default App;