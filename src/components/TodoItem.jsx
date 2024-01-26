import { useContext } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem1({todoName,todoDate}){
  const {deleteItem} = useContext(TodoItemsContext)
    return(
<div className='row kg-row'>
        <div className='col-6'>{todoName}</div>
        <div className='col-4'>{todoDate}</div>
        <div className='col-2'>
        <button type="button" className="btn btn-danger kg-button"
        onClick={ ()=> deleteItem(todoName)}><IoTrashBinOutline /></button>
          </div>
        </div>
    );
}

export default TodoItem1;