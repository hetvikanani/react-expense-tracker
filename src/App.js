import React from "react";
import Expenses from "./Component/Expense/Expenses";
import NewExpense from "./Component/NewExpense/NewExpense";
const App = () => {
  let expense = [
    {
      id: "e1",
      title: "Food",
      price: 300,
      date: new Date(2022, 6, 18),
    },
    {
      id: "e2",
      title: "Shopping",
      price: 500,
      date: new Date(2022, 6, 20),
    },
    {
      id: "e3",
      title: "Travelling",
      price: 900,
      date: new Date(2022, 6, 22),
    },
  ];

  return (
    <>
      <NewExpense />
      <Expenses item={expense} />
    </>
  );
};

export default App;
