import { scaleLinear, scaleBand, extent, line, symbol, csv } from "d3";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { uniq } from "lodash";
import crimes from "./hatecrimes";
import "./App.css";

function App() {
  const chartSize = 600;
  const margin = 10;
  const motivation = uniq(crimes.motivation);
  const crimesTotal = {};
  const allYears = [];
  const motivationTotal = {};

  crimes.forEach((crime) => {
    // increment counter by year in crimesTotal obj
    if (!crimesTotal[`${crime.year}`]) {
      crimesTotal[`${crime.year}`] = 1;
      allYears.push(`${crime.year}`);
    } else {
      crimesTotal[`${crime.year}`] += 1;
    }
  });

  console.log(crimesTotal);
  console.log(allYears);

  const year = uniq(crimes.year);

  const _scaleY = scaleLinear()
    .domain([5, 50])
    .range([chartSize - 100 - margin, margin]);

  return (
    <div className="App">
      <h1>Hate Crimes in San Diego</h1>
      <svg width={chartSize} height={chartSize}>
        <AxisLeft strokeWidth={0} left="35" scale={_scaleY} />

        {allYears.map((num, i) => {
          const rectHeight = 10 * crimesTotal[num];
          return (
            <rect
              x={30 + i * 50}
              y={500 - rectHeight}
              width={20}
              height={rectHeight}
              fill={"black"}
            />
          );
        })}

        {allYears.map((num, i) => {
          const rectHeight = 10 * crimesTotal[num];
          return (
            <text x={30 + i * 50} y={530} fill={"blue"}>
              {" "}
              {num}{" "}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

export default App;
