import React,{useContext} from 'react'
import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
export default function Cart(props) {
    const cartCtx = useContext(CartContext);
    const hasItem = cartCtx.items.length > 0;
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const cartItem =(
        <ul className={styles['cart-items']}>
            {
               cartCtx.items.map((p)=><li>{p.name}</li>)
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
