import React, {useEffect} from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from 'react-redux';
import {uiActions} from './store/ui-slice';
import Notification from './components/UI/Notification';
let initial = true;

function App() {
  const dispatch = useDispatch();
const uiState = useSelector(state=>state.ui.isCartVisible);
const cartState = useSelector(state=>state.cart.items);
const notificationState = useSelector(state=>state.ui.notification);

useEffect(()=>{
  const sendCartData=async()=>{
    dispatch(uiActions.showNotification({
      status:'pending',
      title:'Sending...',
      message:'Sending cart data!'
    }));
    const res = await fetch('https://react-http-1e282-default-rtdb.firebaseio.com/Cart.json',{
      method:"PUT",
      body:JSON.stringify(cartState)
    });
    if(!res.ok){
      throw new Error('Not able to send data!');
    }
    dispatch(uiActions.showNotification({
      status:'success',
      title:'Success!',
      message:'Sent cart data Successfully!'
    }));
  }

  if(initial){
    initial =false;
    return;
  }
  sendCartData().catch(error=>{
    dispatch(uiActions.showNotification({
      status:'error',
      title:'Error!',
      message:'Sending cart data failed!'
    }));
  })
  
},[cartState,dispatch]);

  return (
    <React.Fragment>
      {notificationState && <Notification 
      status={notificationState.status}
      title ={notificationState.title} 
      message ={notificationState.message}/>}
      <Layout>
        {uiState && <Cart />}
        <Products />
      </Layout>
    </React.Fragment> 
  );
}

export default App;
