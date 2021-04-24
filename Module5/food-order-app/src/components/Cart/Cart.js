import React,{useContext} from 'react'
import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
export default function Cart(props) {
    const cartCtx = useContext(CartContext);
    const hasItem = cartCtx.items.length > 0;
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const cartItemAddHandler =(item)=>{
        cartCtx.addItem(item);
    }
    const cartItemDeleteHandler =(id)=>{
        cartCtx.removeItem(id);
    }
    const cartItem =(
        <ul className={styles['cart-items']}>
            {
               cartCtx.items.map((p)=><CartItem 
               key={p.id}
               name={p.name}
               price ={p.price}
               quantity={p.quantity}
               onAdd={cartItemAddHandler.bind(null,p)}
               onRemove={cartItemDeleteHandler.bind(null,p.id)}></CartItem>)
            }
        </ul>
    );

    return (
        <Modal backDropClick ={props.backDropHideCart}>
            {cartItem}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.hideCart}>Close</button>
                {hasItem && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}
