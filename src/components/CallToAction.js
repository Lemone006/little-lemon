import heroImage from "../assets/restaurant-food.jpg";

function CallToAction() {
  return (
    <section className="hero">
      <div className="container hero-container">

        <div className="hero-text">
          <h1>Little Lemon</h1>

          <h2>Chicago</h2>

          <p>
            We are a family-owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>

          <button className="primary-btn">
            Reserve a Table
          </button>
        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="Restaurant food"
          />
        </div>

      </div>
    </section>
  );
}

export default CallToAction;