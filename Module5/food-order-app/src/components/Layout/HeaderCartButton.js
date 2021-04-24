import React from 'react'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
export default function HeaderCartButton(props) {
    return (
        <div>
            <button className={styles.button} onClick={props.clicked}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>3</span>
            </button>
        </div>
    )
}
