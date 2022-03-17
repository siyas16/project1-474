import React, { useState } from "react";
import * as topojson from "topojson-client";
import USATopo from "./counties";
import { geoMercator, geoPath } from "d3-geo";
import elections from "./elections";
import elections2 from "./elections copy";
import states from "./states";
import { interpolateRdBu } from "d3-scale-chromatic";
import lodash from "lodash";
import { scaleLinear, scaleThreshold } from "@visx/scale";
import { LegendLinear } from "d3-legend";
import Popup2 from "./popup2";

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

  console.log(dems);

  const [currentlySelected2, setCurrentlySelected2] = useState(null);

  const togglePopup2 = () => {
    setCurrentlySelected2(!currentlySelected2);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <h1>{props.stateName}</h1>
        <svg width={1000} height={800}>
          {names.map((num, i) => {
            return (
              <circle
                // cx={100 + dems[num] * 400}
                // cy={400 - reps[num] * 400}
                cx={50 + dems[num] / 100}
                cy={50 + reps[num] / 100}
                onClick={() => {
                  togglePopup2;
                  setCurrentlySelected2(num);
                }}
                r={4}
                fill={interpolateRdBu(dems[num] / totals[num])}
              />
            );
          })}
        </svg>

        {currentlySelected2 && (
          <Popup2
            handleClose={togglePopup2}
            stateName={currentlySelected2}
            yearSelected={props.yearSelected}
          />
        )}
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
}); */
