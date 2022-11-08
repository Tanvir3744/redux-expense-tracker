import React, { useState } from 'react'

export default function Form() {
    const [income, setIncome] = useState('')
    const [type, setType] = useState('')
    const [expense, setExpense] = useState('')


    const handleFormSubmit = (e) => {
        e.preventDefault();
    } 


    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form onSubmit={handleFormSubmit}>

                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="earning"
                        placeholder="Enter Amount Of Income"
                        onChange={e => setIncome(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="type"
                            checked
                            onChange={e => setType(e.target.value)}
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            onChange={e => setType(e.target.value)}
                        />
                        <label>Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        placeholder="Enter Amount Of Expense"
                        name="expense"
                        onChange={e => setExpense(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn">Add Transaction</button>
            </form>


            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    )
}
