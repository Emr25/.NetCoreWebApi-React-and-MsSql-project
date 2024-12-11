import {configureStore} from "@reduxjs/toolkit"
import  productSlice  from "./ProductSlice"
import  sepetSlice  from "./sepetSlice"



export const store = configureStore({
    reducer:{
        product:productSlice,
        basket:sepetSlice
    }
})
export default store;