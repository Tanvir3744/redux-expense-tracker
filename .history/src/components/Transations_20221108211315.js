import React from 'react'
import { useSelector } from 'react-redux'
import AloneTransaction from './AloneTransaction'
export default function Transations() {
    const {isLoading, isError, error, transactions} = useSelector( state => state.counter.transactions)
    return (
        <>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>
                    {/* here wil be the single transactions component */}
                    <AloneTransaction />
                </ul>
            </div>
        </>
    )
}
