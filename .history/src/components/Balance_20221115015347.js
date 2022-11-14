import React from 'react'
import { useSelector } from 'react-redux'

export default function Balance() {
    const { transactions } = useSelector(state => state.counter)
    
    // thousand separator
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    //calculating the balnce 
    const calBalance = () => {
        let income = 0;

        transactions.forEach(transaction => {
            if (transaction.type === 'income') {
                income += transaction.amount;
            } else {
                income -= transaction.amount;
            } 
        });
        return income;
    }
    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳ {' '}</span>
                <span>{numberWithCommas(calBalance())}</span>
            </h3>
        </div>
    )
}

