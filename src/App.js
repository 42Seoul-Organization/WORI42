import React from "react";

import ReactMapGL from "./Component/Maps/ReactMapGL/ReactMapGL"
import Deck from "./Component/Maps/Example/Deck/Deck"
import Line from "./Component/Maps/Example/Line/Line"
import InputBox from './Component/InputBox/InputBox'
import "./App.css";

function App() {
  return (
    <React.Fragment>
      {/* <ReactMapGL /> */}
      {/* <Line /> */}
      <Deck/>
      <InputBox/>
    </React.Fragment>
  );
}

export default App;
