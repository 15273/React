import ExpenseItem from "./ExpenseItem";
import "./Expens.css"
import Card from "../Ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExspensesChart from "./ExspensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022')

    const FilterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.Day.getFullYear().toString() === filteredYear
    })

    let expensesContent = <p>No expenses found</p>
    if (filteredExpenses > 0)
        expensesContent = filteredExpenses.map(expense => <ExpenseItem
            key={expense.id}
            title={expense.Title}
            amount={expense.Amount}
            day={expense.Day}
        />)
    return (
        <div>
            <Card className={"expenses"}>
                <ExpensesFilter selected={filteredYear} onChangeFilter={FilterChangeHandler}/>
                <ExspensesChart expenses={filteredExpenses}/>
                <ExpensesList onList={filteredExpenses}/>
            </Card>
        </div>)
}

export default Expenses
