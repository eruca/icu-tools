import Taro, { Dispatch } from "@tarojs/taro";
import { View, Picker } from "@tarojs/components";

export interface ICPickerProps {
  items: Array<string>;
  scores: Array<number>;
  text: string;
  index: number;
  setIndex: Dispatch<number>;
}

export default function CPicker({
  items = [],
  text,
  index,
  setIndex
}: ICPickerProps) {
  return (
    <Picker
      mode="selector"
      range={items}
      onChange={v => setIndex(v.detail.value)}
      value={index}
    >
      <View>{`${text}: ${items[index]}`}</View>
    </Picker>
  );
}
