import {createSlice} from '@reduxjs/toolkit';

const initalAuthState={
    isAuthenticated:false
}

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
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
