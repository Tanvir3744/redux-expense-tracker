import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTransactions } from '../features/moneyTransApi/transSlice'
import AloneTransaction from './AloneTransaction'
export default function Transations() {
    const { isLoading, isError, error, transactions } = useSelector(state => state.counter)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTransactions())
    },[dispatch])

    // decide what to render
    let content; 
    if (isLoading && !isError) {
        content = '...loading...';
    }

    if (!isLoading && isError) {
        content = <small className='error'>{error?.message}</small>
    }

    if (!isLoading && !isError && transactions.length === 0) {
        content = <small className="error">No transactions found in queue</small>
    }

    return (
        <>
            <p className="second_heading">Your Transactions:</p>
            <div className="conatiner_of_list_of_transactions">
                <ul>
                    { !isLoading && !isError &&
                        transactions.map(transaction => <AloneTransaction key={transaction.id} transaction={transaction}  /> )
                    }
                </ul>
            </div>
        </>
    )
}
