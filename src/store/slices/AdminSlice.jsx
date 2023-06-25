import { createSlice } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

const adminSlice=createSlice({
    name:"admin",
    initialState:[],
    reducers:{
        addData(state,action){

        }

    },
    extraReducers(builder){
        builder.addCase(UserSlice.actions.clearusers,()=>{
            return [];
        })
    }
    
}


)

export default adminSlice.reducer;