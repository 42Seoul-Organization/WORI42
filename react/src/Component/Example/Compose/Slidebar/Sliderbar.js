import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function Sliderbar() {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.XYChart);
    let visits = 10;
    let data = [];
    
    x.background.opacity = 0;

    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({
        date: new Date(2018, 0, i),
        name: "name" + i,
        value: visits,
      });
    }

    x.data = data;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0.5;

    x.yAxes.push(new am4charts.ValueAxis());
    // let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.tooltip.disabled = true;
    // valueAxis.renderer.minWidth = 35;

    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    // series.tooltipText = "{valueY.value}";
    // x.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    x.scrollbarX = scrollbarX;

    x.plotContainer.visible = false;
    x.leftAxesContainer.visible = false;
    x.rightAxesContainer.visible = false;
    x.bottomAxesContainer.visible = false;

    // for color
    scrollbarX.background.fill = "#000";
    scrollbarX.background.fillOpacity = 0.3;
    chart.current = x;
    
    return () => {
      x.dispose();
    };
  }, []);

  return (
    <div
      id="chartdiv"
      style={{
        width: "100%",
        height: "100px",
        position: "absolute",
        bottom: 15,
      }}
    ></div>
  );
}

export default Sliderbar;
