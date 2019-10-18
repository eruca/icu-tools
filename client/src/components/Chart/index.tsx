import Taro, { Component } from "@tarojs/taro";
import * as echarts from "../ec-canvas/echarts";

type Props = {
  setChartData: (chart: any, data: any) => void;
};

export default class Chart extends Component<
  Props,
  { ec: { lazyLoad: boolean } }
> {
  config = {
    usingComponents: {
      "ec-canvas": "../ec-canvas/ec-canvas"
    }
  };

  refresh(data) {
    (this as any).chart.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      this.props.setChartData(chart, data);
      return chart;
    });
  }

  render() {
    return (
      <ec-canvas
        ref={node => ((this as any).chart = node)}
        canvas-id="mychart-area"
        ec={{ lazyLoad: true }}
      />
    );
  }
}
