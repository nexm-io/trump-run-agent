import { Fragment } from "react";
import { UnityTest } from "./unity_webgl";
import ReactGA from "react-ga4";
import { config } from "src/constants/constants";
import { Buffer } from "buffer";

function App() {
  ReactGA.initialize(config.GA_TRACKING_ID);

  if (typeof globalThis.Buffer === "undefined") {
    console.log("Buffer");
    globalThis.Buffer = Buffer;
  }
  return (
    <Fragment>
      <UnityTest />
    </Fragment>
  );
}

export default App;
