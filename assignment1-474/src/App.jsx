import { scaleLinear, scaleBand, extent, line, symbol, csv } from "d3";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { uniq } from "lodash";
import crimes from "./hatecrimes";
import "./App.css";

function App() {
  const chartSize = 600;
  const margin = 10;
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

  crimes.forEach((crime) => {
    if (!motivationTotal[`${crime.year}`] && crime.motivation == "Race") {
      motivationTotal[`${crime.year}`] = 1;
    } else if (crime.motivation == "Race") {
      motivationTotal[`${crime.year}`] += 1;
    }
  });

  console.log(crimesTotal);
  console.log(allYears);
  console.log(motivationTotal);

  const year = uniq(crimes.year);

  const _scaleY = scaleLinear()
    .domain([5, 50])
    .range([chartSize - 100 - margin, margin]);

  return (
    <div className="App">
      <h1>How have hate crime patterns changed in San Diego overtime?</h1>
      <h2>
        What proportion of these hate crimes have been racially motivated?
      </h2>

      <svg width={chartSize} height={chartSize}>
        <AxisLeft strokeWidth={0} left="45" scale={_scaleY} />

        <text x="-300" y="13" transform="rotate(-90)" fontSize={15}>
          Number of Crimes
        </text>

        {allYears.map((num, i) => {
          const rectHeight = 10 * crimesTotal[num];
          return (
            <rect
              x={50 + i * 50}
              y={510 - rectHeight}
              width={40}
              height={rectHeight}
              fill={"black"}
            />
          );
        })}

        {allYears.map((num, i) => {
          const rectHeight = 10 * motivationTotal[num];
          return (
            <rect
              x={50 + i * 50}
              y={510 - rectHeight}
              width={40}
              height={rectHeight}
              fill={"blue"}
            />
          );
        })}

        {allYears.map((num, i) => {
          const rectHeight = 10 * crimesTotal[num];
          return (
            <text x={50 + i * 50} y={530} fill={"black"}>
              {" "}
              {num}{" "}
            </text>
          );
        })}

        <text x={150} y={550}>
          Year
        </text>

        <rect x={270} y={20} width={20} height={10} fill={"blue"} />

        <text x={300} y={30}>
          Racially Motivated Crimes
        </text>

        <rect x={270} y={50} width={20} height={10} fill={"black"} />

        <text x={300} y={60}>
          Crimes with Other Motivations
        </text>
      </svg>

      <svg width={chartSize} height={chartSize}>
        <text x={0} y={80} fontSize={15}>
          <tspan x="0" y="45">
            To answer my question, the visualization I chose to create is a bar
            chart with
          </tspan>
          <tspan x="0" y="65">
            columns. Bar charts are good for displaying magnitude. Usually, they
          </tspan>
          <tspan x="0" y="85">
            show a "counted" number. I worked with 3 variables: year, motivation
            of the crime,
          </tspan>
          <tspan x="0" y="105">
            and number of crimes. Number of crimes is a counted number, so it is
            good
          </tspan>
          <tspan x="0" y="125">
            to display on a bar chart. Additionally, I wanted to showcase a size
            comparison
          </tspan>
          <tspan x="0" y="145">
            (difference in amount of hate crimes overtime.) and bar charts are
            used for such
          </tspan>
          <tspan x="0" y="165">
            comparisons.
          </tspan>
          <tspan x="0" y="205">
            I used different colors for the bars, blue and black, to
            differentiate between
          </tspan>
          <tspan x="0" y="225">
            the different hate crime motivations. I made the left axis scale go
            up
          </tspan>
          <tspan x="0" y="245">
            by 5 so that the bar heights were easy to read. Also, I created a
            count variable
          </tspan>
          <tspan x="0" y="265">
            to count up how many crimes happened each year for each motivation
            category defined.
          </tspan>
          <tspan x="0" y="285">
            All these decisions were necessary to communicate the story I wanted
            to tell:
          </tspan>
          <tspan x="0" y="305">
            the variation in number of hate crimes per year and variation in
            racially motivated
          </tspan>
          <tspan x="0" y="325">
            hate crimes per year.
          </tspan>
        </text>
      </svg>
    </div>
  );
}

export default App;
