import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import expenses from "./components/Expenses/Expenses";
import {useState} from "react";

const INITIAL_EXPENSES = [{
    Title: 'Car Insurance', Day: new Date(2022, 2, 28), Amount: 264.67, id: 'a1'
}, {
    Title: 'Home', Day: new Date(2022, 2, 28), Amount: 264.67, id: 'a2'
}, {
    Title: 'Page', Day: new Date(2022, 2, 28), Amount: 264.67, id: 'a3'
}, {
    Title: 'Workout', Day: new Date(2022, 2, 28), Amount: 264.67, id: 'a4'
}]

function App() {
    const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
    const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
            return [expense, ...expenses]
            })
    }
    return (
        <div>
            <NewExpense onNewExpenseArival={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}



export default App;
