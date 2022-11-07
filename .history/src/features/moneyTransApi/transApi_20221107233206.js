import axios from '../../features/moneyTransApi/transApi.js'

//write get request to get transactions from server with axios
export const getTransactions = async () => {
    const response = await axios.get('/transactions');
    return response.data;
}

/* 
post request to server {note: wehenever we need to post some data to server we should pass an object along the url.
But, here we are passing the whole object through a parameter to avoid the syntactical complexity.}
*/
export const addTransactions = async(data) => {
    const response = await axios.post('/transactions', data);
    return response.data;
}


/* update request with axios to make update feature in our application */
export const updateTransactions =async (id, data) => {
    const response = await axios.put(`/transactions/${ id }`, data);
    return response.data;
}