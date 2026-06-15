import specialsData from "../data/specialsData";
import Card from "../components/Card";

function MenuPage() {
  return (
    <section className="menu-page">

      <div className="container">

        <h1>Our Menu</h1>

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

export default MenuPage;