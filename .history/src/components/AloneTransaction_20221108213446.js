import React from 'react';
import EditImage from '../Assests/images/edit.svg';
import DeleteImage from '../Assests/images/delete.svg'
const AloneTransaction = (props) => {
    const {name, type, amount} = props.transaction;
    console.log(props.transaction)
    return (
        {
            type === 'income' ? <li className="transaction income">
            <p>{name}</p>
            <div className="right">
                <p>{amount}</p>
                <button className="link">
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
        </li> :
        <li className="transaction expense">
        <p>{name}</p>
        <div className="right">
            <p>{amount}</p>
            <button className="link">
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
        }
    );
};

export default AloneTransaction;