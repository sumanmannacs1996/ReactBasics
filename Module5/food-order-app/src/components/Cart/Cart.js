import React,{useContext,useState} from 'react'
import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout';
export default function Cart(props) {
    const [isCheckout,setCheckout] = useState(false);
    const [isSubmiting,setSubmiting] = useState(false);
    const [didSubmit,setDidSubmit] = useState(false);
    const [error,setError] = useState(undefined);
    const cartCtx = useContext(CartContext);
    const hasItem = cartCtx.items.length > 0;
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const cartItemAddHandler =(item)=>{
        cartCtx.addItem(item);
    }
    const cartItemDeleteHandler =(id)=>{
        cartCtx.removeItem(id);
    }
    const orderHnadler=()=>{
        setCheckout(true);
    }

    const submitOrderHandler=(addressData)=>{
        const placeOrder =async()=>{
            setSubmiting(true);
            try{
                const res = await fetch('https://react-http-1e282-default-rtdb.firebaseio.com/FoodOrders.json',{
                    method:'POST',
                    body:JSON.stringify({
                        address:addressData,
                        orderItems:cartCtx.items
                    })
                });
                if(!res.ok){
                    throw new Error("Service not available!");
                }
                setSubmiting(false);
                setDidSubmit(true);
                cartCtx.clearCart();
            }catch(error){
                setSubmiting(false);
                setError(error.message);
            }
        }
        placeOrder();
    }


    const cartItem =(
        <ul className={styles['cart-items']}>
            {
               cartCtx.items.map((p)=><CartItem 
               key={p.id}
               name={p.name}
               price ={p.price}
               quantity={p.quantity}
               onAdd={cartItemAddHandler.bind(null,{...p,quantity:1})}
               onRemove={cartItemDeleteHandler.bind(null,p.id)}></CartItem>)
            }
        </ul>
    );

    const modalAction = <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.hideCart}>Close</button>
                {hasItem && <button className={styles.button} onClick={orderHnadler}>Order</button>}
                </div>
    const cartModalcontent = <React.Fragment>
        {cartItem}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel ={props.hideCart} onConform={submitOrderHandler}></Checkout>}
            {!isCheckout && modalAction}
    </React.Fragment>

    return (
        <Modal backDropClick ={props.backDropHideCart}>
            {!isSubmiting && !didSubmit && cartModalcontent}
            {isSubmiting && <p style={{color:'green'}}>Sending your order data...</p>}
            {didSubmit && !isSubmiting && <div>
                <p style={{color:'green'}}>Your order Successful!!</p>
                <button className={styles.button} onClick={props.hideCart}>Close</button>
                </div>}
            {error && !isSubmiting && <p style={{color:'red'}}>{error}</p>}
        </Modal>
    )
}
