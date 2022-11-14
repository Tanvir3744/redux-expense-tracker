import React from 'react';
import EditImage from '../Assests/images/edit.svg';
import DeleteImage from '../Assests/images/delete.svg'
import { deleteTransaction, editActive } from '../features/moneyTransApi/transSlice';
import { useDispatch } from 'react-redux';
const AloneTransaction = (props) => {
    const { name, type, amount, id } = props.transaction;
    const dispatch = useDispatch()
    const handleEdit = () => {
        dispatch(editActive(props.transaction))
    }

    //handling delete transactions
    const handleDelete = () => {
        dispatch(deleteTransaction(id))
    }
    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>{amount}</p>
                <button onClick={handleEdit} className="link">
                    <img
                        alt='editImage'
                        className="icon"
                        src={EditImage}
                    />
                </button>
                <button className="link">
                    <img
                        alt='deleteImage'
                        className="icon"
                        src={DeleteImage}
                    />
                </button>
            </div>
        </li>
    );
};

export default AloneTransaction;