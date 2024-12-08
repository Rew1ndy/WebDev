import React, { useEffect, useState } from "react";
import "./order-confirmation.css";

function OrderConfirmation() {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const storedOrder = localStorage.getItem("order");

    if (storedOrder) {
      setOrderData(JSON.parse(storedOrder));
    } else {
      console.error("Order data not found in Local Storage.");
    }
  }, []);

  if (!orderData) {
    return <p>Loading...</p>;
  }

  const { customer, products } = orderData;

  if (!customer || !products) {
    return <p>Order data is incomplete. Please check your order.</p>;
  }

  const totalPrice = orderData.products.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log(totalPrice);


  return (
    <div className="order-confirmation">
      <h1>Order Successful!</h1>
      <section className="order-details">
        <h2>Customer Information</h2>
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Order Date:</strong> {customer.date}</p>
      </section>
      <section className="product-details">
        <h2>Ordered Product</h2>
        {Array.isArray(products) ? (
          products.map((product, index) => (
            <div key={index}>
              <h3>{product.name}</h3>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Color:</strong> {product.color}</p>
              <p><strong>Quantity:</strong> {product.quantity}</p>
            </div>
          ))
        ) : (
          <div>
            <h3>{products.name}</h3>
            <p><strong>Price:</strong> ${products.price}</p>
            <p><strong>Color:</strong> {products.color}</p>
            <p><strong>Quantity:</strong> {products.quantity}</p>
          </div>
        )}
      </section>
      <h4>Total price: {totalPrice}$</h4>
    </div>
  );
}

export default OrderConfirmation;
