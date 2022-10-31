import "./FormExpends.css"
import React, {useState} from "react";

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDay, setEnteredDay] = useState('')

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value)
    }

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value)
    }

    function dateChangeHandler(event) {
        setEnteredDay(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault()
        const expenseData = {
            Title: enteredTitle, Amount: enteredAmount, Day: new Date(enteredDay)
        }
        props.onSaveExspenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDay('')
    }

    return (<form onSubmit={submitHandler}>
        <div className={"new-expense__controls"}>
            <div className={"new-expense__control"}>
                <label>Title</label>
                <input type={"text"} value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className={"new-expense__control"}>
                <label>Amount</label>

                <input type={"number"} min={"0.01"} step={"0.01"} value={enteredAmount}
                       onChange={amountChangeHandler}/>
            </div>
            <div className={"new-expense__control"}>
                <label>Date</label>
                <input type={"date"} min={"2020-01-01"} max={"2024-01-01"} value={enteredDay}
                       onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className={"new-expense__actions"}>
            <button type={"submit"}>Add Expense</button>
        </div>
    </form>)
}

export default ExpenseForm;
