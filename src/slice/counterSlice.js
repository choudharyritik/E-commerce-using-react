import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 100,
    reducers: {
        inc(state, action) {
            if (action.payload) {
                return (state = state + +action.payload);
            } else {
                return (state = state + 1);
            }
        },
        dec(state, action) {
            if (action.payload) {
                return (state = state - +action.payload);
            } else {
                return (state = state - 1);
            }
        },
    },
});

export const { inc, dec } = counterSlice.actions;

export default counterSlice.reducer;