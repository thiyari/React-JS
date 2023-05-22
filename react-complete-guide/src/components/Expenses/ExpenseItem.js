import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

//function ExpenseItem(props){
const ExpenseItem = (props) => {
    //const expenseDate = new Date(2021, 2, 28);
    //const expenseTitle = 'Car Insurance';
    //const expenseAmount = 294.67;
    //const month = props.date.toLocaleString('en-US',{month:'long'});
    //const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    //const year = props.date.getFullYear();
    //let title = props.title;
    const [title,setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');

    const clickHandler = () => {
        //title = 'Updated!';
        setTitle('Updated!');
        console.log(title);
    };

    return (
        <li>
        <Card className='expense-item'> 
        {/*<div className="expense-item">*/}
            {/*<div>{props.date.toISOString()}</div>*/}
            {/*<div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>*/}
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                {/*<h2>{props.title}</h2>*/}
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        {/*</div>*/}
        </Card>
        </li>
    );
}

export default ExpenseItem;