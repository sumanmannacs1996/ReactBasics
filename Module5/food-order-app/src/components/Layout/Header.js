import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
export default function Header() {
    return (
        <div>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton></HeaderCartButton>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food!"></img>
            </div>
        </div>
    )
}
