import { createSlice } from '@reduxjs/toolkit';

const shoppingSlice = createSlice({
    name: 'shopping',
    initialState: {
      items: [],
    },
    reducers: {
      addItem: (state, action) => {
        console.log('До додавання:', JSON.parse(JSON.stringify(state.items)));
        state.items.push(action.payload);
        console.log('Після додавання:', JSON.parse(JSON.stringify(state.items)));
      },
      removeItem: (state, action) => {
        console.log('До видалення:', JSON.parse(JSON.stringify(state.items)));
        state.items = state.items.filter(item => item.id !== action.payload);
        console.log('Після видалення:', JSON.parse(JSON.stringify(state.items)));
      },
    },
  });
  
export const { addItem, removeItem } = shoppingSlice.actions;
export default shoppingSlice.reducer;
