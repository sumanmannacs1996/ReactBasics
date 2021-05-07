import React, { Fragment } from 'react'
import {Route,useParams,Link} from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
const DUMMY_COUTES = [
    {id:'q1',author:'Suman', text:'Learning React is fun!'},
    {id:'q2',author:'Suman Manna', text:'Learning React is Great!'}
];
export default function QuoteDetail() {
    const params = useParams();
    //console.log(params.quoteId);
    const selectedQuote = DUMMY_COUTES.find((p)=>p.id === params.quoteId);
    if(!selectedQuote){
        return <p>Quote not found!!</p>
    }
    return (
        <Fragment>
            <HighlightedQuote text={selectedQuote.text} author={selectedQuote.author}/>
            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
}
