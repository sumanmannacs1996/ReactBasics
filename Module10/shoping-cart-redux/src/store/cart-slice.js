import {createSlice} from '@reduxjs/toolkit';

const cartSlice =createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantty:0,
    },
    reducers:{
        addItemToCart(state,action) {
            state.totalQuantty++;
            const newItem = action.payload;
            const existingItem = state.items.find(p=>p.id === newItem.id);
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    name:newItem.name,
                    description:newItem.description,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price
                });
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemToCart(state,action) {
            state.totalQuantty--;
            const deleteItem = action.payload;
            const existingItem = state.items.find(p=>p.id === deleteItem.id);
            if(existingItem.quantity === 1){
                state.items = state.items.filter(p=>p.id !== deleteItem.id);
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice =existingItem.totalPrice - deleteItem.price;
            }
        }
    }
});

export const cartActions= cartSlice.actions;
export default cartSlice;