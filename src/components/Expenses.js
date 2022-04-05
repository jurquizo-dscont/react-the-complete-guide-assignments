import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
export default function Expenses({ items }) {
    if (items && items.length > 0) {
        return (
            <div className='expenses'>
                {items.map(
                    item => <ExpenseItem
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />)}
            </div>
        )
    }
    return (<div>No items</div>)
}
