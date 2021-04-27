import Card from './Card'
import useCounter from '../hooks/use-counter';
export default function Backword() {
   const counter = useCounter(false);

    return <Card>{counter}</Card>
}
