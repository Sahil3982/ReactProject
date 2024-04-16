import React from "react";

const ExpenceTable = ({ expenses }) => {
  
console.log(  expenses[1].amount);
let sum = 0;

for(let i=0 ; i < expenses.length; i++){
      sum = sum + expenses[i].amount;
}

const filterCategory = ()=>{
  expenses.filter((data)=>{
      data.includes('')
  })
}
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>
            {/* Add accessibility attributes for screen readers */}
            <select aria-label="Filter by category">
              <option value="">All</option>
              <option value="grocery">Grocery</option>
              <option value="clothes">Clothes</option>
              <option value="bills">Bills</option>
              <option value="education">Education</option>
              <option value="medicine">Medicine</option>
            </select>
          </th>
          <th className="amount-column">
            <div>
              <span>Amount</span>
              {/* Add accessibility attributes for screen readers */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                viewBox="0 0 384 512"
                className="arrow up-arrow"
                aria-label="Ascending"
              >
                {/* Your SVG path */}
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                viewBox="0 0 384 512"
                className="arrow down-arrow"
                aria-label="Descending"
              >
                {/* Your SVG path */}
              </svg>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(({ id, title, category, amount }) => (
          <tr key={id}>
            <td>{title}</td>
            <td>{category}</td>
            <td>₹{amount}</td>
          </tr>
        ))}
        <tr>
          <th>Total</th>
          <th></th>
          <th>{sum}</th>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenceTable;
