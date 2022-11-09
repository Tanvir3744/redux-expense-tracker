import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTransaction } from '../features/moneyTransApi/transSlice'

export default function Form() {
    const [detail, setDetail] = useState('')
    const [type, setType] = useState('')
    const [expense, setExpense] = useState('')
    const [edit, setEdit] = useState(false)

    const dispatch = useDispatch()
    const {isLoading, isError} = useSelector(state => state.counter)

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(createTransaction({
            name: detail,
            type,
            amount: Number(expense)
        }))

        //making empty our input fields
        setDetail('')
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
                        name="name"
                        placeholder="Enter Transaction Name"
                        onChange={e => setDetail(e.target.value)}
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
                            checked={type === 'income'}
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
                {
                    !isLoading && isError && <small  className='erorr'>There was an error occured</small>
                }
                <button disabled={isLoading} type="submit" className="btn">Add Transaction</button>
            </form>


            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    )
}
