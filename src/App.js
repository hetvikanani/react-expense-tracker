import React, { useState } from "react";
import Expenses from "./Component/Expense/Expenses";
import NewExpense from "./Component/NewExpense/NewExpense";

let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Bus",
    amount: 20,
    date: new Date(2022, 9, 18),
  },
];

const App = () => {
  const [expenses, setExpense] = useState(DUMMY_EXPENSE);

  let addExpenseHandler = (expense) => {
    const updated = [expense, ...expenses,];
    setExpense(updated)
  }


  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </>
  );
};

export default App;
