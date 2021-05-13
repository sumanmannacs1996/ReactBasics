import {createSlice} from '@reduxjs/toolkit';

import {uiActions} from './ui-slice';
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

export const sendCartData=(cartData)=>{
    return async (dispatch)=>{
        dispatch(
            uiActions.showNotification({
                status:'pending',
                title:'Sending...',
                message:'Sending cart data!'
              })
        );
        const sendRequest = async()=>{
            const res = await fetch('https://react-http-1e282-default-rtdb.firebaseio.com/Cart.json',{
                method:"PUT",
                 body:JSON.stringify(cartData)
                });
                if(!res.ok){
                    throw new Error('Not able to send data!');
                }
            }
        try{
            await sendRequest();

            dispatch(uiActions.showNotification({
                status:'success',
                title:'Success!',
                message:'Sent cart data Successfully!'
                }));
        }catch(err){
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!',
                message:'Sending cart data failed!'
              }));
        } 
    }
}

export const cartActions= cartSlice.actions;
export default cartSlice;