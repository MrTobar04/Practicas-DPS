'use client'

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    state : 'Pendiente',
    products: []
}


const tableState = createSlice({
    name: 'order',
    initialState,
    reducers:
    {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((_, index) => index !== action.payload);
        },
        modifyOrder: (state, action) => {
            state.state = action.payload;
        }
    }
})