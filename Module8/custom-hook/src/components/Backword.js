import React,{useState,useEffect} from 'react'
import Card from './Card'
export default function Backword() {
    const [counter,setCounter]=useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCounter((preState)=>preState - 1);
        },1000)
    })

    return <Card>{counter}</Card>
}
