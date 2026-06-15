function Card({
  image,
  title,
  price,
  description
}) {
  return (
    <article className="card">

      <img
        src={image}
        alt={title}
      />

      <div className="card-content">

        <div className="card-heading">

          <h3>{title}</h3>

          <span className="price">
            {price}
          </span>

        </div>

        <p>{description}</p>

        <button className="secondary-btn">
          Order Online
        </button>

      </div>

    </article>
  );
}

export default Card;