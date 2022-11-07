import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {getTransactions, addTransactions, updateTransactions,deleteTransactions} from './transApi'
// initializing the state
const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error : '',
}

export const fetchTransactions = createAsyncThunk('transaction/fetchTransaction', async () => {
    const transactions = 
})

const transactionSlice = createSlice({

})