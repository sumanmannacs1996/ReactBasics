import Card from './Card'
import useCounter from '../hooks/use-counter';
export default function Forword() {
    const counter =useCounter(true);
    
    return <Card>{counter}</Card>
}
