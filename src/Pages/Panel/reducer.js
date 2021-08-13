import produce from "immer";
import { SET_ITEMS } from "./constants";

export const initialState = {
  items: []
};

const panelReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ITEMS:
        draft.items = action.values;
        break;
      default:
        return draft;
    }
  });

export default panelReducer;
