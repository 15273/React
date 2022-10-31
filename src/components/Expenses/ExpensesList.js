import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

function ExpensesList(props) {

    if (props.onList.length === 0)
        return <h2 className={"expenses-list__fallback"}>
            Found no expenses
        </h2>


    return <ul className={"expenses-list"}>
        {props.onList.map(expense => <ExpenseItem
            key={expense.id}
            title={expense.Title}
            amount={expense.Amount}
            day={expense.Day}
        />)}
    </ul>
}

export default ExpensesList;