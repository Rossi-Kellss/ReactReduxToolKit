import {createSlice} from "@reduxjs/toolkit"

const UserSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
            

        },
        removeUser(state,action){
            state.splice(action.payload,1)

        },
        clearUsers(state,action){
            return [];

        }
    }

})

export default UserSlice.reducer; 

export const {addUser,removeUser,clearUsers}=UserSlice.actions;
    

