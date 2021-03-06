import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0.0);
    const [enteredDate, setEnteredDate] = useState(Date());

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(enteredAmount);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.taget.Date);
        console.log(enteredDate);
    }


    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions" >
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;