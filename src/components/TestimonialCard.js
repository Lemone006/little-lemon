function TestimonialCard({
  image,
  name,
  rating,
  review
}) {
  return (
    <article className="testimonial-card">

      <img
        src={image}
        alt={name}
      />

      <h4>{name}</h4>

      <p className="rating">
        {rating}
      </p>

      <p>{review}</p>

    </article>
  );
}

export default TestimonialCard;