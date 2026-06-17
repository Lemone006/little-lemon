import Card from "./Card";
import specialsData from "../data/specialsData";
import { Link } from "react-router-dom";

function Specials() {
  return (
    <section className="specials">

      <div className="container">

        <div className="specials-header">

          <h2>This Week's Specials</h2>

          <Link
            to="/menu"
            className="primary-btn"
          >
            Online Menu
          </Link>

        </div>

        <div className="cards">

          {specialsData.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Specials;