
import { useState } from 'react'
import './App.css'
import ExpenceTable from './Components/ExpenceTable'
import ExpenseForm from './Components/ExpenseForm'
import RightClickOPR from './Components/RightClickOPR'
import expenseData from './expenseData'
function App() {

  const[expenses , setExpenses] = useState(expenseData);
  console.log(expenses[0].title);
// console.log(expenseData);
  return (
    <>

    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
       <ExpenseForm  />
       <ExpenceTable expenses={expenses}  setExpenses={setExpenses}  />
       <RightClickOPR />     
        
      </div>
    </main>
  </>
  )
}

export default App
