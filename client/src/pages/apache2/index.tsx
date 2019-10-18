import { View } from "@tarojs/components";

import { AtButton } from "taro-ui";
import CPicker from "../../components/CPicker";
import {
  gen_ages,
  gen_map,
  gen_respirateRate,
  gen_retalTemp,
  gen_heartRate
} from "./config";

export default function Apache2() {
  const ages = gen_ages();
  const maps = gen_map();
  const respirateRate = gen_respirateRate();
  const retalTemps = gen_retalTemp();
  const heartRate = gen_heartRate();

  return (
    <View className="index">
      <AtButton type="primary">按钮文案</AtButton>
      <CPicker {...ages} />
      <CPicker {...maps} />
      <CPicker {...respirateRate} />
      <CPicker {...retalTemps} />
      <CPicker {...heartRate} />
    </View>
  );
}
