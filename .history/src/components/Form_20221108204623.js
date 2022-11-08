import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTransaction } from '../features/moneyTransApi/transSlice'

export default function Form() {
    const [detail, setEarning] = useState('')
    const [type, setType] = useState('')
    const [expense, setExpense] = useState('')

    const dispatch = useDispatch()

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(createTransaction({
            earning: detail, 
            type, 
            expense: Number(expense)
        }))

        //making empty our input fields
        setEarning('')
        setType('')
        setExpense('')
    } 


    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form onSubmit={handleCreate}>

                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="earning"
                        placeholder="Enter Transaction Name"
                        onChange={e => setEarning(e.target.value)}
                        value={detail}
                        required
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="type"
                            checked ={type === 'income'}
                            onChange={(e) => setType('income')}
                            required
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            onChange={e => setType('expense')}
                            required
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
                        value={expense}
                    />
                </div>
                <button type="submit" className="btn">Add Transaction</button>
            </form>


            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    )
}
