import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./table-details.css";

const availableColors = ['black', 'wheat', 'brown'];

function TableDetails() {
  const { tableType, tableName } = useParams();
  const [tableData, setTableData] = useState(null);
  const [selectedColor, setSelectedColor] = useState(availableColors[0]);
  const navigate = useNavigate();

  const fetchTableData = async () => {
    try {
      const response = await fetch(`/json/tables_${tableType}_table.json`);
      const data = await response.json();
      const table = data.find(t => t.name.replace(/\s+/g, "-").toLowerCase() === tableName);
      setTableData(table);
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  };

  const handleAddToCart = () => {
    if (!tableData) return;

    const storedCart = localStorage.getItem("cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];

    const existingItem = cart.find(item => item.name === tableData.name && item.color === selectedColor);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        name: tableData.name,
        price: tableData.price,
        color: selectedColor,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Added ${tableData.name} to cart!`);
  };

  const handleOrderNow = (e) => {
    e.preventDefault();
  
    const customerData = {
      name: e.target.name.value,
      email: e.target.email.value,
      date: e.target.date.value,
    };
  
    const orderData = {
      customer: customerData,
      product: {
        name: tableData.name,
        price: tableData.price,
        color: selectedColor,
        description: tableData.description,
        quantity: 1, 
      },
    };
  
    localStorage.setItem("order", JSON.stringify({
      customer: orderData.customer,
      products: [orderData.product]
    }));
  
    navigate("/order-confirmation");
  };
  
  

  useEffect(() => {
    fetchTableData();
  }, [tableType, tableName]);

  if (!tableData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="table-details">
      <section className="product-info">
        <h1>{tableData.name}</h1>
        <div>
          <img src={`/imgs/tables/${(tableData.type).split(" ")[0].toLowerCase()} table.jpg`} alt={tableData.name} />
        </div>
        <p>{`Wood: ${tableData.wood}`}</p>
        <p>{`Price: ${tableData.price}`}</p>
        <p>{tableData.description}</p>
      </section>
      <section className="color-picker">
        <div className="color-circle">
          {availableColors.map(color => (
            <div
              key={color}
              className={`color-selection ${color === selectedColor ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
        <button type="button" className="color-apply">Apply</button>
        <p className="color-desc">
          Beautiful text about some beautiful table, for beautiful person, and color that you can chose for your beautiful life, for beautiful table... Yes, choose color for table that you want to "buy". Go and try ;)
        </p>
      </section>
      <form action="#" className="product-buy" onSubmit={handleOrderNow}>
        <div className="name-field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="enter your n a m e" required />
        </div>
        <div className="email-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="enter your email " required />
        </div>
        <div className="date-field">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" required />
        </div>
        <div className="order-type">
          <button type="submit">Order</button>
          <button type="button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </form>
    </div>
  );
}

export default TableDetails;
