

import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectpanel = (state) => state.panel || initialState;
const makeSelectPanel = () =>
  createSelector(selectpanel, (panelState) => panelState);

export { selectpanel, makeSelectPanel };
