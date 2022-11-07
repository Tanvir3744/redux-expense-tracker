import React from 'react'

export default function SingleTransaction() {
    return (
        <li className="transaction income">
            <p>Earned this month</p>
            <div className="right">
                <p>৳ 100</p>
                <button className="link">
                    <img
                        alt='editImage'
                        className="icon"
                        src="./images/edit.svg"
                    />
                </button>
                <button className="link">
                    <img
                        alt='deleteImage'
                        className="icon"
                        src="./images/delete.svg"
                    />
                </button>
            </div>
        </li>
    )
}
