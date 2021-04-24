import React,{useReducer} from 'react'
import CartContext from './cart-context'

const defaultCartState ={
    items:[],
    totalAmount:0
}
const cartResucer =(state,action)=>{
    if(action.type ==="ADD"){
        const updatedAmount = state.totalAmount + action.item.price * action.item.quantity;
        const existingCartItemIndex =state.items.findIndex((p)=>p.id === action.item.id);
        let updatedItems;
        if(existingCartItemIndex=== -1)
            updatedItems = [...state.items,action.item];
        else{
            const iteamData = state.items[existingCartItemIndex];
            const updatedItemData = {...iteamData,quantity:iteamData.quantity + action.item.quantity};
            updatedItems =[...state.items];
            updatedItems[existingCartItemIndex] = updatedItemData;
        } 
        return{
            items:updatedItems,
            totalAmount:updatedAmount
        }
    }
    if(action.type==="REMOVE"){
        let updatedItems;
        const findItemIndex = state.items.findIndex((p)=>p.id ===action.id);
        let updatedAmount = state.totalAmount - state.items[findItemIndex].price;
        if(state.items[findItemIndex].quantity >1){
            const iteamData = state.items[findItemIndex];
            const updatedItemData = {...iteamData,quantity:iteamData.quantity - 1};
            updatedItems =[...state.items];
            updatedItems[findItemIndex] = updatedItemData;
        }
        else{
            updatedItems = state.items.filter((p)=>p.id !== action.id);
        }

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
