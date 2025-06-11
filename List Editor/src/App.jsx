import { useState } from 'react';
import './App.css';

function App() {
  const [food, setFood] = useState(["pizza", "idli", "vada"]);

  function Addfooditem() {
    const input = document.getElementById("fooditem");
    const newitem = input.value.trim();

    if (newitem !== "") {
      setFood(f => [...f, newitem]); // Add new item
      input.value = ""; // Clear input
    }
  }

  function deletefooditem(index) {
    setFood(food.filter((_, i) => i !== index)); // Remove item at clicked index
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", backgroundColor:"#feb890" }}>List Editor</h1>
      <ul>
        {food.map((ele, index) => (
          <li key={index} onClick={() => deletefooditem(index)}>
            {ele}
          </li>
        ))}
      </ul>

      <input id="fooditem" placeholder="Enter food item" />
      <button onClick={Addfooditem}>Add Item</button>
    </div>
  );
}

export default App;
