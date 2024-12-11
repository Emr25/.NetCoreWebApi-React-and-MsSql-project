import { createSlice } from "@reduxjs/toolkit";



const getBasketFromStoreAge =()=>{
    if(localStorage.getItem("basket"))
    {
        return JSON.parse(localStorage.getItem("basket"));
    }
     return [];
    
}

const initialState = {
    products:getBasketFromStoreAge(),
    totalAmount:0
}


const writeFromBasketStoreAge = (basket)=>{
    localStorage.setItem("basket",JSON.stringify(basket))
}





export const sepetSlice = createSlice({
    name:"Sepet",
    initialState,
    reducers:{
    addToBasket : (state,action)=>{
        const findProduct = state.products && state.products.find((product)=>product.id === action.payload.id);
        if(findProduct)
        {
            const extractedProduct = state.products.filter((product)=>product.id !== action.payload.id);
            findProduct.count += action.payload.count;
            state.products=[...extractedProduct,findProduct];
            writeFromBasketStoreAge(state.products);
        }
        else{
            state.products=[...state.products,action.payload];
            writeFromBasketStoreAge(state.products);
        }

    },
    removeFromCart:(state,action)=>{
        state.products=state.products.filter((product)=>product.id !== action.payload.id)
        localStorage.setItem("basket",JSON.stringify(state.products))
    },
    completeCart:(state)=>{
        state.products=[];
        state.totalAmount=0;
        localStorage.removeItem("basket");
    },
    calculateSepet:(state)=>{
        state.totalAmount = 0
        state.products && state.products.map((product)=>{
            state.totalAmount += product.Price*product.count;
        })
    }

    }
    
    
    
})

export const {addToBasket,removeFromCart,completeCart,calculateSepet} = sepetSlice.actions
export default sepetSlice.reducer

