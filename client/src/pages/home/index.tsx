import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtGrid } from "taro-ui";

import Title from "../../components/Title";

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  onClick(item: object, index: number) {
    console.log(item, index);
    switch (index) {
      case 0:
        Taro.navigateTo({ url: "/pages/gcs/index" });
        break;
      case 1:
        Taro.navigateTo({ url: "/pages/apache2/index" });
        break;
      default:
    }
  }

  render() {
    return (
      <View className="index">
        <Title title="基础评分/工具" />
        <AtGrid
          onClick={this.onClick.bind(this)}
          mode="rect"
          data={[
            {
              value: "GCS评分"
            },
            {
              value: "Apache II"
            }
          ]}
        />
      </View>
    );
  }
}
