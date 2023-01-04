import React,{useState} from 'react';
import NewExpense from './Components/NewExpenses/NewExpense';
import Expenses from './Components/Expenses/Expenses';

let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title:'school fee',
    amount:250,
    date: new Date(2021,5,12)
  },
  {
   id: 'e2',
    title:'Books',
    amount:500,
    date: new Date(2021,4,12)
  },
  {
   id: 'e3',
    title:'House Rent',
    amount:700,
    date: new Date(2021,5,12)
  },
  {
  id: 'e4',
  title:'Food',
  amount:540,
  date: new Date(2021,5,12)
  }

 ];
const App=()=>{

  const [expenses,setExpenses] = useState(DUMMY_EXPENSE)
  const addExpenseHandler =(expense) =>{
    const updateExpense = [expense, ...expenses]
    setExpenses(updateExpense);
    
  }

    return (
        <div>
       <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses item={expenses} />
        <Expenses item={expenses} />

        <input type="text"/>
       
       </div>
        
     );
}

export default App;

