import React from 'react';
import EditImage from '../Assests/images/edit.svg';
import DeleteImage from '../Assests/images/delete.svg'
import { useDispatch } from 'react-redux';
import { editActive } from '../features/moneyTransApi/transSlice';
const AloneTransaction = (props) => {
    const { name, type, amount, transaction } = props.transactions;
    console.log(transaction)
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editActive(transaction))
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