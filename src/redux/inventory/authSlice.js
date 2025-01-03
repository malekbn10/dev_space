import { createSlice } from "@reduxjs/toolkit"
import { registerUser, userLogin } from "../actions/authAction"



const userToken = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null;

const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
  }

  
const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
    // login user

        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
          },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
          },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
          },
      // register user
      [registerUser.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [registerUser.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.userInfo = payload
        state.success = true // registration successful
      },
      [registerUser.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },
    },
  })
  export default authSlice.reducer