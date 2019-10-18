import { GCS_ADD, GCS_MODIFY } from "../constants/gcs";
import { GCSItem } from "../reducers/gcs";
import { Action } from "./base";

export function add(item: GCSItem): Action {
  return {
    type: GCS_ADD,
    payload: {
      data: item
    }
  };
}

export function modify(item: GCSItem, index: number) {
  return {
    type: GCS_MODIFY,
    payload: {
      data: item,
      index
    }
  };
}
