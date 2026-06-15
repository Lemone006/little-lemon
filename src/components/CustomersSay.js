import TestimonialCard from "./TestimonialCard";
import testimonialsData from "../data/testimonialsData";

function CustomersSay() {
  return (
    <section className="testimonials">

      <div className="container">

        <h2>
          What Our Customers Say
        </h2>

        <div className="testimonials-grid">

          {testimonialsData.map((customer) => (
            <TestimonialCard
              key={customer.id}
              image={customer.image}
              name={customer.name}
              rating={customer.rating}
              review={customer.review}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default CustomersSay;