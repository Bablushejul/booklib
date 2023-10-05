import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "./button-slice";

export const store = configureStore({ 
    reducer: { 
        book: buttonSlice.reducer 
    } 
});
