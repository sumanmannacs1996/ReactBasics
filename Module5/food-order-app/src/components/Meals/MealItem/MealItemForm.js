import React,{useRef} from 'react'
import styles from './MealItemForm.module.css'
import Input from '../../UI/Input'
export default function MealItemForm(props) {
    const quantityInputRef = useRef()
    const addHandler =event=>{
        event.preventDefault();
        const enteredQuantity = (+quantityInputRef.current.value);
        if(enteredQuantity > 5 || enteredQuantity < 1){
            return;
        }
        props.onAddToCart(enteredQuantity);
    }
    return (
        <form className={styles.form}>
           <Input ref={quantityInputRef} label={'Quantity'} input={{id:'quantity',type:'number',min:'1',max:'5',step:'1',defaultValue:'1'}}/>
            <button onClick={addHandler}>+ Add</button>
        </form>
    )
}
