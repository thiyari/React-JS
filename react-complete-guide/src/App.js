//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
//import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title:'Toilet Paper', 
      amount: 94.12, 
      date: new Date(2020,7,14)
    },
    {
      id: 'e2',
      title:'New TV', 
      amount: 799.49, 
      date: new Date(2021,2,12)
    },
    {
      id: 'e3',
      title:'Car Insurance', 
      amount: 294.67, 
      date: new Date(2021,2,28)
    },
    {
      id: 'e4',
      title:'New Desk (Wooden)', 
      amount: 450, 
      date: new Date(2021,5,12)
    }
];

//function App() {
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
/*
  const expenses = [
    {
      id: 'e1',
      title:'Toilet Paper', 
      amount: 94.12, 
      date: new Date(2020,7,14)
    },
    {
      id: 'e2',
      title:'New TV', 
      amount: 799.49, 
      date: new Date(2021,2,12)
    },
    {
      id: 'e3',
      title:'Car Insurance', 
      amount: 294.67, 
      date: new Date(2021,2,28)
    },
    {
      id: 'e4',
      title:'New Desk (Wooden)', 
      amount: 450, 
      date: new Date(2021,5,12)
    }
  ];
  */

  const addExpenseHandler = expense => {
    //console.log('In App.js');
    //console.log(expense);
    //setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  // 'div',
  // {},
  // React.createElement('h2',{},"Let's get started!"),
  // React.createElement(Expenses,{items:expenses})
  //);


  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
    <div>
      {/*<h2>Let's get started!</h2>*/}
     {/* <ExpenseItem
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}></ExpenseItem>
      <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}></ExpenseItem>
      <ExpenseItem
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}></ExpenseItem>*/}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
