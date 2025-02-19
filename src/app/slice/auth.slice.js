import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../middleware/api";

export const signUp = createAsyncThunk('/', async (data) => {
    try {
        const response = await API.post('/api/signup', { data: data });
        console.log('response:- ', response);
    } catch (error) {
        console.log(error);
    }
})

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        id: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        
    }
});

export { authSlice };