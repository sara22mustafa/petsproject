//1- store(configureStore)-->reducer :
//(store is container اكنه الباك اند )  
//reducer is handler for action,which change the state

//2-provider :wrap the app,share the state
//3-slice(name, defaultvalue,action,reducer) part of the state


import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from './adoptedPetSlice';

// Configuring the Redux store with the adoptedPet reducer
const store = configureStore({
    reducer: {
        adoptedPet
    },
});

export default store;

