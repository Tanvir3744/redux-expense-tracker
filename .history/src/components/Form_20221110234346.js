import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTransaction, updatingTransaction } from '../features/moneyTransApi/transSlice'

export default function Form() {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [amount, setAmount] = useState('')
    const [edit, setEdit] = useState(false)

    console.log(setName(name))

    const dispatch = useDispatch()
    const { isLoading, isError, error } = useSelector(state => state?.counter)

    const { editing } = useSelector(state => state?.counter) || {};
    //whenever we want to re-render somthing to our ui (update) we have to use useEffect for updating these things\
    useEffect(() => {
        const { id, name, amount, type } = editing || {};
        if (id) {
            setEdit(true)
            setName(name)
            setType(type)
            setAmount(amount)
        } else {
            setEdit(false)
            handleResetForm();
        }
    }, [editing, name, amount, type])

    const handleResetForm = () => {
        //making empty our input fields
        setName('')
        setType('')
        setAmount('')
    }

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(createTransaction({
            name: name,
            type: type,
            amount: Number(amount)
        }))
        handleResetForm();
    }

    const cancelEditMode = () => {
        setEdit(false)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updatingTransaction({
            id: editing?.id,
            data: {
                name: name,
                type: type,
                amount: Number(amount),
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
                        id='name'
                        type="text"
                        name="name"
                        placeholder="Enter Transaction Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        className="px-2 py-1 border border-blue-300 focus:outline-none"
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
                            checked={type === 'expense'}
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
                        name="amount"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        required
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