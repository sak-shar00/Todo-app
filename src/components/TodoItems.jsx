import TodoItem from "./TodoItem";
function TodoItems({todoItems,onDeleteClick}){
    return(
    
         <div className="items-container">"
            {todoItems.map((item)=> (
            <TodoItem 
            key={item.name}
            TodoDate={item.dueDate} todoName={item.name} onDeleteClick ={onDeleteClick}/>
          ))}
      </div>
      
    );
};
export default TodoItems;