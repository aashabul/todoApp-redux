import { Checkbox } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";
import "./TodoItem.css";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "Checkbox demo" }}
      />

      <p className={done ? "todoItem--done" : ""}>{name}</p>
    </div>
  );
};

export default TodoItem;
