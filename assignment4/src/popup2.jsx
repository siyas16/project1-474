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

function Popup2(props) {
  return (
    //  <div className="popup-box2">
    <div className="box2">
      <span className="close-icon2" onClick={props.handleClose}>
        x
      </span>
    </div>
    //  </div>
  );
}

export default Popup2;
