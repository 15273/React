import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";

function ExpenseItem(props) {

    return (
        <li>
            <Card className={"expense-item"}>
                <ExpenseDate day={props.day} title={props.title} amount={props.amount}/>
                <div className={"expense-item__description"}>
                    <h2>{props.title}</h2>
                </div>
                <div className={"expense-item__price"}>{props.amount}</div>
            </Card>
        </li>
    );
}

export default ExpenseItem