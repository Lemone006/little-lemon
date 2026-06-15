import restaurantImage from "../assets/restaurant.jpg";

function Chicago() {
  return (
    <section className="about">

      <div className="container about-container">

        <div className="about-text">

          <h2>Little Lemon</h2>

          <h3>Chicago</h3>

          <p>
            Little Lemon is a family-owned Mediterranean restaurant
            that combines traditional recipes with a modern twist.
          </p>

          <p>
            Our mission is to provide fresh ingredients,
            authentic flavors and unforgettable dining experiences.
          </p>

        </div>

        <div className="about-image">

          <img
            src={restaurantImage}
            alt="Restaurant"
          />

        </div>

      </div>

    </section>
  );
}

export default Chicago;