import React, { useRef, useState } from "react";
const ExpenseForm = ({ setExpenses }) => {

    // UseRef

    const titleRef = useRef(null)
    const categoryRef = useRef(null)
    const amountRef = useRef(null)




  // const [expense, setExpense] = useState({
  //   title: "",
  //   category: "",
  //   amount: "",
  // });

  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = {
    //   id: crypto.randomUUID(),
    //   title,
    //   category,
    //   amount,
    // };
    setExpenses((prevState)=>[...prevState , {
      title : titleRef.current.value,
      category : categoryRef.current.value,
      amount : amountRef.current.value,
      id : crypto.randomUUID()

    }])

    // console.log(titleRef.current.value);
    // console.log(categoryRef.current.value);
    // console.log(amountRef.current.value);

    // setExpenses((prevState) => [...prevState,{...expense , id : crypto.randomUUID()}]);
    // setAmount("");
    // setCategory("");
    // // setTitle("");
    // setExpenses({
    //   title: "",
    //   category: "",
    //   amount: "",
    // })

    // const expense = {...getFormData(e.target),id : crypto.randomUUID()}
    // setExpenses((prevState) =>
    //   [...prevState, expense ]);
    //   e.target.reset();
  };

  // const getFormData = (form) => {
  //   const formData = new FormData(form);
  //   const data = {};
  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }
  // return data;
  // };
  return (
    <div>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            // value={expense.title}
            ref={titleRef}
            // onChange={(e) => {
            //   setExpense((prevState)=>({...prevState, title : e.target.value}));
            // }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            className="item-category"
            name="category"
            ref={categoryRef}
            // value={expense.category}
            // onChange={(e) => {
            //   setExpense((prevState)=>({ ...prevState ,category : e.target.value}));
            // }}
          >
            <option hidden>Select Category</option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            ref={amountRef}
            // value={expense.amount}
            // onChange={(e) => {
            //   setExpense( (prevState)=>({...prevState , amount: e.target.value}));
            // }}
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
