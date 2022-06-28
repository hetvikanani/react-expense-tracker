import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.item.map((abc) => (
        <ExpenseItem
          date={abc.date}
          title={abc.title}
          amount={abc.amount}
        />
      ))}
      {/* <ExpenseItem
        date={props.item[0].date}
        title={props.item[0].title}
        price={props.item[0].price}
      />
      <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].title}
        price={props.item[1].price}
      />
      <ExpenseItem
        date={props.item[2].date}
        title={props.item[2].title}
        price={props.item[2].price}
      /> */}
    </Card>
  );
};

export default Expenses;
