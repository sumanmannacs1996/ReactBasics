import React from 'react'
import classes from './Checkout.module.css'
import useFormValidation from '../../hooks/form-input';
export default function Checkout(props) {
    const isNotEmpty =value=>value.trim() !== '';

    const {
        value:name,
        isValid:nameIsValid,
        hasError:nameHasError,
        changeHandler:nameChangeHandler,
        blurHandler:nameBlurHandler
    }=useFormValidation(isNotEmpty);

    const {
        value:street,
        isValid:streetIsValid,
        hasError:streetHasError,
        changeHandler:streetChangeHandler,
        blurHandler:streetBlurHandler
    }=useFormValidation(isNotEmpty);

    const {
        value:postal,
        isValid:postalIsValid,
        hasError:postalHasError,
        changeHandler:postalChangeHandler,
        blurHandler:postalBlurHandler
    }=useFormValidation(value =>value.length === 6);

    const {
        value:city,
        isValid:cityIsValid,
        hasError:cityHasError,
        changeHandler:cityChangeHandler,
        blurHandler:cityBlurHandler
    }=useFormValidation(isNotEmpty);

    let isFormValid = false;
    if(nameIsValid && streetIsValid && postalIsValid && cityIsValid){
        isFormValid= true;
    }

    const confirmHandler=(event)=>{
        event.preventDefault();
        props.onConform({
            name:name,
            street:street,
            postal:postal,
            city:city
        });
        //console.log(name,street,postal,city);
    }

    const nameClass = `${classes.control} ${nameHasError ? classes.invalid : ''}`;
    const streetClass = `${classes.control} ${streetHasError ? classes.invalid : ''}`;
    const postalClass = `${classes.control} ${postalHasError ? classes.invalid : ''}`;
    const cityClass = `${classes.control} ${cityHasError ? classes.invalid : ''}`;

    return (
        <form className ={classes.form}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={name}/>
        {nameHasError && <p className={classes.errortext}>Please enter a valid name!</p>}
      </div>
      <div className={streetClass}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' onChange={streetChangeHandler} onBlur={streetBlurHandler} value={street}/>
        {streetHasError && <p className={classes.errortext}>Please enter a valid street!</p>}
      </div>
      <div className={postalClass}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='number' id='postal' onChange={postalChangeHandler} onBlur={postalBlurHandler} value={postal}/>
        {postalHasError && <p className={classes.errortext}>Please enter a valid postal code (6 digt number)!</p>}
      </div>
      <div className={cityClass}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' onChange={cityChangeHandler} onBlur={cityBlurHandler} value={city}/>
        {cityHasError && <p className={classes.errortext}>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!isFormValid} onClick={confirmHandler}>Confirm</button>
      </div>
    </form>
    )
}
