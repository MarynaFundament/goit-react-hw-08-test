import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com"

export const register = createAsyncThunk(
    "auth/register",
    async (userInfo, thunkAPI) => {
try { 
 
    const response = await axios.post("/users/signup", userInfo)
    return response.data

} catch (error){
     
    return thunkAPI.rejectWithValue(error.message)
}

    }
    
)


export const logIn = createAsyncThunk(
    "auth/login",
    async (userInfo, thunkAPI) => {

    try { 
    console.log(userInfo)
    const response = await axios.post("/users/login", userInfo)
    return response.data

}   catch (error){
    return thunkAPI.rejectWithValue(error.message)
}

    }
    
)

    //  async (userInfo, thunkAPI) => {
    // try {
        // const response = await axios.post( "https://connections-api.herokuapp.com/users/signup", userInfo);
        // console.log(userInfo);
//         return response.data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// });


export const logOut = createAsyncThunk("auth/logout", async () => {})