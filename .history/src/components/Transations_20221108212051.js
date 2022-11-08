import React from 'react'
import { useSelector } from 'react-redux'
import AloneTransaction from './AloneTransaction'
export default function Transations() {
    const { isLoading, isError, error, transactions } = useSelector(state => state.counter)
    
    // decide what to render
    let content; 
    if (isLoading && !isError) {
        content = '...loading...';
    }

    if (!isLoading && isError) {
        content = <small className='error'>{error?.message}</small>
    }

    if (!isLoading && !isError && transactions.length < 0) {
        content = <small className="error">No transactions found in queue</small>
    }

    if (!isLoading && !isError && transactions) {
        content = transactions.map(transaction => <AloneTransaction key={transaction.id} transaction={transaction} />)
    }

    return (
        <>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>
                    {/* here wil be the single transactions component */}
                     <AloneTransaction /> 
                   {/*  {content} */}
                </ul>
            </div>
        </>
    )
}
