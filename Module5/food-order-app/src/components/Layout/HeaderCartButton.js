import React,{useContext} from 'react'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
import cartContect from '../../store/cart-context'
export default function HeaderCartButton(props) {
    const cartCtx = useContext(cartContect);
    const numberOfCartItem = cartCtx.items.reduce((cNum,p)=>{return cNum+p.quantity},0);
    return (
        <div>
            <button className={styles.button} onClick={props.clicked}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItem}</span>
            </button>
        </div>
    )
}
