const Redux  = require('redux');

const counterReducer =(state={counter:0},action)=>{
    if(action.type === 'INCREMENT'){
        return {counter:state.counter +1}
    }
    else if(action.type ==="DECREMENT"){
        return{ counter:state.counter-1}
    }
}
const store = Redux.createStore(counterReducer);

const counterSubscribe=()=>{
    const latestState = store.getState();
    console.log(latestState);
}
store.subscribe(counterSubscribe);

store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});