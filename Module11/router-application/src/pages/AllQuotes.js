    import React from 'react'
    import QuoteList from '../components/quotes/QuoteList'
    const DUMMY_COUTES = [
        {id:'q1',author:'Suman', text:'Learning React is fun!'},
        {id:'q2',author:'Suman Manna', text:'Learning React is Great!'}
    ]
    export default function AllQuotes() {
        return (
            <div>
               <QuoteList quotes={DUMMY_COUTES}/>
            </div>
        )
    }
    