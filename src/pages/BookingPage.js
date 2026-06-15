import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { initializeTimes, updateTimes } from "../utils";

function BookingPage() {

  const [availableTimes, dispatch] =
    useReducer(
      updateTimes,
      [],
      initializeTimes
    );

  return (
    <section className="booking-page">

      <div className="container">

        <h1>Reserve a Table</h1>

        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
        />

      </div>

    </section>
  );
}

export default BookingPage;