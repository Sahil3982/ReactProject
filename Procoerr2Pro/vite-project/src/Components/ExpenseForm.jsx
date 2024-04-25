import React, { useRef, useState } from "react";
import Input from "./Input";

const ExpenseForm = ({ setExpenses }) => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const[ error , setError] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const vailed = vailidation(expense);

    console.log(Object.keys(vailed));

    if(Object.keys(vailed).length){
      return
    }

    setExpenses((prevState)=>[
      ...prevState,{...expense,id:crypto.randomUUID()}
    ])
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const vailidation= (formData)=>{
    const errorData = {}
        if(!formData.title){
          errorData.title = 'Title is reqiured'
        }
        if(!formData.category){
          errorData.category = 'category is reqiured'
        }
        if(!formData.amount){
          errorData.amount = 'amount is reqiured'
        }

        setError(errorData)
        console.log(errorData);
        return errorData
  }

  return (
    <div>
      <form className="expense-form" onSubmit={handleSubmit}>
        
        <Input />
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            className="item-category"
            name="category"
            value={expense.category}
            onChange={handleChange}

          >

            <option hidden>Select Category</option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
        </div>
        <span className="error">{error.category}</span>

        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
          />
        </div>
        <span  className="error">{error.amount}</span>

        <button className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
