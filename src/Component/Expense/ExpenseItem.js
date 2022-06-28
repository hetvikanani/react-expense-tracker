import { React, useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [newTitle, setNewTitle] = useState();

  // const [hetvi, abc] = useState(props.title);

  // const clickHandler = () => {
  //   console.log("clicked");
  //   abc(newTitle);
  // };

  // const changeHandler = (e) => {
  //   console.log("change", e.target.value);
  //   setNewTitle(e.target.value);
  // };

  return (
    <Card className="expenseItem">
      <ExpenseDate date={props.date} />
      <div className="expenseDes">
        <h2>{props.title}</h2>
        <div className="expensePrice">{props.price}</div>
      </div>
      {/* <input type="text" value={newTitle} onChange={changeHandler}></input>
      <button onClick={clickHandler}>Change title</button> */}
    </Card>
  );
};

export default ExpenseItem;
