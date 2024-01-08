import { configureStore } from "@reduxjs/toolkit";
import reducerslice from '../Component/reduceslice'
export const textres=configureStore({
    reducer:{
        counter:reducerslice
    }
})