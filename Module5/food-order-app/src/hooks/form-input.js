import {useState} from 'react';

const useFormValidation =(method)=>{
    const [input,setInput] = useState('');
    const [isTouched,setTouched] = useState(false);

    const isValid = method(input);
    const hasError = !isValid && isTouched;

    const changeHandler =(event)=>{
        setInput(event.target.value);
    }
    const blurHandler =()=>{
        setTouched(true);
    }

    return{
        value:input,
        isValid,
        hasError,
        changeHandler,
        blurHandler,
    }
}

export default useFormValidation;