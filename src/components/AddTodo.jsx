 import { useState } from "react";
 function AddTodo({onNewItem}){
  const [todoName,setTodoName]=useState('');
  const [duedate,setDuedate]=useState('');
  const handleNameChange =(event)=>{
   setTodoName(event.target.value);
  };
  const handleDateChange =(event)=>{
   setDuedate(event.target.value);
  };
const handleAddButtonClicked=()=>{
  onNewItem(todoName,duedate);
  setDuedate("");
  setTodoName("");

};
    return(
    <div className="container text-center">
        <div className="row  row-1">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo here" value={todoName}onChange={handleNameChange} />
          </div>
          <div className="col-4">
            <input type="date"value={duedate} onChange={handleDateChange}/>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success button-1" onClick={handleAddButtonClicked}>Add</button>
          </div>
        </div>
      </div>
      );
}
export default AddTodo;