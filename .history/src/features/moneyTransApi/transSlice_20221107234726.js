import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTransactions, addTransactions, updateTransactions, deleteTransactions } from './transApi'
// initializing the state
const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: '',
}

// async thunk for get request
export const fetchTransactions = createAsyncThunk('transaction/fetchTransaction', async () => {
    const transactions = await getTransactions()
    return transactions;
})

// async thunk for post data to server
export const createTransaction = createAsyncThunk('transaction/createTransaction', async (data) => {
    const transaction = await addTransactions(data);
    return transaction;
})

// async thunk for update data to server
export const updatingTransaction = createAsyncThunk('transaction/updateTransaction', async ({id, data}) => {
    const editTransaction = await updateTransactions({ id, data })
    return editTransaction;
})

// async thunk for deleting data from the server
export const deleteTransaction = createAsyncThunk('transaction/deleteTransaction', async ({id, data}) => {
    const delTransaction = await deleteTransaction({id, data})
})

const transactionSlice = createSlice({

})