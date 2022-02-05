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

  const percentLabels = [20, 40, 60, 80, 100];
  const michax = [
    "500,000",
    "1,000,000",
    "1,500,000",
    "2,000,000",
    "2,500,000",
    "3,000,000",
  ];
  const florax = [
    "1,000,000",
    "2,000,000",
    "3,000,000",
    "4,000,000",
    "5,000,000",
    "6,000,000",
  ];
  const totvotax = [35, 70, 105, 140, 175];
  const barcodeax = [0, 250, 500, 750, 1000];

  return (
    <div className="App">
      <div style={{ marginBottom: 200 }}>
        <h1>2000-2020 US Presidential Election Data</h1>

        <svg width={1010} height={140}>
          <text x="400" y="15" fontSize={20} font-weight="bold">
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
          <line
            x1={0}
            y1={80}
            x2={1010}
            y2={80}
            style={{ fill: "none", stroke: "black" }}
          />
          {barcodeax.map((num) => {
            return (
              <line
                x1={num}
                y1={80}
                x2={num}
                y2={85}
                style={{ fill: "none", stroke: "black" }}
              />
            );
          })}
          {barcodeax.map((num) => {
            return (
              <text x={num - 13} y={95} fontSize={10}>
                {num}
              </text>
            );
          })}
          <text x={500} y={110} fontSize={12} fontWeight="bold">
            Number of Votes
          </text>
        </svg>

        <svg width={1010} height={120}>
          <text x="400" y="15" font-size={20} font-weight="bold">
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
          <line
            x1={0}
            y1={80}
            x2={1010}
            y2={80}
            style={{ fill: "none", stroke: "black" }}
          />
          {barcodeax.map((num) => {
            return (
              <line
                x1={num}
                y1={80}
                x2={num}
                y2={85}
                style={{ fill: "none", stroke: "black" }}
              />
            );
          })}
          {barcodeax.map((num) => {
            return (
              <text x={num - 13} y={95} fontSize={10}>
                {num}
              </text>
            );
          })}
          <text x={500} y={110} fontSize={12} fontWeight="bold">
            Number of Votes
          </text>
        </svg>

        <svg width={1000} height={120}>
          <text x={0} y={80} fontSize={15}>
            <tspan x="0" y="20">
              The barcode plots above focus on the least populous counties in
              the US as I wanted to check for outliers in the bottom range of
              total votes in US
            </tspan>
            <tspan x="0" y="40">
              counties. 3 outliers stuck out, all with less than 250 votes.
              Loving County in Texas had the minimum amount of votes both years,
              with only 65 total
            </tspan>
            <tspan x="0" y="60">
              votes in 2016 and 66 in 2020. This county has a population of 169
              people only, which explains why they had such a small amount of
              votes. Another
            </tspan>
            <tspan x="0" y="80">
              interesting pattern in these plots is the rightward shift between
              2016 and 2020, indiciating that, in general, there was an increase
              in total votes in
            </tspan>
            <tspan x="0" y="100">
              counties between 2016 and 2020.
            </tspan>
          </text>
        </svg>

        <svg width={1150} height={250}>
          <text x="300" y="50" font-size={20} font-weight="bold">
            Percentage of State Votes for Democratic Candidate 2016 vs 2020
          </text>

          <line
            x1={40}
            y1={180}
            x2={40}
            y2={80}
            style={{ fill: "none", stroke: "black" }}
          />

          <line
            x1={40}
            y1={180}
            x2={1020}
            y2={180}
            style={{ fill: "none", stroke: "black" }}
          />
          <text
            x={-185}
            y={10}
            fill={"black"}
            transform="rotate(-90)"
            fontSize={12}
            fontWeight="bold"
          >
            Percentage of Votes
          </text>
          {percentLabels.map((num, i) => {
            const increment = 20 * i;
            return (
              <text x={18} y={163 - 20 * i} font-size={10}>
                {""}
                {num}
                {""}
              </text>
            );
          })}

          {percentLabels.map((num, i) => {
            return (
              <line
                x1={35}
                y1={160 - 20 * i}
                x2={40}
                y2={160 - 20 * i}
                style={{ fill: "none", stroke: "black" }}
              />
            );
          })}

          {allStates.map((num, i) => {
            const rectHeight = (dems2016totals[num] / totals2016[num]) * 100;
            return (
              <rect
                x={40 + i * 20}
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
                x={50 + i * 20}
                y={180 - rectHeight}
                width={8}
                height={rectHeight}
                fill={"navy"}
              />
            );
          })}

          {allPos.map((state, i) => {
            return (
              <text x={40 + i * 20} y={190} fill={"black"} font-size={11}>
                {" "}
                {state}{" "}
              </text>
            );
          })}
          <text x={530} y={210} fill={"black"} fontSize={15} fontWeight="bold">
            States
          </text>
          <rect x={950} y={65} width={20} height={10} fill={"steelblue"} />
          <text x={972} y={73} fill={"black"} fontSize={10}>
            2016
          </text>
          <rect x={950} y={80} width={20} height={10} fill={"navy"} />
          <text x={972} y={88} fill={"black"} fontSize={10}>
            2020
          </text>
        </svg>

        <svg width={1150} height={250}>
          <text x="300" y="50" font-size={20} font-weight="bold">
            Percentage of State Votes for Republican Candidate 2016 vs 2020
          </text>

          <line
            x1={40}
            y1={200}
            x2={40}
            y2={100}
            style={{ fill: "none", stroke: "black" }}
          />

          <line
            x1={40}
            y1={200}
            x2={1020}
            y2={200}
            style={{ fill: "none", stroke: "black" }}
          />
          <text
            x={-200}
            y={10}
            fill={"black"}
            transform="rotate(-90)"
            fontSize={12}
            fontWeight="bold"
          >
            Percentage of Votes
          </text>
          {percentLabels.map((num, i) => {
            return (
              <text x={18} y={183 - 20 * i} font-size={10}>
                {""}
                {num}
                {""}
              </text>
            );
          })}

          {percentLabels.map((num, i) => {
            return (
              <line
                x1={35}
                y1={180 - 20 * i}
                x2={40}
                y2={180 - 20 * i}
                style={{ fill: "none", stroke: "black" }}
              />
            );
          })}

          {allStates.map((num, i) => {
            const rectHeight = (reps2016totals[num] / totals2016[num]) * 100;
            return (
              <rect
                x={40 + i * 20}
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
                x={50 + i * 20}
                y={200 - rectHeight}
                width={8}
                height={rectHeight}
                fill={"maroon"}
              />
            );
          })}

          {allPos.map((state, i) => {
            return (
              <text x={40 + i * 20} y={210} fill={"black"} font-size={10}>
                {" "}
                {state}{" "}
              </text>
            );
          })}

          <text x={530} y={230} fill={"black"} fontSize={15} fontWeight="bold">
            States
          </text>

          <rect x={950} y={65} width={20} height={10} fill={"salmon"} />
          <text x={972} y={73} fill={"black"} fontSize={10}>
            2016
          </text>
          <rect x={950} y={80} width={20} height={10} fill={"maroon"} />
          <text x={972} y={88} fill={"black"} fontSize={10}>
            2020
          </text>
        </svg>

        <svg width={1000} height={120}>
          <text x={0} y={80} fontSize={15}>
            <tspan x="0" y="20">
              I made the above paired bar charts to study the following
              question: were there any trends in Democrat votes and Republican
              votes in states
            </tspan>
            <tspan x="0" y="40">
              between 2016 and 2020? I wanted to study this because of the
              change of party in power from 2016 to 2020 (Republican to
              Democrat). We can see
            </tspan>
            <tspan x="0" y="60">
              that total votes for the Democratic candidate increased in most
              states between 2016 and 2020 while Republican votes decreased in
              most states.
            </tspan>
          </text>
        </svg>

        <svg width={550} height={300}>
          <text x="0" y="20" font-size={17} font-weight="bold">
            2020 Battleground State Party Distribution by Vote: Michigan
          </text>
          <rect
            x={65}
            y={40}
            width={dems2020totals["MICHIGAN"] / 10000}
            height={10}
            fill={"black"}
          />
          <text x="8" y="48" font-size={12}>
            Democrat
          </text>

          {michax.map((num, i) => {
            return (
              <text x={100 + 55 * i} y={225} font-size={10}>
                {""}
                {num}
                {""}
              </text>
            );
          })}

          {michax.map((num, i) => {
            return (
              <line
                x1={120 + 55 * i}
                y1={210}
                x2={120 + 55 * i}
                y2={215}
                style={{ fill: "none", stroke: "black" }}
              />
            );
          })}

          <text x={180} y={240} fontSize={12} fontWeight="bold">
            Number of Votes
          </text>
          <rect
            x={65}
            y={80}
            width={reps2020totals["MICHIGAN"] / 10000}
            height={10}
            fill={"black"}
          />
          <text x="5" y="87" font-size={11}>
            Republican
          </text>

          <rect
            x={65}
            y={120}
            width={lib2020totals["MICHIGAN"] / 10000}
            height={10}
            fill={"black"}
          />

          <text x="9" y="128" font-size={11}>
            Libertarian
          </text>

          <rect
            x={65}
            y={160}
            width={green2020totals["MICHIGAN"] / 10000}
            height={10}
            fill={"black"}
          />

          <text x="24" y="168" font-size={12}>
            Green
          </text>

          <rect
            x={65}
            y={200}
            width={other2020totals["MICHIGAN"] / 10000}
            height={10}
            fill={"black"}
          />

          <text x="27" y="209" font-size={12}>
            Other
          </text>

          <line
            x1={65}
            y1={40}
            x2={65}
            y2={210}
            style={{ fill: "none", stroke: "black" }}
          />

          <line
            x1={65}
            y1={210}
            x2={395}
            y2={210}
            style={{ fill: "none", stroke: "black" }}
          />

          <text
            x={-175}
            y={12}
            fill={"black"}
            transform="rotate(-90)"
            fontSize={15}
            fontWeight="bold"
          >
            Party
          </text>

          <text
            x={-145}
            y={540}
            fill={"black"}
            transform="rotate(-90)"
            fontSize={15}
            fontWeight="bold"
          >
            Party
          </text>
        </svg>

        <svg width={700} height={300}>
          <text x="60" y="20" font-size={17} font-weight="bold">
            2020 Battleground State Vote Distribution by Party: Florida
          </text>

          <rect
            x={65}
            y={40}
            width={dems2020totals["FLORIDA"] / 10000}
            height={10}
            fill={"black"}
          />

          <text x="8" y="48" font-size={12}>
            Democrat
          </text>

          <rect
            x={65}
            y={80}
            width={reps2020totals["FLORIDA"] / 10000}
            height={10}
            fill={"black"}
          />

          <text x="0" y="87" font-size={12}>
            Republican
          </text>

          <rect
            x={65}
            y={120}
            width={lib2020totals["FLORIDA"] / 10000}
            height={10}
            fill={"black"}
          />

          <text x="0" y="128" font-size={12}>
            Libertarian
          </text>

          <rect
            x={65}
            y={160}
            width={green2020totals["FLORIDA"] / 10000}
            height={10}
            fill={"black"}
          />

          <text x="24" y="168" font-size={12}>
            Green
          </text>

          <rect
            x={65}
            y={200}
            width={other2020totals["FLORIDA"] / 10000}
            height={10}
            fill={"black"}
          />

          <text x="27" y="209" font-size={12}>
            Other
          </text>

          <line
            x1={65}
            y1={40}
            x2={65}
            y2={210}
            style={{ fill: "none", stroke: "black" }}
          />

          <line
            x1={65}
            y1={210}
            x2={600}
            y2={210}
            style={{ fill: "none", stroke: "black" }}
          />

          {florax.map((num, i) => {
            return (
              <text x={120 + 90 * i} y={225} font-size={10}>
                {""}
                {num}
                {""}
              </text>
            );
          })}

          {florax.map((num, i) => {
            return (
              <line
                x1={149 + 90 * i}
                y1={210}
                x2={149 + 90 * i}
                y2={215}
                style={{ fill: "none", stroke: "black" }}
              />
            );
          })}

          <text x={280} y={240} fontSize={12} fontWeight="bold">
            Number of Votes
          </text>
        </svg>

        <svg width={1000} height={120}>
          <text x={0} y={80} fontSize={15}>
            <tspan x="0" y="20">
              I made the above bar charts to study 2020 vote distribution across
              parties in two random battleground states: Michigan and Florida. A
            </tspan>
            <tspan x="0" y="40">
              battleground state is another term for a swing state and refers to
              any state that could reasonably be won by either the Democrat or
              Republican
            </tspan>
            <tspan x="0" y="60">
              candidate. The above graphs demonstrate how these states are
              battleground states because you can see just how close the total
              Republican and
            </tspan>
            <tspan x="0" y="80">
              Democrat votes are. Democrats barely won out Republicans in
              Michigan whereas Republicans barely won out Democrats in Florida.
            </tspan>
          </text>
        </svg>

        <svg width={500} height={300}>
          <text x="130" y="100" font-size={20} font-weight="bold">
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

          <line
            x1={140}
            y1={130}
            x2={140}
            y2={280}
            style={{ fill: "none", stroke: "black" }}
          />

          <line
            x1={140}
            y1={280}
            x2={430}
            y2={280}
            style={{ fill: "none", stroke: "black" }}
          />

          {totvotax.map((num, i) => {
            return (
              <line
                x1={135}
                y1={130 + 30 * i}
                x2={140}
                y2={130 + 30 * i}
                style={{ fill: "none", stroke: "black" }}
              />
            );
          })}

          {totvotax.map((num, i) => {
            return (
              <text x={115} y={252 - 30 * i} fontSize={10}>
                {num}{" "}
              </text>
            );
          })}

          {allYears.map((year, i) => {
            return (
              <text x={140 + 50 * i} y={295} fill={"black"} font-size={10}>
                {" "}
                {year}{" "}
              </text>
            );
          })}

          {allYears.map((year, i) => {
            return (
              <line
                x1={150 + 50 * i}
                y1={280}
                x2={150 + 50 * i}
                y2={285}
                style={{ fill: "none", stroke: "black" }}
              />
            );
          })}

          <text
            x={-300}
            y={100}
            fill={"black"}
            transform="rotate(-90)"
            fontSize={13}
            fontWeight="bold"
          >
            Number of Voters (in Millions)
          </text>

          <text x={260} y={310} fill={"black"} font-size={15} fontWeight="bold">
            Year
          </text>
        </svg>

        <svg width={500} height={160}>
          <text x={0} y={80} fontSize={15}>
            <tspan x="0" y="20">
              The line chart to the side studies distribution of total voters
              from 2000 to
            </tspan>
            <tspan x="0" y="40">
              2020. One of the key reasons Democrats were able to win the 2020
            </tspan>
            <tspan x="0" y="60">
              election was high voter turnout. This graph shows that this is
              true as you
            </tspan>
            <tspan x="0" y="80">
              can see a large increase in total voters between 2016 and 2020.
            </tspan>
            <tspan x="0" y="100">
              Also notable is the increase in voters between 2000 and 2004.
            </tspan>
            <tspan x="0" y="120">
              Amount of voters increased by{" "}
              {allYearsTotals[2020] - allYearsTotals[2016]} between 2016 and
              2020.
            </tspan>
          </text>
        </svg>
        <svg width={500} height={65}>
          <text x={0} y={80} fontSize={15}>
            <tspan x="0" y="20">
              The map below was created in Tableau and displays which party won
            </tspan>
            <tspan x="0" y="40">
              which county in the 2020 election. It also shows that this dataset
            </tspan>
            <tspan x="0" y="60">
              is missing values for several US counties as many counties are
              gray.
            </tspan>
          </text>
        </svg>
      </div>
    </div>
  );
}

export default App;
