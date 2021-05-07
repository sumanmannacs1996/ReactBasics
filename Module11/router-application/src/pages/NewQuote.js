import {useHistory} from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'
export default function NewQuote(props) {
    const history = useHistory();
    const addNewQuoteHandler =(data)=>{
        console.log(data);
      
        history.push('/quotes');            // allow back
        //history.replace('/quotes');     //dosent allow back
    }
    return (
        <div>
            <QuoteForm onAddQuote ={addNewQuoteHandler}/>
        </div>
    )
}
