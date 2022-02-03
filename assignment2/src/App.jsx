import { useState } from "react";
import logo from "./logo.svg";
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
      allStates.push(counties.state);
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

  console.log(allYearsTotals);
  // const _extent = extent(allYearsTotals);
  /*const _scaleY = scaleLinear()
    .domain([0, 500000])
    .range([500 - 20, 20]);
  const _scaleLine = scaleLinear()
    .domain([0, 11])
    .range([20, 500 - 20]);

  const _lineMaker = line()
    .x((d, i) => {
      return _scaleLine(i);
    })
    .y((d) => {
      return _scaleY(d);
    }); */

  return (
    <div className="App">
      <div style={{ marginBottom: 200 }}>
        <h1>2016-2020 US Presidential Election Data</h1>

        <svg width={1000} height={70}>
          {data2016.map((county, i) => {
            return (
              <line
                key={i}
                x1={county.totalvotes}
                y1={20}
                x2={county.totalvotes}
                y2={70}
                style={{ fill: "none", stroke: "black" }}
              />
            );
          })}
        </svg>

        <svg width={1000} height={70}>
          {data2020.map((county, i) => {
            return (
              <line
                key={i}
                x1={county.totalvotes}
                y1={20}
                x2={county.totalvotes}
                y2={70}
                style={{ fill: "none", stroke: "black" }}
              />
            );
          })}
        </svg>

        <svg width={1100} height={300}>
          {allStates.map((num, i) => {
            const rectHeight = (dems2016totals[num] / totals2016[num]) * 100;
            return (
              <rect
                x={20 + i * 20}
                y={200 - rectHeight}
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
                y={200 - rectHeight}
                width={8}
                height={rectHeight}
                fill={"navy"}
              />
            );
          })}
        </svg>

        <svg width={1100} height={300}>
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
        </svg>

        <svg width={500} height={500}>
          <rect
            x={10}
            y={20}
            width={
              (dems2020totals["CALIFORNIA"] / totals2020["CALIFORNIA"]) * 100 +
              100
            }
            height={20}
            fill={"black"}
          />

          <rect
            x={10}
            y={60}
            width={
              (reps2020totals["CALIFORNIA"] / totals2020["CALIFORNIA"]) * 100 +
              100
            }
            height={20}
            fill={"black"}
          />

          <rect
            x={10}
            y={100}
            width={
              (green2020totals["CALIFORNIA"] / totals2020["CALIFORNIA"]) * 100 +
              100
            }
            height={20}
            fill={"black"}
          />

          <rect
            x={10}
            y={140}
            width={
              (lib2020totals["CALIFORNIA"] / totals2020["CALIFORNIA"]) * 100 +
              100
            }
            height={20}
            fill={"black"}
          />

          <rect
            x={10}
            y={180}
            width={
              (other2020totals["CALIFORNIA"] / totals2020["CALIFORNIA"]) * 100 +
              100
            }
            height={20}
            fill={"black"}
          />

          <circle
            cx={
              (other2020totals["CALIFORNIA"] / totals2020["CALIFORNIA"]) * 100 +
              129
            }
            cy={190}
            r={20}
            fill={"black"}
          />
        </svg>

        <svg width={500} height={500}>
          <circle
            cx={30}
            cy={allYearsTotals[2000] / 1000000}
            r={2}
            fill={"black"}
          />

          <circle
            cx={60}
            cy={allYearsTotals[2004] / 1000000}
            r={2}
            fill={"black"}
          />

          <circle
            cx={90}
            cy={allYearsTotals[2008] / 1000000}
            r={2}
            fill={"black"}
          />

          <circle cx={120} cy={allYearsTotals[2012]} r={2} fill={"black"} />

          <circle cx={150} cy={allYearsTotals[2016]} r={2} fill={"black"} />

          <circle cx={180} cy={allYearsTotals[2020]} r={2} fill={"black"} />
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
