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

test("updateTimes returns the expected times when date changes", () => {

  const state = [];

  const action = {
    type: "dateChanged",
    date: "2026-06-15"
  };

  const expectedTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];

  expect(
    updateTimes(state, action)
  ).toEqual(expectedTimes);

});