import { useState } from "@tarojs/taro";

export function gen_ages(defaultIndex = 0) {
  const [index, setIndex] = useState(defaultIndex);
  return {
    index,
    setIndex,
    items: ["0~44", "45~54", "55~64", "65~75", "75~"],
    scores: [0, 1, 2, 3, 4],
    text: "年龄(岁)"
  };
}

export function gen_retalTemp(defaultIndex = 4) {
  const [index, setIndex] = useState(defaultIndex);
  return {
    index,
    setIndex,
    items: [
      "~29.9",
      "30~31.9",
      "32~33.9",
      "34~35.9",
      "36~38.4",
      "38.5~38.9",
      "39~40.9",
      "41~"
    ],
    scores: [4, 3, 2, 1, 0, 1, 3, 4],
    text: "肛温(℃)"
  };
}
export function gen_map(defaultIndex = 2) {
  const [index, setIndex] = useState(defaultIndex);
  return {
    index,
    setIndex,
    items: ["~49", "50~69", "70~109", "110~129", "130~159", "160~"],
    scores: [4, 2, 0, 2, 3, 4],
    text: "平均动脉压(mmHg)"
  };
}

export function gen_heartRate(defaultIndex = 3) {
  const [index, setIndex] = useState(defaultIndex);
  return {
    index,
    setIndex,
    items: ["~39", "40~54", "55~69", "70~109", "110~139", "140~179", "180~"],
    scores: [4, 3, 2, 0, 2, 3, 4],
    text: "心率(bmp)"
  };
}

export function gen_respirateRate(defaultIndex = 3) {
  const [index, setIndex] = useState(defaultIndex);
  return {
    index,
    setIndex,
    items: ["~5", "6~9", "10~11", "12~24", "25~34", "35~49", "50~"],
    scores: [4, 2, 1, 0, 1, 3, 4],
    text: "呼吸频率(次/分)"
  };
}
