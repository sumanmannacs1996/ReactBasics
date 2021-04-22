import React from 'react'
import styles from './MealItemForm.module.css'
import Input from '../../UI/Input'
export default function MealItemForm(props) {
    return (
        <form className={styles.form}>
           <Input label={'Quantity'} input={{id:'quantity',type:'number',min:'0',max:'5',step:'1',defaultValue:'0'}}/>
            <button>+ Add</button>
        </form>
    )
}
