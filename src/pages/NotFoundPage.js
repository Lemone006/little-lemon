import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="not-found-page">

      <div className="container">

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="primary-btn"
        >
          Return Home
        </Link>

      </div>

    </section>
  );
}

export default NotFoundPage;