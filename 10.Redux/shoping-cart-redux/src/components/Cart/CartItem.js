import classes from './CartItem.module.css';
import {useDispatch} from 'react-redux';
import {cartActions} from '../../store/cart-slice';
const CartItem = (props) => {
  const { name, quantity, totalPrice, price } = props.item;
  const dispatch = useDispatch();
  const increaseCartHandler =()=>{
    dispatch(cartActions.addItemToCart(props.item));
  }

  const decreaseCartHandler =()=>{
    dispatch(cartActions.removeItemToCart(props.item));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseCartHandler}>-</button>
          <button onClick={increaseCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
