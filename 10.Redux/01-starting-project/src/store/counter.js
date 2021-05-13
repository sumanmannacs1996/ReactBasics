import {createSlice} from '@reduxjs/toolkit';

const initalCounterState ={
    counter:0,
    showCounter:true
}

const counterSlice = createSlice({
    name:"counter",
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
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;