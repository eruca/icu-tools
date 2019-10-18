import { FunctionComponent } from "react";
import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtDivider, AtModal, AtCalendar, AtButton } from "taro-ui";
import { useSelector, useDispatch } from "@tarojs/redux";

import { add, modify } from "../../actions/gcs";
import { GCSState, GCSItem } from "src/reducers/gcs";
import Sounds from "./sounds";
import Actions from "./actions";
import Eyes from "./eyes";
import { formatDate } from "../../utils";
import {
  eyes,
  eyeScores,
  sounds,
  soundScores,
  actions,
  actionScores
} from "./config";

const dispatch = useDispatch();

function Gcs() {
  const gcs: GCSState = useSelector((state: any) => state.gcs);
  // 日期
  const [dateString, setDateString] = useState(formatDate(new Date()));
  const [soundIndex, setSoundIndex] = useState(0);
  const [actionIndex, setActionIndex] = useState(0);
  const [eyeIndex, setEyeIndex] = useState(0);
  // 保存按钮: 如果是对既往数据的修改，就是修改按钮
  const [isModify, setModify] = useState(false);
  const [foundIndex, setFoundIndex] = useState(-1);
  const [isOpened, setOpen] = useState(false);

  useEffect(() => {
    // 选择的日期是否是既往日期，如果是既往日期需要把既往日期覆盖today
    const found = gcs.data.find((elem, i) => {
      if (elem.date === dateString) {
        setFoundIndex(i);
        return true;
      }
      return false;
    });
    setSoundIndex(found ? soundScores.indexOf(found.sound) : 0);
    setActionIndex(found ? actionScores.indexOf(found.action) : 0);
    setEyeIndex(found ? eyeScores.indexOf(found.eye) : 0);
    setModify(!!found);
  }, [dateString]);

  const score =
    eyeScores[eyeIndex] + soundScores[soundIndex] + actionScores[actionIndex];

  const onDayClick = (item: { value: string }) => {
    setDateString(item.value);
    setOpen(false);
  };

  const onSave = () => {
    const item: GCSItem = {
      date: dateString,
      eye: eyeScores[eyeIndex],
      sound: soundScores[soundIndex],
      action: actionScores[actionIndex]
    };

    if (isModify && foundIndex < 0) {
      throw new Error("修改的时候，foundIndex 不能小于0");
    }
    dispatch(isModify ? modify(item, foundIndex) : add(item));
  };

  return (
    <View>
      评估日期:
      <AtButton type="primary" onClick={() => setOpen(true)}>
        {dateString}
      </AtButton>
      <AtModal isOpened={isOpened} onClose={() => setOpen(false)}>
        <AtCalendar
          currentDate={dateString}
          onDayClick={onDayClick}
          marks={gcs.data.map(item => ({ value: item.date }))}
        />
      </AtModal>
      <View style="margin-top:5PX">
        GCS的评分结果是:
        <Text style="color:#dd4a68">
          {` ${eyeScores[eyeIndex]} + ${soundScores[soundIndex]} + ${
            actionScores[actionIndex]
          } = ${score}`}
        </Text>
      </View>
      <AtDivider content="睁眼" />
      <Eyes eyes={eyes} index={eyeIndex} setIndex={setEyeIndex} />
      <AtDivider content="声音" />
      <Sounds sounds={sounds} index={soundIndex} setIndex={setSoundIndex} />
      <AtDivider content="动作" />
      <Actions
        actions={actions}
        index={actionIndex}
        setIndex={setActionIndex}
      />
      <AtButton
        type="primary"
        className="global-margin-bottom-1px"
        onClick={onSave}
      >
        {isModify ? "修改" : "保存"}
      </AtButton>
      <AtButton
        type="primary"
        onClick={() => Taro.navigateTo({ url: "/pages/gcsVis/index" })}
      >
        图表
      </AtButton>
    </View>
  );
}

Gcs.config = {
  navigationBarTitleText: "GCS 评分"
};
Gcs.options = {
  addGlobalClass: true
};

export default Gcs as FunctionComponent<{}>;
