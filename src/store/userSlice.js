import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ConnectionAPI } from "../services/connectionAPI";

//Thunks
export const userRegister = createAsyncThunk(
    "user/userRegister",
    (data) => ConnectionAPI.userRegister(data)
)

export const userLogin = createAsyncThunk(
    "user/userLogin",
    (data) => ConnectionAPI.userLogin(data)
)

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: JSON.parse(window.localStorage.getItem("user")) || null,
        userRegisterState: {
            message: "",
            status: ""
        },
        userLoginState: {
            message: "",
            status: ""
        }
    },
    reducers: {
        logout(state) {
            state.user = null;
            window.localStorage.clear();
        },
        resetUserMethodsMessage(state, action) {
            state[action.payload].message = '';
            state[action.payload].status = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userRegister.fulfilled, (state, action) => {
                console.log("user", action.payload)
                const { message, status } = action.payload
                state.userRegisterState = {
                    message,
                    status
                }
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                console.log("userLogin", action.payload)
                const { message, status } = action.payload
                state.userLoginState = {
                    message,
                    status
                }
                if (status === 'Failed') state.user = null;
                if (status === 'Ok') {
                // eslint-disable-next-line no-unused-expressions
                window.localStorage.setItem(
                    'user',
                    JSON.stringify(action.payload.data)
                ),
                    window.localStorage.setItem('token', action.payload.data.token),
                    (state.user = action.payload.data);
                }
            })
    }
})

export const { logout, resetUserMethodsMessage } =userSlice.actions
export const selectUser = (state) => state.user.user
export const selectUserRegisterState = (state) => state.user.userRegisterState
export const selectUserLoginState = (state) => state.user.userLoginState

export default userSlice.reducer;