"use client"
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user:{
        firstname:"",
        lastname:"",
        email:"",
        number:"",
        message:""
    }
}


const exSlices = createSlice({
    name: "contact",
    initialState,
    reducers:{
        adduser:(state,action)=>{
           state.user = {...state.user, ...action.payload}
        }
        
    }
})

export const {adduser} = exSlices.actions;

export default exSlices.reducer 