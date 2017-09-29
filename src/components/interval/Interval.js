import React from "react";
import { withLayout } from "../shared/Layout";

export default withLayout("interval", ({ interval }) => (
  <div className="Interval">
    <h1 className="big">{interval}</h1>
  </div>
));