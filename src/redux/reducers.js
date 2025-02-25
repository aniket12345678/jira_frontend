import { createSlice } from "@reduxjs/toolkit";
import { AuthSignin } from "../slices/auth.slice";
import { ListJob } from "../slices/job.slice";

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        user: null,
        token: null,
        isLoggedIn: false,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(AuthSignin.fulfilled, (state, action) => {
            if (action.payload.code === 200) {
                state.user = action.payload.data.user;
                state.token = action.payload.data.token;
                state.isLoggedIn = true;
            }
        })
    }
});

export const { logout } = authSlice.actions;

export const jobSlice = createSlice({
    name: 'jobSlice',
    initialState: {
        jobData: []
    },
    reducers: {
        resetData: (state) => {
            state.jobData = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(ListJob.fulfilled, (state, action) => {
            state.jobData = action.payload.data.data;
        })
    }
});

export const { resetData } = jobSlice.actions;