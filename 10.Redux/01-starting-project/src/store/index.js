//import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';


/*
const counterResucer=(state=initalState,action)=>{
    if(action.type ==='INCREMENT'){
        return {counter:state.counter +1,showCounter:state.showCounter}
    }
    else if(action.type === 'INCREASE_BY_AMOUNT'){
        return {counter:state.counter + action.amount,showCounter:state.showCounter}
    }
    else if(action.type ==='DECREMENT'){
        return {counter:state.counter -1,showCounter:state.showCounter}
    }
    else if(action.type ==="TOGGEL"){
        return{showCounter:!state.showCounter, counter:state.counter}
    }
    return state;
}
*/
//const store = createStore(counterResucer);
const store = configureStore({reducer:{
    counter:counterReducer,
    auth:authReducer
}});

export default store;

