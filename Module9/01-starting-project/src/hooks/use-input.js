import {useState} from 'react';

const useInput=(validateInput)=>{
    const [input,setInput] = useState('');
    const [inputTouched,setInputTouched] = useState(false);
    const isValid = validateInput(input);
    const hasError = !isValid && inputTouched;


    const inputCahngeHandler=(event)=>{
        setInput(event.target.value);
      }
    const inputBlurHandler =()=>{
        setInputTouched(true);
      }
    const reset=()=>{
      setInput('');
      setInputTouched(false);
    }  

    return{
        value:input,
        isValid,
        hasError,
        inputCahngeHandler,
        inputBlurHandler,
        reset
    }

};

export default useInput;