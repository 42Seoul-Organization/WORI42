import React from "react";

import ReactMapGL from "./Component/Maps/ReactMapGL/ReactMapGL"
import Compose from "./Component/Example/Compose/Compose"
import Line from "./Component/Example/Line/Line"
import InputBox from './Component/InputBox/InputBox'
import "./App.css";

function App() {
  return (
    <React.Fragment>
      {/* <ReactMapGL /> */}
      {/* <Line /> */}
      <Compose/>
    </React.Fragment>
  );
}

export default App;
