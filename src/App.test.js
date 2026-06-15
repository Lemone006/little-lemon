import {
  initializeTimes,
  updateTimes
} from "./utils";

test("initializeTimes returns the expected times", () => {

  const expectedTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];

  expect(initializeTimes()).toEqual(expectedTimes);

});


test("updateTimes returns the same state", () => {

  const state = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];

  const action = {
    type: "dateChanged"
  };

  expect(
    updateTimes(state, action)
  ).toEqual(state);

});