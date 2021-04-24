import React,{useContext, useEffect,useState} from 'react'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
import cartContect from '../../store/cart-context'
export default function HeaderCartButton(props) {
    const [isButtonHighlited,setButtonHighlited] = useState(false);
    const cartCtx = useContext(cartContect);
    const {items} = cartCtx;
    const numberOfCartItem = items.reduce((cNum,p)=>{return cNum+p.quantity},0);
    const btnClas = `${styles.button} ${isButtonHighlited ? styles.bump : ''}`;
    useEffect(()=>{
       if(items.length === 0)
            return;
        setButtonHighlited(true);
        const timer =setTimeout(()=>{
            setButtonHighlited(false);
        },300);
    return ()=>{
        clearTimeout(timer);
    }    
    },[items]);
    return (
        <div>
            <button className={btnClas} onClick={props.clicked}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItem}</span>
            </button>
        </div>
    )
}
