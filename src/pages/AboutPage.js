import restaurantImage from "../assets/restaurant.jpg";

function AboutPage() {
  return (
    <section className="about-page">

      <div className="container">

        <h1>About Little Lemon</h1>

        <div className="about-page-content">

          <div className="about-page-text">

            <p>
              Little Lemon is a family-owned Mediterranean restaurant
              located in Chicago.
            </p>

            <p>
              Inspired by traditional recipes and modern flavors,
              we strive to create memorable dining experiences
              for every guest.
            </p>

            <p>
              Our chefs use fresh ingredients and authentic recipes
              to deliver delicious meals with exceptional service.
            </p>

          </div>

          <div className="about-page-image">

            <img
              src={restaurantImage}
              alt="Little Lemon Restaurant"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutPage;