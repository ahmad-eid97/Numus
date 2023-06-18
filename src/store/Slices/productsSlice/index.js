import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
}

const products = createSlice({
  name: 'products slice',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let productFound = state.products.find(product => product.title === action.payload.title)
      productFound ? productFound.quantity += 1 : state.products.push(action.payload);
    }
  }
});

export const {
  addProduct
} = products.actions;
export default products.reducer;