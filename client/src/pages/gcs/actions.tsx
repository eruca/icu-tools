import Taro, { Dispatch } from "@tarojs/taro";
import { View } from "@tarojs/components";
// import { AtIcon } from "taro-ui";

import { gen_classname } from "../../utils";

interface IProps {
  actions: Array<string>;
  index: number;
  setIndex: Dispatch<number>;
}

export default function Actions({ actions = [], index, setIndex }: IProps) {
  return (
    <View>
      <View
        className={gen_classname(index, 0)}
        onClick={() => setIndex(0)}
        style="padding:5PX"
      >
        {actions[0]}
      </View>
      <View
        className={gen_classname(index, 1)}
        onClick={() => setIndex(1)}
        style="padding:5PX"
      >
        {actions[1]}
      </View>
      <View
        className={gen_classname(index, 2)}
        onClick={() => setIndex(2)}
        style="padding:5PX"
      >
        {actions[2]}
      </View>
      <View
        className={gen_classname(index, 3)}
        onClick={() => setIndex(3)}
        style="padding:5PX"
      >
        {actions[3]}
      </View>
      <View
        className={gen_classname(index, 4)}
        onClick={() => setIndex(4)}
        style="padding:5PX"
      >
        {actions[4]}
      </View>
      <View
        className={gen_classname(index, 5)}
        onClick={() => setIndex(5)}
        style="padding:5PX"
      >
        {actions[5]}
      </View>
    </View>
  );
}

Actions.options = {
  addGlobalClass: true
};
