import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  items: [],
  status: null
}
export const productFetch = createAsyncThunk(
  'products/productFetch',
  async () => {
    const res = await axios.get('http://localhost:5000/products')
    return res?.data
  }
)
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers:{
    [productFetch.pending]:(state, action)=>{
        state.status= "pending"
    },
    [productFetch.fulfilled]:(state, action)=>{
        state.status= "success"
        state.items= action.payload
    },
    [productFetch.rejected]:(state, action)=>{
        state.status= "rejected"
    }
  }
});
export default productSlice.reducer
