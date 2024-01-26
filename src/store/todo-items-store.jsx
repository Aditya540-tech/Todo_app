import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
    todoItem: [],
    addNewItem: () =>{},
    deleteItem: () =>{},
});

const todoItemsReducer = (curTodoItems,action)=>{
    let newTodoItems = curTodoItems;
    if(action.type === "NEW_ITEM"){
       newTodoItems =[
        ...curTodoItems,
        {name:action.payload.itemName, dueDate:action.payload.itemDueDate}
      ];
  
    }else if(action.type ==="DELETE_ITEM"){
      newTodoItems = curTodoItems.filter(item => item.name !==action.payload.itemName)
  
    }
    return newTodoItems
  }
  
const TodoItemsContextProvider = ({children}) => {

 
  //const [todoItems,setTodoItems] = useState([]);
 
  const [todoItems,dispatchTodoItems] = useReducer(todoItemsReducer,[])
  const addNewItem =(itemName,itemDueDate) =>{
    //1st Method
    //  console.log(`New Item Added : ${itemName} Date: ${itemDueDate}`)
    //  const newTodoItems =[...todoItems,{name:itemName,dueDate:itemDueDate}]
    //  setTodoItems(newTodoItems)

      
        const newItemAction = {
          type: "NEW_ITEM",
          payload: {
            itemName,
            itemDueDate
          }
        }
        dispatchTodoItems(newItemAction);
      }
    //2nd method using Function Update
    // //setTodoItems((currValue) =>[
    //   ...currValue,
    //   {name: itemName, dueDate:itemDueDate}
    // ])
  

  const deleteItem =(todoItemsName) =>{
    const newTodoItems = todoItems.filter(item => item.name !==todoItemsName)
    //setTodoItems(newTodoItems)

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName:todoItemsName,
        
      }
    }
    dispatchTodoItems(deleteItemAction);
  }

  return(
    <TodoItemsContext.Provider 
    value={{
        todoItems,
        addNewItem,
        deleteItem
      }}>
      {children}
      </TodoItemsContext.Provider>
  )
}

export default TodoItemsContextProvider