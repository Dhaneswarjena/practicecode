import { createSlice } from "@reduxjs/toolkit";

const initialState={
    inputval:'dhaneswar',
    value:0
}
export const reduceslice=createSlice({
   name:'counter',
   initialState,
   reducers:{
    addval:(state,action)=>{
        state.inputval=action.payload
    },
    Showdata:(state)=>{
      state.value+=1
    }

   }
})

export const {addval,Showdata}=reduceslice.actions
export default reduceslice.reducer