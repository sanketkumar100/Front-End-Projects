import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [comment, setComment] = useState("Guest");
  const [shipping, setShipping] = useState(""); // fixed typo here
  const [payment, setPayment] = useState("");

  function namehandler(event) {
    setName(event.target.value);
  }

  function agehandler(event) {
    setAge(event.target.value);
  }

  function commenthandler(event) {
    setComment(event.target.value);
  }

  function shippinghandler(event) {
    setShipping(event.target.value);
  }

  function paymenthandler(event) {
    setPayment(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={namehandler} />
      <p>Name: {name}</p>

      <input value={age} type='number' onChange={agehandler} />
      <p>Age: {age}</p>

      <textarea value={comment} placeholder='Enter your text:' onChange={commenthandler} />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={paymenthandler}>
        <option value="">Select payment option</option>
        <option value="visa">Visa</option>
        <option value="master card">Master Card</option>
        <option value="gift card">Gift Card</option>
      </select>
      <p>Payment Method: {payment}</p>

      <h3>Select Shipping Method:</h3>
      <label>
        <input
          type="radio"
          name="shipping"
          value="free"
          checked={shipping === "free"}
          onChange={shippinghandler}
        />
        Free Shipping
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="shipping"
          value="express"
          checked={shipping === "express"}
          onChange={shippinghandler}
        />
        Express Shipping
      </label>

      <p>Shipping Method: {shipping}</p>
    </div>
  );
}

export default App;
