import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={[
          "17:00",
          "18:00",
          "19:00"
        ]}
        dispatch={() => {}}
      />
    </BrowserRouter>
  );

  const headingElement = screen.getByText("Book Now");

  expect(headingElement).toBeInTheDocument();
});

test("Time options are rendered", () => {

  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={[
          "17:00",
          "18:00",
          "19:00"
        ]}
        dispatch={() => {}}
      />
    </BrowserRouter>
  );

  expect(
    screen.getByText("17:00")
  ).toBeInTheDocument();

});

test("Guests input is present", () => {

  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={[
          "17:00",
          "18:00",
          "19:00"
        ]}
        dispatch={() => {}}
      />
    </BrowserRouter>
  );

  expect(
    screen.getByLabelText(
      "Number of Guests"
    )
  ).toBeInTheDocument();

});

test("Date input is present", () => {

  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={["17:00"]}
        dispatch={() => {}}
      />
    </BrowserRouter>
  );

  expect(
    screen.getByLabelText(
      "Choose Date"
    )
  ).toBeInTheDocument();

});

