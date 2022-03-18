import React, { useState } from "react";
import * as topojson from "topojson-client";
import USATopo from "./counties";
import { geoMercator, geoPath } from "d3-geo";
import elections from "./elections";
import elections2 from "./elections copy";
import states from "./states";
import { interpolateRdBu } from "d3-scale-chromatic";
import { AxisLeft, AxisBottom } from "@visx/axis";
import lodash from "lodash";
import { scaleLinear, scaleThreshold } from "@visx/scale";
import { axisBottom } from "d3";
import { LegendLinear } from "d3-legend";
import Popup2 from "./popup2";
import * as d3 from "d3";

function Popup(props) {
  const data = [];
  elections2.forEach((counties, i) => {
    if (counties.year == props.yearSelected) {
      data.push(counties);
    }
  });

  const groups = lodash.groupBy(data, "state");

  const names = [];

  groups[props.stateName.toUpperCase()].forEach((counties, i) => {
    if (!names[counties.county_name]) {
      names[i] = counties.county_name;
    }
  });

  const dems = [];

  groups[props.stateName.toUpperCase()].forEach((counties) => {
    if (!dems[counties.county_name] && counties.party == "DEMOCRAT") {
      dems[counties.county_name] = parseInt(counties.candidatevotes); /// parseInt(counties.totalvotes);
    }
  });

  const reps = [];

  groups[props.stateName.toUpperCase()].forEach((counties) => {
    if (!reps[counties.county_name] && counties.party == "REPUBLICAN") {
      reps[counties.county_name] = parseInt(counties.candidatevotes); /// parseInt(counties.totalvotes);
    }
  });

  const totals = [];

  groups[props.stateName.toUpperCase()].forEach((counties) => {
    if (!totals[counties.county_name] && counties.party == "DEMOCRAT") {
      totals[counties.county_name] = parseInt(counties.totalvotes); /// parseInt(counties.totalvotes);
    }
  });

  const [currentlySelected2, setCurrentlySelected2] = useState(null);

  const togglePopup2 = () => {
    setCurrentlySelected2(!currentlySelected2);
  };

  const x_scale = scaleLinear()
    .domain([d3.min(Object.values(dems)), d3.max(Object.values(dems))])
    .range([50, 1020 - 50]);

  const x_axis = axisBottom().scale(x_scale);

  const y_scale = scaleLinear()
    .domain([d3.max(Object.values(reps)), d3.min(Object.values(reps))])
    .range([0, 1020 - 30]);

  const y_axis = axisBottom().scale(y_scale);

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <h1>Democratic VS. Republican Candidate Votes in {props.stateName}</h1>
        <svg width={960} height={1030}>
          {names.map((num, i) => {
            return (
              <circle
                cx={50 + dems[num] / 100}
                cy={50 + reps[num] / 100}
                /*  onClick={() => {
                  togglePopup2;
                  setCurrentlySelected2(num);
                }} */
                r={4}
                fill={interpolateRdBu(dems[num] / totals[num])}
              />
            );
          })}
          <AxisBottom
            strokeWidth={2}
            top={1020 - 30}
            scale={x_scale}
            numTicks={7}
          />
          <text x="370" y="1028" fontSize={12} fontWeight="bold">
            Number of Votes for Democratic Candidate
          </text>
          <AxisLeft strokeWidth={2} left={50} scale={y_scale} numTicks={4} />
          <text
            x="-480"
            y="8"
            font-size={12}
            font-weight="bold"
            transform="rotate(-90)"
          >
            Number of Votes for Republican Candidate
          </text>

          <rect
            x={800}
            y={100}
            width={30}
            height={10}
            fill={interpolateRdBu(0.3)}
          />
          <rect
            x={830}
            y={100}
            width={30}
            height={10}
            fill={interpolateRdBu(0.4)}
          />
          <rect
            x={860}
            y={100}
            width={30}
            height={10}
            fill={interpolateRdBu(0.6)}
          />
          <rect
            x={890}
            y={100}
            width={30}
            height={10}
            fill={interpolateRdBu(0.7)}
          />
          <text x={790} y={90} fill={"black"} fontSize={13} fontWeight="bold">
            Color Scale:
          </text>
          <text x={790} y={130} fill={"black"} fontSize={10}>
            Republican
          </text>
          <text x={880} y={130} fill={"black"} fontSize={10}>
            Democrat
          </text>
        </svg>
      </div>
    </div>
  );
}

export default Popup;

/* const data2004 = [];
elections2.forEach((counties, i) => {
  if (counties.year == 2004) {
    data2004.push(counties);
  }
});

const ah = lodash.groupBy(data2004, "state");
console.log(ah);

const yee = [];

ah["ALABAMA"].forEach((counties) => {
  if (!yee[counties.county_name] && counties.party == "DEMOCRAT") {
    yee[counties.county_name] =
      parseInt(counties.candidatevotes) / parseInt(counties.totalvotes);
  }
});

const yes = [];

ah["ALABAMA"].forEach((counties) => {
  if (!yes[counties.county_name] && counties.party == "REPUBLICAN") {
    yes[counties.county_name] =
      parseInt(counties.candidatevotes) / parseInt(counties.totalvotes);
  }
}); 



{currentlySelected2 && (
          <Popup2
            handleClose={togglePopup2}
            stateName={currentlySelected2}
            yearSelected={props.yearSelected}
          />
        )} */
