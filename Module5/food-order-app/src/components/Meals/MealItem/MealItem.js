import React,{useContext} from 'react'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context';
export default function MealItem(props) {
    const cartCtx =useContext(CartContext);
    const price =`$${props.data.price.toFixed(2)}`;
    const addToCartHandler=(quantity)=>{
        cartCtx.addItem({
            id:props.data.id,
            name:props.data.name,
            price:props.data.price.toFixed(2),
            quantity:quantity
        })
    }
    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.data.name}</h3>
                <div className={styles.description}>{props.data.description}</div>
                <div className ={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}
