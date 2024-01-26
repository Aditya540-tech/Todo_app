import { useState,useRef, useContext } from "react";
import styles from "./AddTodo.module.css";
import { MdAddBox } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext)
  // const [todoName,setTodoname] = useState('')
  // const [dueDate,setDueDate] = useState('')
  
  // const handleName= (event)=>{
  //   setTodoname(event.target.value)
  // }

  // const handleDate =(event) =>{
  //   setDueDate(event.target.value)
  // }

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClick =(event) =>{
    event.preventDefault();
    
    // setDueDate("");
    // setTodoname("");
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    addNewItem(todoName,dueDate)
  }
  return (
   
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Enter the Todo Here"
            // value={todoName}
            // onChange={handleName}
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input className={styles.inputBox} type="date"
          // value={dueDate}
          // onChange={handleDate} 
          ref={dueDateElement}/>
        </div>
        <div className="col-2">
          <button type="submit"
           class="btn btn-success kg-button"
          >
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
