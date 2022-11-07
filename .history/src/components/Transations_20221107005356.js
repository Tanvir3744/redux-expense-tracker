import React from 'react'
import SingleTransaction from './singleTransaction'
export default function Transations() {
    return (
        <>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>
                    <SingleTransaction />
                </ul>
            </div>
        </>
    )
}
