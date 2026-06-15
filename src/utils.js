import { fetchAPI } from "./api";

export function initializeTimes() {

  return fetchAPI(new Date());

}

export function updateTimes(state, action) {

  switch (action.type) {

    case "dateChanged":
      return fetchAPI(action.date);

    default:
      return state;

  }

}