import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: []
};

const baseUrl = "http://localhost:5042/api/Product";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const response = await axios.get(`${baseUrl}`);
    return response.data;
});

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });
    }
});

export const {} = productSlice.actions;
export default productSlice.reducer;
