import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [query, setQuery] = useState("32");
  const handleInputChanged = (event) => {
    
    const value = event.target.value;
    setCurrentNOE(value);
    setQuery(value);
  };
  
  return (
    <div id="number-of-events">
      <label >Number of Events: </label>
      <input
        type="text"
        className="eventAmount"
        placeholder="Number of Events"
        value={query}
        onChange={handleInputChanged}
      />
    </div>
 )
}

export default NumberOfEvents;