import {uiActions} from './ui-slice';
import {cartActions} from './cart-slice';
export const fetchCartData =()=>{
    return async(dispatch)=>{
        const fetchData = async()=>{
            const response = await fetch('https://react-http-1e282-default-rtdb.firebaseio.com/Cart.json');
            
            if(!response.ok){
                throw new Error("Could not fetch cart data!");
            }
            const data = await response.json();
            return data;
        }

        try{
          const cartData = await fetchData();
          //console.log(cartData);
          dispatch(cartActions.replaceCart({
            items:cartData.items || [],
              totalQuantty:cartData.totalQuantty,
              changed:cartData.changed
          }));
        }catch(err){
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!',
                message:'Fetching cart data failed!'
              }));
        }
    }
}

export const sendCartData=(cartData)=>{
    return async (dispatch)=>{
        dispatch(
            uiActions.showNotification({
                status:'pending',
                title:'Sending...',
                message:'Sending cart data!'
              })
        );
        const sendRequest = async()=>{
            const res = await fetch('https://react-http-1e282-default-rtdb.firebaseio.com/Cart.json',{
                method:"PUT",
                 body:JSON.stringify(cartData)
                });
                if(!res.ok){
                    throw new Error('Not able to send data!');
                }
            }
        try{
            await sendRequest();

            dispatch(uiActions.showNotification({
                status:'success',
                title:'Success!',
                message:'Sent cart data Successfully!'
                }));
        }catch(err){
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!',
                message:'Sending cart data failed!'
              }));
        } 
    }
}