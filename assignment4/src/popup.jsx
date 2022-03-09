import React, { useState } from "react";
import * as topojson from "topojson-client";
import USATopo from "./counties";
import { geoMercator, geoPath } from "d3-geo";
import elections from "./elections";
import elections2 from "./elections copy";
import states from "./states";
import { interpolateRdBu } from "d3-scale-chromatic";

// const _worldTopo = topojson.feature(USATopo, USATopo.objects.counties); // counties

/* const usacounties = [];
USATopo.objects.counties.geometries.forEach((county) => {
  const newcounty = county.properties.name.toLowerCase();
  if (!usacounties[newcounty]) {
    usacounties.push(newcounty);
  }
}); */

function Popup(props) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <p>{props.state}</p>
      </div>
    </div>
  );
}

export default Popup;

// below line was right under span element
// {props.content}
