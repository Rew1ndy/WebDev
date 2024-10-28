import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from './shoppingSlice';

const ShoppingList = () => {
  const [input, setInput] = useState('');
  const items = useSelector((state) => state.shopping.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (input.trim()) {
      dispatch(addItem({ id: Date.now(), name: input }));
      setInput('');
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add item"
      />
      <button onClick={handleAddItem}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
