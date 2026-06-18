import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import Homepage from "../pages/Homepage";
import BookingPage from "../pages/BookingPage";
import AboutPage from "../pages/AboutPage";
import MenuPage from "../pages/MenuPage";
import OrderOnlinePage from "../pages/OrderOnlinePage";
import LoginPage from "../pages/LoginPage";
import ConfirmedBooking from "../pages/ConfirmedBooking";
import NotFoundPage from "../pages/NotFoundPage";

import {
  initializeTimes,
  updateTimes
} from "../utils";

function Main() {

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main>
      <Routes>

        {/* Homepage */}
        <Route
          path="/"
          element={<Homepage />}
        />
        
        {/* Booking Page */}
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* Menu Page */}
        <Route
          path="/menu"
          element={<MenuPage />}
        />

        {/* Order Online Page*/}
        <Route
          path="/order-online"
          element={<OrderOnlinePage />}
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* Confirmation Page */}
        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />

        {/* 404 Page */}
        <Route
          path="*"
          element={<NotFoundPage />}
        />

      </Routes>
    </main>
  );
}

export default Main;