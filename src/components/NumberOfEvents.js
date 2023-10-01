import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [query, setQuery] = useState("32");
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setQuery(value);

    let errorText;
    if (value <= 0 || isNaN(value)) {
      errorText = "Only positive numbers are allowed";
    } else {
      errorText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <label>Number of Events: </label>
      <input
        type="text"
        className="eventAmount"
        placeholder="Number of Events"
        value={query}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
