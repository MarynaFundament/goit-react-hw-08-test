import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com"

const setAuthHeader = token => {
  axios.defaults.headers.common["Authorization"] =
   `Bearer ${token}`
}

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk(
    "auth/register",
    async (userInfo, thunkAPI) => {
try { 
    const response = await axios.post("/users/signup", userInfo)
    setAuthHeader(response.data.token)
    return response.data
} catch (error){
     return thunkAPI.rejectWithValue(error.message)
}}
    
)


export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/users/login', credentials);
        // After successful login, add the token to the HTTP header
        setAuthHeader(response.data.token)
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

    //  async (userInfo, thunkAPI) => {
    // try {
        // const response = await axios.post( "https://connections-api.herokuapp.com/users/signup", userInfo);
        // console.log(userInfo);
//         return response.data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// });


export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});