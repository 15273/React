import React from "react";
import "./newExpense.css"
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onNewExpenseArival(expenseData)

    }

    const startEditing = () => {
        setIsEditing(true)
    }
    const stopEditing = () => {
        setIsEditing(false)
    }

    return (
        <div className={"new-expense"}>
            {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExspenseData={saveExpenseDataHandler}/>}
            {isEditing && <button onClick={stopEditing}>Cancel</button>}
        </div>
    )
}

export default NewExpense