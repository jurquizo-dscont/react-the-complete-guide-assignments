import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

export default function Expenses({ items }) {
    const [filter, setFilter] = useState('2020');

    const filterChangeHandler = e => {
        setFilter(e.target.value);
    };

    const filteredExpenses = items.filter((expense) => {
        return expense.date.getFullYear().toString() === filter;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filter}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}
