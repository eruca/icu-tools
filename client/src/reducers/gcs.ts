import { GCS_ADD, GCS_MODIFY } from "../constants/gcs";
import { Action } from "../actions/base";

export interface GCSItem {
  date: string;
  eye: number;
  sound: number;
  action: number;
}

export type GCSState = {
  data: Array<GCSItem>;
};

const INITIAL_STATE: GCSState = {
  data: [
    { date: "2019-07-10", eye: 3, sound: 4, action: 3 },
    { date: "2019-07-13", eye: 4, sound: 5, action: 6 },
    { date: "2019-07-15", eye: 3, sound: 4, action: 3 },
    { date: "2019-07-16", eye: 3, sound: 3, action: 6 },
    { date: "2019-07-17", eye: 3, sound: 4, action: 5 },
    { date: "2019-07-19", eye: 3, sound: 4, action: 3 },
    { date: "2019-07-20", eye: 3, sound: 4, action: 3 },
    { date: "2019-07-23", eye: 4, sound: 5, action: 6 },
    { date: "2019-07-25", eye: 3, sound: 4, action: 3 },
    { date: "2019-07-26", eye: 3, sound: 3, action: 6 },
    { date: "2019-07-29", eye: 3, sound: 4, action: 5 },
    { date: "2019-07-30", eye: 3, sound: 4, action: 3 }
  ]
};

export default function gcs(state = INITIAL_STATE, action: Action): GCSState {
  switch (action.type) {
    case GCS_ADD:
      const data1 = [...state.data, action.payload.data];
      data1.sort((a, b) => (a.date < b.date ? -1 : 1));
      return { data: data1 };

    case GCS_MODIFY:
      const { data, index } = action.payload as {
        data: GCSItem;
        index: number;
      };
      return {
        data: [
          ...state.data.slice(0, index),
          data,
          ...state.data.slice(index + 1)
        ]
      };
    default:
      return state;
  }
}
