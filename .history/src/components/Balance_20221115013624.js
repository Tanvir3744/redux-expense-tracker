import React from 'react'
import { useSelector } from 'react-redux'

export default function Balance() {
    const bal = useSelector(state => state.counter.transactions)
    console.log(bal)
    
    //calculating the balnce 
    const handleBalance = () => {
        const {} = bal || {};
        let income = 0;
        bal.forEach(element => element.amount + income)
        return income
    }
    console.log(handleBalance())
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

