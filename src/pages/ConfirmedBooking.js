import { Link, useLocation } from "react-router-dom";

function ConfirmedBooking() {

  const location = useLocation();

  const booking = location.state;

  if (!booking) {

  return (

    <section className="confirmation-page">

      <div className="container">

        <h1>No Reservation Found</h1>

        <p>
          Please make a reservation first.
        </p>

        <Link
          to="/reservations"
          className="primary-btn"
        >
          Make a Reservation
        </Link>

      </div>

    </section>

  );

}

  return (
    <section className="confirmation-page">

      <div className="container">

        <div className="success-icon">
          ✓
        </div>

        <h1>Booking Confirmed!</h1>

        <p>
          Your reservation has been successfully submitted.
        </p>

        {booking && (

          <div className="booking-summary">

            <h2>Reservation Details</h2>

            <p>
              <strong>Date:</strong> {booking.date}
            </p>

            <p>
              <strong>Time:</strong> {booking.time}
            </p>

            <p>
              <strong>Guests:</strong> {booking.guests}
            </p>

            <p>
              <strong>Occasion:</strong> {booking.occasion}
            </p>

          </div>

        )}

        <div className="confirmation-buttons">

          <Link
            to="/"
            className="secondary-btn"
          >
            Return Home
          </Link>

          <Link
            to="/reservations"
            className="primary-btn"
          >
            Book Another Table
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ConfirmedBooking;