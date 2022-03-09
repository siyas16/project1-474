import React, { useState } from "react";
import "./App.css";
import elections from "./elections";
import elections2 from "./elections copy";
import MapsExample from "./maps";
import Popup from "./popup";

function App() {
  const [selectedYear, setSelectedYear] = useState([2004]);

  const years = [2004, 2008, 2012, 2016, 2020];

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <h1>Which party won each state in {selectedYear}?</h1>
      <label>Select a year </label>
      <select
        name="selectList"
        id="selectList"
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        {years.map((year, i) => {
          return (
            <option key={i} value={year}>
              {year}
            </option>
          );
        })}
      </select>

      <MapsExample yearSelected={selectedYear} />
    </div>
  );
}

export default App;
