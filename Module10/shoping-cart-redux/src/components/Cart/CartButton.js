import classes from './CartButton.module.css';
import {uiActions} from '../../store/ui-slice';
import {useDispatch,useSelector} from 'react-redux';

const CartButton = (props) => {

  const cartState = useSelector(state=>state.cart); 
  const dispatch = useDispatch();

  const toggleCartHandler=()=>{
    dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartState.totalQuantty}</span>
    </button>
  );
};

export default CartButton;
