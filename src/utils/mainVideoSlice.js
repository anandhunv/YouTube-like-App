import { createSlice } from "@reduxjs/toolkit";

const mainVideoSlice=createSlice({
    name:"mainVideo",
    initialState:{
        videoResults:null,
        commentResults:null,
        channelResults:null,
        videoIdResults:null,
    },
    reducers:{
        addVideos:(state,action)=>{
            state.videoResults=action.payload

        },
        addCommentsThreads:(state,action)=>{
            state.commentResults=action.payload

        },
        addChannels:(state,action)=>{
            state.channelResults=action.payload

        },
        addVideoId:(state,action)=>{
            state.videoIdResults=action.payload

        }
    }
})


export const {addVideos,addCommentsThreads,addChannels,addVideoId}= mainVideoSlice.actions;
export default mainVideoSlice.reducer;