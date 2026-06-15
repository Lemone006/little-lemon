import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import Homepage from "../pages/Homepage";
import BookingPage from "../pages/BookingPage";
import AboutPage from "../pages/AboutPage";
import MenuPage from "../pages/MenuPage";
import OrderOnlinePage from "../pages/OrderOnlinePage";
import LoginPage from "../pages/LoginPage";
import ConfirmedBooking from "../pages/ConfirmedBooking";

import {
  initializeTimes,
  updateTimes
} from "../utils";

function Main() {

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes()
  );

  return (
    <main>
      <Routes>

        <Route
          path="/"
          element={<Homepage />}
        />

        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/menu"
          element={<MenuPage />}
        />

        <Route
          path="/order-online"
          element={<OrderOnlinePage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />

      </Routes>
    </main>
  );
}

export default Main;