import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [edit, setedit] = useState(false);
  function toggleEdit() {
    setedit(!edit)
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    toggleEdit()
  };

  return (
    <div className='new-expense'>
      {!edit && <button onClick={toggleEdit}>Add New Expense</button>}
      {edit && <ExpenseForm onCancelEdit={toggleEdit} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
