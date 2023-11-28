import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { reducers } from "./todoSlice";

const store=configureStore({
    reducers:{
        todos:todoReducer
    },
});

export default store;