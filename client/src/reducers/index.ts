import { combineReducers } from "redux";
import counter from "./counter";
import gcs from "./gcs";

export default combineReducers({
  counter,
  gcs
});
