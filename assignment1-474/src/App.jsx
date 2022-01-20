import { scaleLinear, scaleBand, extent, line, symbol, csv } from "d3";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { uniq } from "lodash";
import crimes from "./hatecrimes";
import './App.css'

function App() {
  const chartSize = 500;
  const margin = 30;
  const motivation = uniq(crimes.motivation);  

  return (
    <div className="App">
      <h1>Hate Crimes in San Diego</h1>
      <svg width={chartSize} height={chartSize} style={{ border: "2px solid black" }}>
      
    

      </svg>
      
    </div>
  );
  
}

export default App
