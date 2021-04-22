import React from 'react'
import styles from './Cart.module.css'
import Modal from '../UI/Modal'
export default function Cart() {
    const cartItem =(
        <ul className={styles['cart-items']}>
            {
                [{id:'c1', name:'Dummy Item',count:2,price:23.43}].map((p)=><li>{p.name}</li>)
            }
        </ul>
    );

    return (
        <Modal>
            {cartItem}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>100.87</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}
