import React,{useState,useEffect} from 'react'

export default function useCounter(operation) {
    const[counter,setCounter] = useState(0);

    useEffect(()=>{
        const interval =setInterval(()=>{
            if(operation)
                setCounter((prevState)=>prevState + 1);
            else
                setCounter((prevState)=>prevState - 1);    
        },1000);
        return ()=>{
            clearInterval(interval);
        }
    },[operation,counter])

    return counter;
}
