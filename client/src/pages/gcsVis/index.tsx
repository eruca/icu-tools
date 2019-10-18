import { ComponentClass } from "react";
import Taro, { Dispatch } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import "./index.scss";
import { GCSState } from "../../reducers/gcs";
import Chart from "../../components/Chart";
import { setChartData } from "./options";

type Props = GCSState & { dispatch: Dispatch<any> };

class GcsVis extends Taro.Component<Props, any> {
  config = {
    navigationBarTitleText: "GCS图表"
  };

  componentDidMount() {
    const data = this.props.data.map(({ date, eye, sound, action }) => [
      date,
      eye + sound + action
    ]);
    (this as any).addChart.refresh(data);
  }

  render() {
    return (
      <View className="worldCloud-chart">
        <Chart
          ref={node => ((this as any).addChart = node)}
          setChartData={setChartData}
        />
      </View>
    );
  }
}

export default connect(
  state => state.gcs,
  dispatch => ({ dispatch })
)(GcsVis) as ComponentClass;
