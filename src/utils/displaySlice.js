import { createSlice } from "@reduxjs/toolkit";

const displaySlice=createSlice({
    name:'display',
    initialState:{
        results:null,
        data:null,
        show:true,
        side:true,
    },
    reducers:{
        addResult:(state,action)=>{

            state.results=action.payload
        },
        addData:(state,action)=>{

            state.data=action.payload
        }, 
        toggleShow:(state)=>{
            state.show=!state.show;
        },
        toggleSide:(state,action)=>{
            state.side=action.payload
        },






    }
})

export const {addResult,addData,toggleShow,toggleSide}= displaySlice.actions;
export default displaySlice.reducer;