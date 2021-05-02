import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux';
const Counter = () => {
  const state = useSelector(state=>state);

  const dispatch = useDispatch();

  const incrementHandler =()=>{
    dispatch({type:"INCREMENT"});
  }
  const icreaseByamountHandler=()=>{
    dispatch({type:"INCREASE_BY_AMOUNT",amount:5});
  }
  const decrementHandler=()=>{
    dispatch({type:"DECREMENT"});
  }
  const toggleCounterHandler = () => {
    dispatch({type:"TOGGEL"})
  };

  return (
    <main className={classes.counter}>
      {state.showCounter && <div>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{state.counter}</div>
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={icreaseByamountHandler}>Increase by 5</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
