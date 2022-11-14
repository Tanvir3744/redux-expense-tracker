import React from 'react'
import { useSelector } from 'react-redux'

export default function Balance() {
    const {transactions} = useSelector(state => state.counter)
    //calculating the balnce 
    const handleBalance = () => {
        let income = 0;
        transactions.forEach(element => {
            if (transactions.type === 'income') {
                income += transactions.amount;
            } else {
                income -= transactions.amount;
            }
        });
    }
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

