import React,{useState,useEffect} from 'react'
import Card from './Card'
export default function Forword() {
    const [counter,setCounter]=useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCounter((preState)=>preState +1);
        },1000);
        return ()=>{
            clearInterval(interval);
        }
    },[counter])

    return <Card>{counter}</Card>
}
