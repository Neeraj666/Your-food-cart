import { createSlice } from "@reduxjs/toolkit";

const initialState={
    carts : []
}

//cart slice
const cartSlice = createSlice({
    name:'cartslice',
    initialState,
    reducers : {

    //add to cart 
        addToCart : (state, action)=>{
            const IteamIndex = state.carts.findIndex((iteam) =>iteam.id === action.payload.id);
            if(IteamIndex >=0){
                state.carts[IteamIndex].qnty +=1
            }
            else{
                const temp = { ...action.payload, qnty: 1 }
                state.carts = [...state.carts, temp]
            }
        },

    // remove  perticular iteams
        removeToCart : (state, action)=>{
            // state.carts.splice(action.payload ,1);
            const data = state.carts.filter((ele)=>ele.id !== action.payload);
            state.carts = data
        },
    
    // remove single iteams
        removeSingleIteams: (state, action)=>{
            const ItemIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

            if(state.carts[ItemIndex_dec].qnty > 1){
                state.carts[ItemIndex_dec].qnty -= 1
            }
        },

        emptycartIteam: (state, action)=>{
            state.carts = []
        }
    }
})
export const {addToCart,removeToCart, removeSingleIteams, emptycartIteam} = cartSlice.actions;
export default cartSlice.reducer