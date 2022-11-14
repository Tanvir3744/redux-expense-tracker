import React from 'react'
import { useSelector } from 'react-redux'

export default function Balance() {
    const {transactions} = useSelector(state => state.counter)
    //calculating the balnce 
    const calBalance = () => {
        let income = 0;
        transactions.forEach(transaction => {
            console.log(transaction.type)
            if (transactions.type === 'income') {
                income =income + transaction.amount;
            } else if(transaction.type === 'expense') {
                income -= transaction.amount;
            }
        });
        return income;
    }
    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳</span>
                <span>{calBalance()}</span>
            </h3>
        </div>
    )
}

