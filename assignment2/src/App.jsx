import { useState } from "react";
import logo from "./logo.svg";
import { AxisLeft, AxisBottom } from "@visx/axis";
import "./App.css";
import crimes from "./hatecrimes";
import { scaleLinear, extent, line } from "d3";
import * as d3 from "d3";
import elections from "./elections";
import elections2 from "./elections copy";

function App() {
  const data2016 = [];
  elections.forEach((counties, i) => {
    if (counties.year == 2016) {
      data2016.push(counties);
    }
  });

  const dems2016 = [];
  data2016.forEach((counties, i) => {
    if (counties.party == "DEMOCRAT") {
      dems2016.push(counties);
    }
  });

  const reps2016 = [];
  data2016.forEach((counties, i) => {
    if (counties.party == "REPUBLICAN") {
      reps2016.push(counties);
    }
  });

  const allStates = [];
  const dems2016totals = {};
  const allPos = [];
  dems2016.forEach((counties) => {
    if (!dems2016totals[counties.state]) {
      dems2016totals[counties.state] = parseInt(counties.candidatevotes);
    } else {
      var votes = parseInt(counties.candidatevotes);
      dems2016totals[counties.state] += votes;
    }
  });

  const reps2016totals = {};
  reps2016.forEach((counties) => {
    if (!reps2016totals[counties.state]) {
      reps2016totals[counties.state] = parseInt(counties.candidatevotes);
      allStates.push(counties.state);
      allPos.push(counties.state_po);
    } else {
      var votes = parseInt(counties.candidatevotes);
      reps2016totals[counties.state] += votes;
    }
  });

  const totals2016 = {};
  data2016.forEach((counties) => {
    if (!totals2016[counties.state]) {
      totals2016[counties.state] = parseInt(counties.candidatevotes);
    } else {
      var votes = parseInt(counties.candidatevotes);
      totals2016[counties.state] += votes;
    }
  });

  const data2020 = [];
  elections.forEach((counties, i) => {
    if (counties.year == 2020) {
      data2020.push(counties);
    }
  });

  const dems2020 = [];
  data2020.forEach((counties, i) => {
    if (counties.party == "DEMOCRAT") {
      dems2020.push(counties);
    }
  });

  const reps2020 = [];
  data2020.forEach((counties, i) => {
    if (counties.party == "REPUBLICAN") {
      reps2020.push(counties);
    }
  });

  const green2020 = [];
  data2020.forEach((counties, i) => {
    if (counties.party == "GREEN") {
      green2020.push(counties);
    }
  });

  const lib2020 = [];
  data2020.forEach((counties, i) => {
    if (counties.party == "LIBERTARIAN") {
      lib2020.push(counties);
    }
  });

  const other2020 = [];
  data2020.forEach((counties, i) => {
    if (counties.party == "OTHER") {
      other2020.push(counties);
    }
  });

  const dems2020totals = {};
  dems2020.forEach((counties) => {
    if (!dems2020totals[counties.state]) {
      dems2020totals[counties.state] = parseInt(counties.candidatevotes);
    } else {
      var votes = parseInt(counties.candidatevotes);
      dems2020totals[counties.state] += votes;
    }
  });

  const reps2020totals = {};
  reps2020.forEach((counties) => {
    if (!reps2020totals[counties.state]) {
      reps2020totals[counties.state] = parseInt(counties.candidatevotes);
    } else {
      var votes = parseInt(counties.candidatevotes);
      reps2020totals[counties.state] += votes;
    }
  });

  const green2020totals = {};
  green2020.forEach((counties) => {
    if (!green2020totals[counties.state]) {
      green2020totals[counties.state] = parseInt(counties.candidatevotes);
    } else {
      var votes = parseInt(counties.candidatevotes);
      green2020totals[counties.state] += votes;
    }
  });

  const lib2020totals = {};
  lib2020.forEach((counties) => {
    if (!lib2020totals[counties.state]) {
      lib2020totals[counties.state] = parseInt(counties.candidatevotes);
    } else {
      var votes = parseInt(counties.candidatevotes);
      lib2020totals[counties.state] += votes;
    }
  });

  const other2020totals = {};
  other2020.forEach((counties) => {
    if (!other2020totals[counties.state]) {
      other2020totals[counties.state] = parseInt(counties.candidatevotes);
    } else {
      var votes = parseInt(counties.candidatevotes);
      other2020totals[counties.state] += votes;
    }
  });

  const totals2020 = {};
  data2020.forEach((counties) => {
    if (!totals2020[counties.state]) {
      totals2020[counties.state] = parseInt(counties.candidatevotes);
    } else {
      var votes = parseInt(counties.candidatevotes);
      totals2020[counties.state] += votes;
    }
  });

  const data2000 = [];
  elections2.forEach((counties, i) => {
    if (counties.year == 2000) {
      data2000.push(counties);
    }
  });

  const totals2000 = {};
  data2000.forEach((counties) => {
    if (!totals2000[counties.state]) {
      totals2000[counties.state] = parseInt(counties.candidatevotes);
    } else {
      var votes = parseInt(counties.candidatevotes);
      totals2000[counties.state] += votes;
    }
  });

  const data2004 = [];
  elections2.forEach((counties, i) => {
    if (counties.year == 2004) {
      data2004.push(counties);
    }
  });

  const totals2004 = {};
  data2004.forEach((counties) => {
    if (!totals2004[counties.state]) {
      totals2004[counties.state] = parseInt(counties.candidatevotes);
    } else {
      var votes = parseInt(counties.candidatevotes);
      totals2004[counties.state] += votes;
    }
  });

  const data2008 = [];
  elections2.forEach((counties, i) => {
    if (counties.year == 2008) {
      data2008.push(counties);
    }
  });

  const totals2008 = {};
  data2008.forEach((counties) => {
    if (!totals2008[counties.state]) {
      totals2008[counties.state] = parseInt(counties.candidatevotes);
    } else {
      var votes = parseInt(counties.candidatevotes);
      totals2008[counties.state] += votes;
    }
  });

  const data2012 = [];
  elections2.forEach((counties, i) => {
    if (counties.year == 2012) {
      data2012.push(counties);
    }
  });

  const totals2012 = {};
  data2012.forEach((counties) => {
    if (!totals2012[counties.state]) {
      totals2012[counties.state] = parseInt(counties.candidatevotes);
    } else {
      var votes = parseInt(counties.candidatevotes);
      totals2012[counties.state] += votes;
    }
  });

  const allYears = [2000, 2004, 2008, 2012, 2016, 2020];
  const allYearsTotals = {
    2000: 0,
    2004: 0,
    2008: 0,
    2012: 0,
    2016: 0,
    2020: 0,
  };

  allStates.forEach((i) => {
    if (!isNaN(totals2000[i])) {
      allYearsTotals[2000] += totals2000[i];
    }

    if (!isNaN(totals2004[i])) {
      allYearsTotals[2004] += totals2004[i];
    }

    if (!isNaN(totals2008[i])) {
      allYearsTotals[2008] += totals2008[i];
    }

    if (!isNaN(totals2012[i])) {
      allYearsTotals[2012] += totals2012[i];
    }
    if (!isNaN(totals2016[i])) {
      allYearsTotals[2016] += totals2016[i];
    }
    if (!isNaN(totals2020[i])) {
      allYearsTotals[2020] += totals2020[i];
    }
  });

  const cal2020 =
    lib2020totals["CALIFORNIA"] +
    dems2020totals["CALIFORNIA"] +
    reps2020totals["CALIFORNIA"] +
    green2020totals["CALIFORNIA"] +
    other2020totals["CALIFORNIA"];

  totals2020["CALIFORNIA"] = cal2020;

  /*console.log(lib2020totals["MICHIGAN"]);
  console.log(dems2020totals["MICHIGAN"]);
  console.log(reps2020totals["MICHIGAN"]);
  console.log(green2020totals["MICHIGAN"]);
  console.log(other2020totals["MICHIGAN"]);

  console.log(lib2020totals["FLORIDA"]);
  console.log(dems2020totals["FLORIDA"]);
  console.log(reps2020totals["FLORIDA"]);
  console.log(green2020totals["FLORIDA"]);
  console.log(other2020totals["FLORIDA"]); */

  return (
    <div className="App">
      <div style={{ marginBottom: 200 }}>
        <h1>2000-2020 US Presidential Election Data</h1>

        <svg width={1000} height={100}>
          <text x="380" y="15" font-size={20} font-weight="bold">
            Distribution of County Votes 2016
          </text>
          {data2016.map((county, i) => {
            return (
              <line
                key={i}
                x1={county.totalvotes}
                y1={30}
                x2={county.totalvotes}
                y2={80}
                style={{ fill: "none", stroke: "black" }}
              />
            );
          })}
        </svg>

        <svg width={1000} height={90}>
          <text x="380" y="15" font-size={20} font-weight="bold">
            Distribution of County Votes 2020
          </text>
          {data2020.map((county, i) => {
            return (
              <line
                key={i}
                x1={county.totalvotes}
                y1={30}
                x2={county.totalvotes}
                y2={80}
                style={{ fill: "none", stroke: "black" }}
              />
            );
          })}
        </svg>

        <svg width={1100} height={300}>
          <text x="300" y="50" font-size={20} font-weight="bold">
            Percentage of State Votes for Democratic Candidate 2016 vs 2020
          </text>
          {allStates.map((num, i) => {
            const rectHeight = (dems2016totals[num] / totals2016[num]) * 100;
            return (
              <rect
                x={20 + i * 20}
                y={180 - rectHeight}
                width={10}
                height={rectHeight}
                fill={"steelblue"}
              />
            );
          })}

          {allStates.map((num, i) => {
            const rectHeight = (dems2020totals[num] / totals2020[num]) * 100;
            return (
              <rect
                x={30 + i * 20}
                y={180 - rectHeight}
                width={8}
                height={rectHeight}
                fill={"navy"}
              />
            );
          })}

          {allPos.map((state, i) => {
            return (
              <text x={20 + i * 20} y={190} fill={"black"} font-size={11}>
                {" "}
                {state}{" "}
              </text>
            );
          })}
        </svg>

        <svg width={1100} height={250}>
          <text x="300" y="50" font-size={20} font-weight="bold">
            Percentage of State Votes for Republican Candidate 2016 vs 2020
          </text>
          {allStates.map((num, i) => {
            const rectHeight = (reps2016totals[num] / totals2016[num]) * 100;
            return (
              <rect
                x={20 + i * 20}
                y={200 - rectHeight}
                width={10}
                height={rectHeight}
                fill={"salmon"}
              />
            );
          })}

          {allStates.map((num, i) => {
            const rectHeight = (reps2020totals[num] / totals2020[num]) * 100;
            return (
              <rect
                x={30 + i * 20}
                y={200 - rectHeight}
                width={8}
                height={rectHeight}
                fill={"maroon"}
              />
            );
          })}

          {allPos.map((state, i) => {
            return (
              <text x={20 + i * 20} y={210} fill={"black"} font-size={10}>
                {" "}
                {state}{" "}
              </text>
            );
          })}
        </svg>

        <svg width={500} height={300}>
          <text x="10" y="20" font-size={18} font-weight="bold">
            Battleground State Party Vote Distribution: Michigan
          </text>
          <rect
            x={10}
            y={40}
            width={dems2020totals["MICHIGAN"] / 10000}
            height={10}
            fill={"black"}
          />

          <rect
            x={10}
            y={80}
            width={reps2020totals["MICHIGAN"] / 10000}
            height={10}
            fill={"black"}
          />

          <rect
            x={10}
            y={120}
            width={lib2020totals["MICHIGAN"] / 1000}
            height={10}
            fill={"black"}
          />

          <rect
            x={10}
            y={160}
            width={green2020totals["MICHIGAN"] / 1000}
            height={10}
            fill={"black"}
          />

          <rect
            x={10}
            y={200}
            width={other2020totals["MICHIGAN"] / 1000}
            height={10}
            fill={"black"}
          />
        </svg>

        <svg width={600} height={300}>
          <text x="10" y="20" font-size={18} font-weight="bold">
            Battleground State Party Vote Distribution: Florida
          </text>

          <rect
            x={10}
            y={40}
            width={reps2020totals["FLORIDA"] / 10000}
            height={10}
            fill={"black"}
          />

          <rect
            x={10}
            y={80}
            width={dems2020totals["FLORIDA"] / 10000}
            height={10}
            fill={"black"}
          />

          <rect
            x={10}
            y={120}
            width={lib2020totals["FLORIDA"] / 1000}
            height={10}
            fill={"black"}
          />

          <rect
            x={10}
            y={160}
            width={green2020totals["FLORIDA"] / 1000}
            height={10}
            fill={"black"}
          />

          <rect
            x={10}
            y={200}
            width={other2020totals["FLORIDA"] / 1000}
            height={10}
            fill={"black"}
          />
        </svg>

        <svg width={500} height={500}>
          <text x="100" y="30" font-size={20} font-weight="bold">
            Number of Voters in the US 2000-2020
          </text>
          <circle
            cx={150}
            cy={300 - allYearsTotals[2000] / 1000000}
            r={2}
            fill={"black"}
          />

          <line
            x1={150}
            y1={300 - allYearsTotals[2000] / 1000000}
            x2={200}
            y2={300 - allYearsTotals[2004] / 1000000}
            style={{ fill: "none", stroke: "black" }}
          />

          <circle
            cx={200}
            cy={300 - allYearsTotals[2004] / 1000000}
            r={2}
            fill={"black"}
          />

          <line
            x1={200}
            y1={300 - allYearsTotals[2004] / 1000000}
            x2={250}
            y2={300 - allYearsTotals[2008] / 1000000}
            style={{ fill: "none", stroke: "black" }}
          />

          <circle
            cx={250}
            cy={300 - allYearsTotals[2008] / 1000000}
            r={2}
            fill={"black"}
          />

          <line
            x1={250}
            y1={300 - allYearsTotals[2008] / 1000000}
            x2={300}
            y2={300 - allYearsTotals[2012] / 1000000}
            style={{ fill: "none", stroke: "black" }}
          />

          <circle
            cx={300}
            cy={300 - allYearsTotals[2012] / 1000000}
            r={2}
            fill={"black"}
          />

          <line
            x1={300}
            y1={300 - allYearsTotals[2012] / 1000000}
            x2={350}
            y2={300 - allYearsTotals[2016] / 1000000}
            style={{ fill: "none", stroke: "black" }}
          />

          <circle
            cx={350}
            cy={300 - allYearsTotals[2016] / 1000000}
            r={2}
            fill={"black"}
          />

          <line
            x1={350}
            y1={300 - allYearsTotals[2016] / 1000000}
            x2={400}
            y2={300 - allYearsTotals[2020] / 1000000}
            style={{ fill: "none", stroke: "black" }}
          />
          <circle
            cx={400}
            cy={300 - allYearsTotals[2020] / 1000000}
            r={2}
            fill={"black"}
          />

          {allYears.map((year, i) => {
            return (
              <text x={140 + 50 * i} y={250} fill={"black"} font-size={10}>
                {" "}
                {year}{" "}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default App;

/* {allYears.map((year) => {
            return (
              <path
                stroke={"black"}
                strokeWidth={10}
                fill="none"
                key={year}
                d={_lineMaker(allYearsTotals[year])}
              />
            );
          })} */

/* <circle
            cx={
              (other2020totals["CALIFORNIA"] / totals2020["CALIFORNIA"]) * 100 +
              129
            }
            cy={190}
            r={20}
            fill={"black"}
          /> */

/*             width={(dems2020totals["MICHIGAN"] / totals2020["MICHIGAN"]) * 1000}
 */
