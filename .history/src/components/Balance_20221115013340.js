import React from 'react'
import { useSelector } from 'react-redux'

export default function Balance() {
    const bal = useSelector(state => state.counter)
    console.log(bal)
    
    //calculating the balnce 
    const handleBalance = () => {
        let income = 0;
        bal.forEach(b => console.log(b))
    }
    console.log(handleBalance)
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

