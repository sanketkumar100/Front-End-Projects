import './App.css';

function App() {
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", backgroundColor:"#feb890" }}>🍕 Pizza Menu</h1>
      <div className="pizza-list">
        <PizzaCard 
          name="Margherita"
          img="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
          details="Classic cheese and tomato pizza with fresh basil."
        />
        <PizzaCard 
          name="Pepperoni"
          img="https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp"
          details="Spicy pepperoni with mozzarella on a tomato base."
        />
        <PizzaCard 
          name="Veggie Supreme"
          img="https://sinfullyspicy.com/wp-content/uploads/2022/02/Tandoori-Mushroom-Pizza-Featured-Image.jpg"
          details="Loaded with onions, capsicum, olives and more."
        />
        <PizzaCard 
          name="BBQ Chicken"
          img="https://cdn.uengage.io/uploads/5/image-677172-1715678909.png"
          details="BBQ chicken with red onions and mozzarella."
        />
        <PizzaCard 
          name="Paneer Tikka"
          img="https://bhukkadcompany.com/wp/wp-content/uploads/2024/06/21-Best-Pizzas-in-Mumbai-You-Must-Try-A-Pizza-Lovers-Paradise-1-710x473.png"
          details="Spicy paneer cubes with onion and green capsicum."
        />
        <PizzaCard 
          name="Mexican Green Wave"
          img="https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg"
          details="Mexican herbs sprinkled on exotic veggies."
        />
      </div>
    </div>
  );
}

function PizzaCard({ name, img, details }) {
  return (
    <div className="pizza-card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{details}</p>
    </div>
  );
}

export default App;
