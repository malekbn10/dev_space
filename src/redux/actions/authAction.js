import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const backendURL = 'http://localhost:8080/'

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const { data } = await axios.post(
          `${backendURL}/auth/login`,
          { email, password },
          config
        )
        // store user's token in local storage
        localStorage.setItem('token', data.token)
        return data
      } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )



export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ firstName,LastName, email, password }, { rejectWithValue }) => {
        try {
          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
          await axios.post(
            `${backendURL}auth/login`,
            { firstName,LastName, email, password },
            config
          )
        } catch (error) {
          if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
          } else {
            return rejectWithValue(error.message)
          }
        }
      }
)
