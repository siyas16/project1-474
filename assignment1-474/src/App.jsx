import { scaleLinear, scaleBand, extent, line, symbol, csv } from "d3";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { uniq } from "lodash";
import crimes from "./hatecrimes";
import census from "./census";
import './App.css'

function App() {
  const chartSize = 500;
  const margin = 20;
  const motivation = uniq(crimes.motivation);  

  const year = uniq(census.year);
  const pop = census.people;

  const _scaleY = scaleLinear()
    .domain([0, 10000000])
    .range([chartSize - margin, margin]);

  const _scaleYear = scaleBand()
    .domain(year)
    .range([0, chartSize - margin - margin]);

  return (
    <div className="App">
      <h1>Hate Crimes in San Diego</h1>
      <svg width={chartSize} height={chartSize} >
      
      <AxisLeft strokeWidth={0} left="60" scale={_scaleY} />
      <AxisBottom
            strokeWidth={0}
            top={chartSize - margin}
            left={margin}
            scale={_scaleYear}
            tickValues={year}
          />
      </svg>
      
    </div>
  );
  
}

export default App
