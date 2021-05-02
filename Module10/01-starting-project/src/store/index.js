import {createStore} from 'redux';

const initalState ={
    counter:0,
    showCounter:true
}

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
const store = createStore(counterResucer);

export default store;

