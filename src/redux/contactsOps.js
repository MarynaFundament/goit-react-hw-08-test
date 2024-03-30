import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit"

axios.defaults.baseURL = "https://660424942393662c31d0b8ed.mockapi.io"

export const fetchContacts = createAsyncThunk('contacts/fetchTasks',
 async(_, thunkAPI ) => {

    try{ 
        const response  = await axios.get('/contacts')
        return response.data

    } catch (error) {
        return thunkAPI.rejectWithValue (error.message)
    }

   
})

export const deleteContact = createAsyncThunk(
    'contacts/deleteContacts',
    async(taskId, thunkAPI) => {
    try{ 
    const response  = await axios.delete(`/contacts/${taskId}`)
    return response.data

    } catch (error) {
    return thunkAPI.rejectWithValue (error.message)
    }

   
})

export const addContact = createAsyncThunk(
    'contacts/addContacts',
    async(newContact, thunkAPI) => {
    try{ 
    const response  = await axios.post('/contacts', newContact)
    return response.data

    } catch (error) {
    return thunkAPI.rejectWithValue (error.message)
    }

   
})