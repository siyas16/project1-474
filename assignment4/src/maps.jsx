import React, { useState } from "react";
import * as topojson from "topojson-client";
import USATopo from "./counties";
import { geoMercator, geoPath } from "d3-geo";
import elections from "./elections";
import elections2 from "./elections copy";
import states from "./states";
import { interpolateRdBu } from "d3-scale-chromatic";
import Popup from "./popup";

const _worldTopo = topojson.feature(states, states.objects.states); // states
const stateShapes = _worldTopo.features;

const data2004 = [];
elections2.forEach((counties, i) => {
  if (counties.year == 2004) {
    data2004.push(counties);
  }
});
const dems2004 = [];
const reps2004 = [];
const other2004 = [];
data2004.forEach((counties, i) => {
  if (counties.party == "DEMOCRAT") {
    dems2004.push(counties);
  }

  if (counties.party == "REPUBLICAN") {
    reps2004.push(counties);
  }

  if (counties.party == "OTHER") {
    other2004.push(counties);
  }
});

const dems2004totals = {};
dems2004.forEach((counties) => {
  if (!dems2004totals[counties.state]) {
    dems2004totals[counties.state] = parseInt(counties.candidatevotes);
  } else {
    var votes = parseInt(counties.candidatevotes);
    dems2004totals[counties.state] += votes;
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
const dems2008 = [];
const reps2008 = [];
const other2008 = [];
data2008.forEach((counties, i) => {
  if (counties.party == "DEMOCRAT") {
    dems2008.push(counties);
  }

  if (counties.party == "REPUBLICAN") {
    reps2008.push(counties);
  }

  if (counties.party == "OTHER") {
    other2008.push(counties);
  }
});

const dems2008totals = {};
dems2008.forEach((counties) => {
  if (!dems2008totals[counties.state]) {
    dems2008totals[counties.state] = parseInt(counties.candidatevotes);
  } else {
    var votes = parseInt(counties.candidatevotes);
    dems2008totals[counties.state] += votes;
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
const dems2012 = [];
const reps2012 = [];
const other2012 = [];
data2012.forEach((counties, i) => {
  if (counties.party == "DEMOCRAT") {
    dems2012.push(counties);
  }

  if (counties.party == "REPUBLICAN") {
    reps2012.push(counties);
  }

  if (counties.party == "OTHER") {
    other2012.push(counties);
  }
});

const dems2012totals = {};
dems2012.forEach((counties) => {
  if (!dems2012totals[counties.state]) {
    dems2012totals[counties.state] = parseInt(counties.candidatevotes);
  } else {
    var votes = parseInt(counties.candidatevotes);
    dems2012totals[counties.state] += votes;
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

const data2016 = [];
elections.forEach((counties, i) => {
  if (counties.year == 2016) {
    data2016.push(counties);
  }
});

const dems2016 = [];
const reps2016 = [];
const other2016 = [];
data2016.forEach((counties, i) => {
  if (counties.party == "DEMOCRAT") {
    dems2016.push(counties);
  }

  if (counties.party == "REPUBLICAN") {
    reps2016.push(counties);
  }

  if (counties.party == "OTHER") {
    other2016.push(counties);
  }
});

const dems2016totals = {};
dems2016.forEach((counties) => {
  if (!dems2016totals[counties.state]) {
    dems2016totals[counties.state] = parseInt(counties.candidatevotes);
  } else {
    var votes = parseInt(counties.candidatevotes);
    dems2016totals[counties.state] += votes;
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
const reps2020 = [];
const other2020 = [];
data2020.forEach((counties, i) => {
  if (counties.party == "DEMOCRAT") {
    dems2020.push(counties);
  }

  if (counties.party == "REPUBLICAN") {
    reps2020.push(counties);
  }

  if (
    counties.party == "OTHER" ||
    counties.party == "LIBERTARIAN" ||
    counties.party == "GREEN"
  ) {
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

const totals2020 = {};
data2020.forEach((counties) => {
  if (!totals2020[counties.state]) {
    totals2020[counties.state] = parseInt(counties.candidatevotes);
  } else {
    var votes = parseInt(counties.candidatevotes);
    totals2020[counties.state] += votes;
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

const cal2020 =
  dems2020totals["CALIFORNIA"] +
  reps2020totals["CALIFORNIA"] +
  other2020totals["CALIFORNIA"];

totals2020["CALIFORNIA"] = cal2020;
const percentDem = {};

/*
const usaStates = [];
stateShapes.forEach((state) => {
  const newState = state.properties.name.toUpperCase();
  if (!usaStates[newState]) {
    usaStates.push(newState);
  }
}); */
// = ({ width = 1000, height = 500 }) => {

function MapsExample(props) {
  const projection = geoMercator().center([-100, 38]).scale(800).rotate([0, 0]);
  const path = geoPath().projection(projection);

  const projection2 = geoMercator()
    .center([-110, 56])
    .scale(400)
    .rotate([0, 0]);
  const path2 = geoPath().projection(projection2);

  const projection3 = geoMercator()
    .center([-143, 15])
    .scale(1400)
    .rotate([0, 0]);
  const path3 = geoPath().projection(projection3);

  if (props.yearSelected == 2020) {
    for (const i in totals2020) {
      percentDem[i] = dems2020totals[i] / totals2020[i];
      if (isNaN(percentDem[i])) {
        percentDem[i] = 0.5;
      }
    }
  } else if (props.yearSelected == 2016) {
    for (const i in totals2016) {
      percentDem[i] = dems2016totals[i] / totals2016[i];
      if (isNaN(percentDem[i])) {
        percentDem[i] = 0.5;
      }
    }
  } else if (props.yearSelected == 2004) {
    for (const i in totals2004) {
      percentDem[i] = dems2004totals[i] / totals2004[i];
      if (isNaN(percentDem[i])) {
        percentDem[i] = 0.5;
      }
    }
  } else if (props.yearSelected == 2008) {
    for (const i in totals2008) {
      percentDem[i] = dems2008totals[i] / totals2008[i];
      if (isNaN(percentDem[i])) {
        percentDem[i] = 0.5;
      }
    }
  } else if (props.yearSelected == 2012) {
    for (const i in totals2012) {
      percentDem[i] = dems2012totals[i] / totals2012[i];
      if (isNaN(percentDem[i])) {
        percentDem[i] = 0.5;
      }
    }
  }

  const [currentlySelected, setCurrentlySelected] = useState(null);

  const togglePopup = () => {
    setCurrentlySelected(!currentlySelected);
  };

  return (
    <div>
      <svg width={1000} height={500}>
        <g>
          {stateShapes.map((shape, i) => {
            return (
              <path
                key={i}
                onClick={
                  () => {
                    togglePopup;
                    setCurrentlySelected(shape.properties.name);
                  }
                  //console.log(shape.properties.name);
                }
                d={path(shape)}
                fill={interpolateRdBu(
                  percentDem[shape.properties.name.toUpperCase()]
                )}
                stroke={"white"}
                strokeWidth={0.3}
              />
            );
          })}
        </g>

        <rect
          x={50}
          y={400}
          width={30}
          height={10}
          fill={interpolateRdBu(0.25)}
        />
        <rect
          x={80}
          y={400}
          width={30}
          height={10}
          fill={interpolateRdBu(0.4)}
        />
        <rect
          x={110}
          y={400}
          width={30}
          height={10}
          fill={interpolateRdBu(0.6)}
        />
        <rect
          x={140}
          y={400}
          width={30}
          height={10}
          fill={interpolateRdBu(0.75)}
        />
        <text x={40} y={390} fill={"black"} fontSize={15} fontWeight="bold">
          Color Scale:
        </text>
        <text x={40} y={420} fill={"black"} fontSize={10}>
          Republican
        </text>
        <text x={130} y={420} fill={"black"} fontSize={10}>
          Democrat
        </text>
      </svg>

      {currentlySelected && (
        <Popup
          handleClose={togglePopup}
          stateName={currentlySelected}
          yearSelected={props.yearSelected}
        />
      )}

      <svg width={500} height={310}>
        <g>
          {stateShapes.map((shape, i) => {
            return (
              <path
                key={i}
                onClick={() => {
                  togglePopup;
                  setCurrentlySelected(shape.properties.name);
                }}
                d={path2(shape)}
                fill={interpolateRdBu(
                  percentDem[shape.properties.name.toUpperCase()]
                )}
                stroke={"white"}
                strokeWidth={0.3}
              />
            );
          })}
        </g>
      </svg>

      {currentlySelected && (
        <Popup
          handleClose={togglePopup}
          stateName={currentlySelected}
          yearSelected={props.yearSelected}
        />
      )}

      <svg width={300} height={310}>
        <g>
          {stateShapes.map((shape, i) => {
            return (
              <path
                key={i}
                onClick={() => {
                  togglePopup;
                  setCurrentlySelected(shape.properties.name);
                }}
                d={path3(shape)}
                fill={interpolateRdBu(
                  percentDem[shape.properties.name.toUpperCase()]
                )}
                stroke={"white"}
                strokeWidth={0.3}
              />
            );
          })}
        </g>
      </svg>

      {currentlySelected && (
        <Popup
          handleClose={togglePopup}
          stateName={currentlySelected}
          yearSelected={props.yearSelected}
        />
      )}
    </div>
  );
}

export default MapsExample;

//       {currentlySelected && <Popup handleClose={togglePopup} />}
