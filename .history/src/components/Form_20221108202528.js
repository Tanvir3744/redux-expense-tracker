import React from 'react'

export default function Form() {

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
                        name="transaction_name"
                        placeholder="My Salary"
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="transaction_type"
                            checked
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="transaction_type"
                            placeholder="Expense"
                        />
                        <label>Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        placeholder="300"
                        name="transaction_amount"
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>


            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    )
}
