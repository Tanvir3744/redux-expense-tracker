import React from 'react'
import AloneTransaction from './AloneTransaction'
export default function Transations() {
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
