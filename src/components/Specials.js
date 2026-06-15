import Card from "./Card";
import specialsData from "../data/specialsData";

function Specials() {
  return (
    <section className="specials">

      <div className="container">

        <div className="specials-header">

          <h2>This Week's Specials</h2>

          <button className="primary-btn">
            Online Menu
          </button>

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