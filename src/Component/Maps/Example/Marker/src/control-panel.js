import * as React from "react";
import { PureComponent } from "react";

export default class ControlPanel extends PureComponent {
  render() {
    return (
      <div className="control-panel">
        <h3> 마커, 메세지 박스 예제 </h3>
        <p>마커와 이를 클릭했을 때 메세지 박스를 띄우는 예제입니다.</p>
      </div>
    );
  }
}
