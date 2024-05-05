import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import displaySlice from "./displaySlice";
import mainVideoSlice from "./mainVideoSlice";

const store=configureStore({

    reducer:{
         app: appSlice,
         search:searchSlice,
         chat:chatSlice,
         display:displaySlice,
         mainVideo:mainVideoSlice,
    }
    
})

export default store 