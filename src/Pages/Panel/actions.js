import { GET_ITEMS, SET_ITEMS } from "./constants";

export function getItems() {
  return {
    type: GET_ITEMS,
  };
}

export function setItems(values) {
  return {
    type: SET_ITEMS,
    values,
  };
}

