import { useState } from "react";
import "./App.css";
import ExpenceTable from "./Components/ExpenceTable";
import ExpenseForm from "./Components/ExpenseForm";
import RightClickOPR from "./Components/RightClickOPR";
import expenseData from "./expenseData";
function App() {
  const [expenses, setExpenses] = useState(expenseData);

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses}/>
          <ExpenceTable expenses={expenses} />
          <RightClickOPR />
        </div>
      </main>
    </>
  );
}

export default App;
