import React from 'react'
import { useSelector } from 'react-redux'

export default function Balance() {
    const {transactions} = useSelector(state => state.counter)
    //calculating the balnce 
    const calBalance = () => {
        let income = 0;
        transactions.forEach(element => {
            if (transactions.type === 'income') {
                income += transactions.amount;
            } else {
                income -= transactions.amount;
            }
        });
        return income;
    }
    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳</span>
                <span>{calBalance}</span>
            </h3>
        </div>
    )
}

