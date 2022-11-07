import axios from '../../features/moneyTransApi/transApi.js'

//write get request to get transactions from server with axios
export const getTransactions = async () => {
    const response = await axios.get('/transactions');
    return response.data;
}