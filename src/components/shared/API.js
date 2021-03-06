import React from "react";
import tonal from "tonal";

const BASE_URL = "https://github.com/danigb/tonal/tree/master/packages/";
const apiUrl = (modName, fnName) =>
  BASE_URL + modName + "#module_" + modName + "." + fnName;

const Function = ({ module, name }) => (
  <dt>
    <code>
      <a className="method" href={apiUrl(module, name)} target="_blank">
        {module}.{name}
      </a>
    </code>
  </dt>
);

const npmUrl = name => `https://www.npmjs.com/package/${name}/`;
const nodeiCo = name => `https://nodei.co/npm/${name}.png?mini=true`;

export const Npm = ({ packageName }) => (
  <p>
    <a href={npmUrl(packageName)}>
      <img alt={packageName + " npm package"} src={nodeiCo(packageName)} />
    </a>
  </p>
);

export default ({ module }) => (
  <div className="API column column-33">
    <h3>API</h3>
    <Npm packageName={"tonal-" + module} />
    <dl>
      {Object.keys(tonal[module] || {})
        .sort()
        .map((name, i) => <Function key={i} module={module} name={name} />)}
    </dl>
  </div>
);
