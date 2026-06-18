# Little Lemon Restaurant Reservation App

## Overview

Little Lemon is a responsive React web application that allows customers to browse restaurant information and reserve tables online. The project was developed as part of the Meta Front-End Developer Capstone.

The application focuses on accessibility, responsiveness, user experience, and modern React development practices.

---

## Features

* Responsive homepage
* Navigation using React Router
* Table reservation form
* Dynamic available booking times
* Form validation using HTML5 and React
* Booking confirmation page
* Display of reservation details
* Custom 404 page
* Responsive layout
* Accessible forms and semantic HTML
* Unit testing with Jest and React Testing Library

---

## Technologies Used

* React
* React Router DOM
* JavaScript (ES6)
* HTML5
* CSS3
* Jest
* React Testing Library

---

## Project Structure

```text
src
│
├── assets
├── components
│   ├── Header.js
│   ├── Nav.js
│   ├── Footer.js
│   └── BookingForm.js
│
├── data
│   ├── specialsData.js
│   ├── testimonialsData.js
│
│
├── pages
│   ├── Homepage.js
│   ├── BookingPage.js
│   ├── AboutPage.js
│   ├── MenuPage.js
│   ├── OrderOnlinePage.js
│   ├── LoginPage.js
│   ├── ConfirmedBooking.js
│   └── NotFoundPage.js
│
├── api.js
├── utils.js
├── App.js
├── App.css
├── App.test.js
└── index.js
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Lemone006/little-lemon.git
```

Navigate into the project:

```bash
cd little-lemon
```

Install dependencies:

```bash
npm install
```

---

## Running the Application

Start the development server:

```bash
npm start
```

Open:

```text
http://localhost:3000
```

---

## Running Tests

Run all tests:

```bash
npm test
```

---

## Accessibility Features

* Semantic HTML elements
* Labels associated with form controls
* Keyboard navigation support
* Focus indicators
* Responsive design
* Meaningful error messages

---

## Testing

Unit tests were implemented for:

* initializeTimes()
* updateTimes()
* Booking form rendering
* Date input rendering
* Guest input rendering
* Submit button rendering

---

## Author

Shepherd Mabhena

Meta Front-End Developer Capstone Project
