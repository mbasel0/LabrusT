import { put, takeLatest } from "redux-saga/effects";
import {  GET_ITEMS } from "./constants";
import { setItems } from "./actions";


import {
  loadError,
  loadSuccess,
  loading,
} from "../../Components/Spinner/actions";

import ApiStore from "../../utils/request";




export function* getItemSaga(action) {
  try {
    const response = yield ApiStore.package.get("/packages/en")
    if (response.data.message.type === "success") yield put(setItems(response.data.result));
  }
  catch (error) {
  }
}

export default function* panelSaga() {
  yield takeLatest(GET_ITEMS, getItemSaga);
}
