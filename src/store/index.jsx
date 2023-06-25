import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import adminSlice from "./slices/AdminSlice";


const store=configureStore({
    reducer:{
        users:UserSlice,
        admin:adminSlice
    },
})

export default store