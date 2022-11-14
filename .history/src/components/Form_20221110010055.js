import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { createTransaction, updatingTransaction } from '../features/moneyTransApi/transSlice'

export default function Form() {
    const [detail, setDetail] = useState('')
    const [transType, setType] = useState('')
    const [expense, setExpense] = useState('')
    const [edit, setEdit] = useState(false)

    const dispatch = useDispatch()
    const { isLoading, isError } = useSelector(state => state.counter)

    const { editing } = useSelector(state => state.counter) || {};
    //whenever we want to re-render somthing to our ui (update) we have to use useEffect for updating these things
    useEffect(() => {
        const { id, name, amount, type } = editing || {};
        if (id) {
            setEdit(true)
            setDetail(name)
            setType(type)
            setExpense(amount)
        } else {
            setEdit(false)
            handleResetForm();
        }
    }, [editing, detail, expense, transType])

    const handleResetForm = () => {
        //making empty our input fields
        setDetail('')
        setType('')
        setExpense('')
    }

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(createTransaction({
            name: detail,
            type: transType,
            amount: Number(expense)
        }))
        handleResetForm();
    }

    const cancelEditMode = () => {
        setEdit(false)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updatingTransaction({
            id: editing.id,
            data: {
                name: detail,
                type: transType,
                amount: expense,
            }
        }))
        handleResetForm();
    }

    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form onSubmit={edit ? handleUpdate : handleCreate}>

                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="detail"
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
                            checked={transType === 'income'}
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
                            checked = {transType === 'expense'}
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
                    !isLoading && isError && <small className='erorr'>There was an error occured{error}</small>
                }
                <button disabled={isLoading} type="submit" className="btn">{edit ? "Update Transaction" : "Add Transaction"}</button>
            </form>


            {
                edit && <button className="btn cancel_edit" onClick={cancelEditMode}>Cancel Edit</button>
            }
        </div>
    )
}
