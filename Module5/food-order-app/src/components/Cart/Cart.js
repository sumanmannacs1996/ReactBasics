import React,{useContext,useState} from 'react'
import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout';
export default function Cart(props) {
    const [isCheckout,setCheckout] = useState(false);
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
    return (
        <Modal backDropClick ={props.backDropHideCart}>
            {cartItem}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel ={props.hideCart}></Checkout>}
            {!isCheckout && modalAction}
        </Modal>
    )
}
