import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../api";

function BookingForm({
  availableTimes,
  dispatch
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const errors = {
    date: date === "",
    guests: guests < 1 || guests > 10
  };

  const navigate = useNavigate();

  const today = new Date()
  .toISOString()
  .split("T")[0];


function handleSubmit(e) {

  e.preventDefault();

  if (errors.date || errors.guests) {
    return;
  }

  const formData = {
    date,
    time,
    guests,
    occasion
  };

  const success = submitAPI(formData);

  if (success) {
    navigate("/confirmed");
  }

}

  return (
    <>
      <h1 aria-label="Booking Form Heading">
        Book Now
      </h1>

      <form
        className="booking-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">
          Choose Date
        </label>

        <input
          type="date"
          min={today}
          id="res-date"
          required
          value={date}
          onChange={(e) => {
            setDate(e.target.value);

            dispatch({
                type: "dateChanged",
                date: e.target.value
            });
        }}
        />

        {errors.date && (
          <p className="error">
            Please select a date
          </p>
        )}

        <label htmlFor="res-time">
          Choose Time
        </label>

        <select
          id="res-time"
          value={time}
          required
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((availableTime) => (
            <option
              key={availableTime}
              value={availableTime}
            >
              {availableTime}
            </option>
          ))}
        </select>

        <label htmlFor="guests">
          Number of Guests
        </label>

        <input
          type="number"
          id="guests"
          aria-label="Number of Guests"
          min="1"
          max="10"
          required
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        />

        {errors.guests && (
          <p className="error">
            Number of guests must be between 1 and 10.
          </p>
        )}

        <label htmlFor="occasion">
          Occasion
        </label>

        <select
          id="occasion"
          required
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <button
          className="primary-btn"
          type="submit"
          aria-label="Submit Reservation"
          disabled={errors.date || errors.guests}
        >
          Make Your Reservation
        </button>
      </form>
    </>
  );
}

export default BookingForm;