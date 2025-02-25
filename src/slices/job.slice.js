import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../config/api";
import { AuthToken, toastMessage } from "../common/method";

export const AddJob = createAsyncThunk('/job/add',
    async (data, { getState }) => {
        try {
            const response = await API.post('/job/add', data, AuthToken(getState().authSlice.token));
            toastMessage(response.data.code === 200 ? 'success' : 'error', response.data.message);
            return response.data;
        } catch (error) {
            toastMessage('error', 'Something went wrong');
        }
    }
)

export const DeleteJob = createAsyncThunk('/job/remove',
    async (data, { getState }) => {
        try {
            const response = await API.post('/job/remove', data, AuthToken(getState().authSlice.token));
            toastMessage(response.data.code === 200 ? 'success' : 'error', response.data.message);
            return response.data;
        } catch (error) {
            toastMessage('error', 'Something went wrong');
        }
    }
);

export const ListJob = createAsyncThunk('/job/listing',
    async (data, { getState }) => {
        try {
            const response = await API.post('/job/listing', data, AuthToken(getState().authSlice.token));
            return response.data;
        } catch (error) {
            toastMessage('error', 'Something went wrong');
        }
    }
);