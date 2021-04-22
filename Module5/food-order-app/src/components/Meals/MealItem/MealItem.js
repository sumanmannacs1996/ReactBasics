import React from 'react'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'
export default function MealItem(props) {
    const price =`$${props.data.price.toFixed(2)}`
    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.data.name}</h3>
                <div className={styles.description}>{props.data.description}</div>
                <div className ={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
}
