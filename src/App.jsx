import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
// import 'bootstrap/dis/css/bootstrap.min.css'
import {useReducer, useState} from "react"
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-items-store";


function App() {
  
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage/>
        
       <TodoItems />
      </center>
      </TodoItemsContextProvider>
  );
}

export default App;
