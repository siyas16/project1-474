import React, { useState } from "react";
import "./App.css";
import elections from "./elections";
import elections2 from "./elections copy";
import MapsExample from "./maps";

function App() {
  const [selectedYear, setSelectedYear] = useState([2004]);

  const years = [2004, 2008, 2012, 2016, 2020];

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

      <svg width={1000} height={140} style={{ border: "2px solid black" }}>
        <text x={0} y={80} fontSize={15}>
          <tspan x="2" y="20">
            Above, I've created a map of the United States that shows which
            party, Democrat or Republican, won the Presidential election for the
            year
          </tspan>
          <tspan x="2" y="40">
            chosen by the user. I added the dropdown menu for year selection so
            that users could choose which year they'd like to see state party
            wins for.
          </tspan>
          <tspan x="2" y="60">
            Users can see how percentage of votes for the democratic candidate
            changed overtime in each state. As states become more democratic,
            they
          </tspan>
          <tspan x="2" y="80">
            turn darker blue. As states become less democratic, they turn darker
            red. Another feature I was considering implementing was allowing
            users to
          </tspan>
          <tspan x="2" y="100">
            click on states and seeing party wins per county in the state. I
            ultimately decided to implement the year filter first, then consider
            this feature.
          </tspan>
          <tspan x="2" y="120">
            because this seemed like a good first step and allows users to see
            more trends.
          </tspan>
        </text>
      </svg>
    </div>
  );
}

export default App;
