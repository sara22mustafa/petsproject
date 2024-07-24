import { createSlice } from '@reduxjs/toolkit';
export const adoptedPetSlice = createSlice ({
    name: 'adoptedPet',
    initialState: {
        value :null,
    }, 
    reducers: {
        adopt:(state, action)=>{
            state.value = action.payload;
        }
    }
})
// satte changes according to action 

export const {adopt}= adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;