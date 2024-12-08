import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    date: "",
  });
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  // Загружаем корзину из Local Storage при загрузке страницы
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Обработка изменения данных формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value,
    });
  };

  // Обработка оформления заказа
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Проверяем, все ли поля заполнены
    if (!customerData.name || !customerData.email || !customerData.date) {
      setFormError("Please fill in all fields.");
      return;
    }

    // Формируем данные заказа
    const orderData = {
      customer: customerData,
      products: cart.map(item => ({
        name: item.name,
        price: item.price,
        color: item.color,
        quantity: item.quantity,
      })),
    };

    // Сохраняем данные заказа в Local Storage
    localStorage.setItem("order", JSON.stringify(orderData));

    // Очищаем корзину и перенаправляем на страницу подтверждения
    localStorage.removeItem("cart");
    setCart([]);
    navigate("/order-confirmation");
  };

  const removeItem = (name, color, quantity) => {
    console.log(cart, name, color);
    let updatedCart;
    if (quantity == 1) {
      updatedCart = cart.filter(item => ((item.color != color) || (item.name != name)));
    } else {
      updatedCart = cart.map(item => ((item.color == color) && (item.name == name)) ? {name : item.name, price : item.price, color: item.color, quantity : item.quantity - 1} : item)
    }
    console.log(updatedCart);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      {    console.log(cart) }
      <section className="cart-items">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Color: {item.color}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeItem(item.name, item.color, item.quantity)}>Remove</button>
            </div>
          ))
        )}
      </section>
      {cart.length > 0 && (
        <section className="cart-summary">
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <form onSubmit={handlePlaceOrder} className="order-form">
            <div className="name-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={customerData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="email-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={customerData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="date-field">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                value={customerData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            {formError && <p className="error">{formError}</p>}
            <button type="submit">Place Order</button>
          </form>
        </section>
      )}
    </div>
  );
}

export default Cart;
