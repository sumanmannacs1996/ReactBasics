import { Fragment } from 'react';
import {useHistory, useLocation} from 'react-router-dom'
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes =(quotes,assending)=>{
  return quotes.sort((a,b)=>{
    if(assending){
      return a>b ? 1:-1;
    }
    else{
      return a<b ?1:-1;
    }
  });
}

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParam = new URLSearchParams(location.search);

  const isSortingAssending = queryParam.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes,isSortingAssending);
  
  const changeSortingHandler=()=>{
    history.push(`/quotes?sort=${isSortingAssending ?'desc' : 'asc'}`);
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAssending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
