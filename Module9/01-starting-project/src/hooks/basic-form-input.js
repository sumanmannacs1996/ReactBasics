import {useState} from 'react';

const useBasicInput =(validate)=>{
    const [input,setInput] = useState('');
    const [isTouched,setTouched] = useState(false);

    const isValid = validate(input);
    const hasError = !isValid && isTouched;

    const inputChangeHandler = (event)=>{
        setInput(event.target.value);
    }
    const inputBlurHandler =()=>{
        setTouched(true);
    }

    const rest =()=>{
        setInput('');
        setTouched(false);
    }

    return{
        value:input,
        isValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        rest
    }
}

export default useBasicInput;