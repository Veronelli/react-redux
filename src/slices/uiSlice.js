import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
}

// UI only will get loading property
export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading: (state, action)=>{
            console.log(action.payload);
            state.loading = action.payload;
        }
    }
})

export const { setLoading } = uiSlice.actions;
export default uiSlice.reducer;