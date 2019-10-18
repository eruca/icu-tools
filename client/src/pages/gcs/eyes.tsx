import Taro, { Dispatch } from "@tarojs/taro";
import { View } from "@tarojs/components";
// import { AtIcon } from "taro-ui";

import { gen_classname } from "../../utils";

interface IProps {
  eyes: Array<string>;
  index: number;
  setIndex: Dispatch<number>;
}

export default function Eyes({ eyes = [], index, setIndex }: IProps) {
  return (
    <View>
      <View className="at-row at-row--wrap">
        <View
          className={gen_classname(index, 0, "at-col at-col-3")}
          onClick={() => setIndex(0)}
          style="padding:5PX"
        >
          {eyes[0]}
        </View>
        <View
          className={gen_classname(index, 1, "at-col at-col-3")}
          onClick={() => setIndex(1)}
          style="padding:5PX"
        >
          {eyes[1]}
        </View>
        <View
          className={gen_classname(index, 2, "at-col at-col-3")}
          onClick={() => setIndex(2)}
          style="padding:5PX"
        >
          {eyes[2]}
        </View>
        <View
          className={gen_classname(index, 3, "at-col at-col-3")}
          onClick={() => setIndex(3)}
          style="padding:5PX"
        >
          {eyes[3]}
        </View>
      </View>
    </View>
  );
}

Eyes.options = {
  addGlobalClass: true
};
