import React from 'react';
import EditImage from '../Assests/images/edit.svg';
import DeleteImage from '../Assests/images/delete.svg'
import { deleteTransaction, editActive } from '../features/moneyTransApi/transSlice';
import { useDispatch } from 'react-redux';
const AloneTransaction = (props) => {
    const {id, name, type, amount} = props.transaction;
    const dispatch = useDispatch()
    const handleEdit = () => {
        dispatch(editActive(props.transaction))
    }

    //handling delete transactions
    const handleDelete = () => {
        dispatch(deleteTransaction(id))
        console.log(id)
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
                <button className="link" onClick={handleDelete}>
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