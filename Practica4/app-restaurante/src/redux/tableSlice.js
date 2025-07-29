'use client'

import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
for (let i = 1; i <= 10; i++) {
  initialState[i] = { id : i, available: true, orders: [] };
}


const tableState = createSlice({
    name: 'table',
    initialState,
    reducers:
    {        
        setTableAvailable: (state, action) => {
            const id = action.payload;
            state[id].available = !state[id].available;
        },
        addOrder: (state, action) => {
            const { id, order } = action.payload;
            state[id].orders.push(order);
        },
        removeOrder: (state, action) => {
            const { id, index } = action.payload;
            state[id].orders.splice(index, 1);
        }
    }
})

export const { setTableAvailable, addOrder, removeOrder } = tableState.actions;
export default tableState.reducer;