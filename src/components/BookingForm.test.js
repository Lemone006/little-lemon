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