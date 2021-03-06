import React from "react";
import tonal from "tonal";
import Selector from "../shared/Selector";

const IVLS = tonal.interval.names();
const OCTS = [0, 1, 2, 3, 4];
const octs = props =>
  OCTS.map(oct =>
    tonal.interval.build({ step: props.step, alt: props.alt, oct })
  );

export default ({ props }) => (
  <div className="NoteSelector">
    <h3>Change current interval</h3>
    <Selector label="Change num:" items={IVLS} route={i => ["interval", i]} />
    <Selector
      label="Change octave:"
      items={octs(props)}
      route={i => ["interval", i]}
    />
  </div>
);
