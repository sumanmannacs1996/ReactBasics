//import {createStore} from 'redux';
import {createSlice,configureStore} from '@reduxjs/toolkit';

const initalCounterState ={
    counter:0,
    showCounter:true
}

const initalAuthState={
    isAuthenticated:false
}

const counterSlice = createSlice({
    name:'counter',
    initialState:initalCounterState,
    reducers:{
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state,action) {
            state.counter= state.counter + action.payload.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

const authSlice = createSlice({
    name:'auth',
    initialState:initalAuthState,
    reducers:{
        login(state){
            state.isAuthenticated=true;
        },
        logout(state){
            state.isAuthenticated=false;
        }
    }
})

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
    counter:counterSlice.reducer,
    auth:authSlice.reducer
}});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

