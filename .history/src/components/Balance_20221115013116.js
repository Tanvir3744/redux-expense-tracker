import React from 'react'
import { useSelector } from 'react-redux'

export default function Balance() {
    const {} = useSelector(state => state.counter.transactions)
    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳</span>
                <span>10500</span>
            </h3>
        </div>
    )
}

