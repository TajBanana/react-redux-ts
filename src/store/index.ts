// import {createStore} from "redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";

/*type CounterActions = {
    type: string,
    payload: any
}*/

// OLD WAY
/*
const reducerFn = (state = {counter: 0}, action: CounterActions) => {
    switch (action.type) {
        case 'INC': {
            return {...state, counter: state.counter + 1 };
        }
        case 'DEC': {
            return {...state, counter: state.counter - 1 };
        }
        case 'ADD': {
            return {...state, counter: state.counter + action.payload };
        }
    }
    return state;
};

export const store = createStore(reducerFn);*/

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0},
    reducers: {
        increment(state){
            console.log('inc')
            state.counter = state.counter + 1;
        },
        decrement(state){
            console.log('dec')
            state.counter = state.counter - 1;
        },
        addBy(state, action){
            state.counter += action.payload;
            console.log('add by ' + action.payload)
        }
    }
})

export const actions = counterSlice.actions;

export const store = configureStore({
    reducer: counterSlice.reducer
})
