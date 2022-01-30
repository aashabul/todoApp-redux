import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="app">
      <div className="app__container">
        <Input />
        <div className="app__todoContainer">
          {todoList.map((item) => (
            <TodoItem
              name={item.item}
              done={item.done}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
