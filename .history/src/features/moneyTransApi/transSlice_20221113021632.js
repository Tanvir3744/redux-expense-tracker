import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTransactions, addTransactions, updateTransactions, deleteTransactions } from './transApi'
// initializing the state
const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: '',
    editing: {}
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
export const updatingTransaction = createAsyncThunk('transaction/updateTransaction', async ({ id, data }) => {
    const editTransaction = await updateTransactions(id, data )  // here we always whould pass plain data not object
    return editTransaction;
})

// async thunk for deleting data from the server
export const deleteTransaction = createAsyncThunk('transaction/deleteTransaction', async (id) => {
    const delTransaction = await deleteTransaction(id);
    return delTransaction;
})

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        editActive: (state, action) => {
            state.editing = action.payload;
        },
        editInActive: (state, action) => {
            state.editing = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.pending, (state, action) => {
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.error = '';
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
                state.isError = true;
                state.transactions = [];
            })
            .addCase(createTransaction.pending, (state, action) => {
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(createTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.error = '';
                state.transactions.push(action.payload);
            })
            .addCase(createTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
                state.isError = true;
            })
            .addCase(updatingTransaction.pending, (state, action) => {
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(updatingTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.error = '';
                const indexToUpdate = state.transactions.findIndex(transaction => transaction.id === action.payload.id)
                state.transactions[indexToUpdate] = action.payload;
            })
            .addCase(updatingTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
                state.isError = true;
            })
            .addCase(deleteTransaction.pending, (state, action) => {
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(deleteTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.error = '';
                state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload)
            })
            .addCase(deleteTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
                state.isError = true;
            })
    }
})

export default transactionSlice.reducer;
export const { editActive, editInActive} = transactionSlice.actions;