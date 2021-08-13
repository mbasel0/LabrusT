import { put, takeLatest } from "redux-saga/effects";
import { LOGIN, } from "./constants";
import { setUser } from "./actions";
import { push } from 'connected-react-router'
import ApiStore from "../../utils/request";


export function* loginFuncSaga(action) {
  try {
    const response = yield ApiStore.auth.post("/login/en", action.values)
    if (response.data.message.type === "success") {
      yield put(setUser(response.data.result))
      yield put(push("/panel"))
    }
    else action.setErrorStatus(true)
  }
  catch (error) {
  
  }
}



export default function* loginSaga() {
  yield takeLatest(LOGIN, loginFuncSaga);
}
