import {Route,Switch,Redirect} from 'react-router-dom'
import Quotes from './pages/AllQuotes';
import NewQuort from './pages/NewQuote'
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'/>
        </Route>
      <Route path='/quotes' exact>
        <Quotes />
      </Route>
      <Route path ='/quotes/:quoteId'>
         <QuoteDetail />
      </Route>
      <Route path='/new-quote'>
        <NewQuort/>
      </Route>
      <Route path='*'>
        <PageNotFound />
      </Route>
      </Switch> 
    </Layout>
  );
}

export default App;
