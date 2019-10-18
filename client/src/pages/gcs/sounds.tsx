import Taro, { Dispatch } from "@tarojs/taro";
import { View } from "@tarojs/components";
// import { AtIcon } from "taro-ui";

import { gen_classname } from "../../utils";

interface IProps {
  sounds: Array<string>;
  index: number;
  setIndex: Dispatch<number>;
}

export default function Sounds({ sounds = [], index, setIndex }: IProps) {
  return (
    <View>
      <View
        className={gen_classname(index, 0)}
        onClick={() => setIndex(0)}
        style="padding:5PX"
      >
        {sounds[0]}
      </View>
      <View
        className={gen_classname(index, 1)}
        onClick={() => setIndex(1)}
        style="padding:5PX"
      >
        {sounds[1]}
      </View>
      <View
        className={gen_classname(index, 2)}
        onClick={() => setIndex(2)}
        style="padding:5PX"
      >
        {sounds[2]}
      </View>
      <View
        className={gen_classname(index, 3)}
        onClick={() => setIndex(3)}
        style="padding:5PX"
      >
        {sounds[3]}
      </View>
      <View
        className={gen_classname(index, 4)}
        onClick={() => setIndex(4)}
        style="padding:5PX"
      >
        {sounds[4]}
      </View>
    </View>
  );
}

Sounds.options = { addGlobalClass: true };
