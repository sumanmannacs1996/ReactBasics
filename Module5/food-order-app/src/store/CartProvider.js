import React,{useReducer} from 'react'
import CartContext from './cart-context'

const defaultCartState ={
    items:[],
    totalAmount:0
}
const cartResucer =(state,action)=>{
    if(action.type ="ADD"){
        const updatedItems = state.items.concat(action.item);
        const updatedAmount = state.totalAmount + action.item.price * action.item.quantity;
        return{
            items:updatedItems,
            totalAmount:updatedAmount
        }
    }
    
}
export default function CartProvider(props) {
    const [cartState,dispatchCartAction] = useReducer(cartResucer,defaultCartState);
    const addItemCartHandler =(item)=>{
        dispatchCartAction({type:'ADD',item:item})
    };
    const removeCartHandler =(id)=>{
        dispatchCartAction({type:'REMOVE',id:id})
    }
    const cartContext ={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemCartHandler,
        removeItem:removeCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
