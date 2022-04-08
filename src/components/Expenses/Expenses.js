import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

export default function Expenses({ items }) {
    const [filter, setFilter] = useState('2020');

    const filterChangeHandler = e => {
        setFilter(e.target.value);
    };

    if (items && items.length > 0) {
        return (
            <div>
                <Card className="expenses">
                    <ExpensesFilter filter={filter} onFilterChange={filterChangeHandler} />
                    {items.map(
                        item => <ExpenseItem
                            key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />)}
                </Card>
            </div>
        )
    }
    return (<div>No items</div>)
}
