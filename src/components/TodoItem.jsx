function TodoItem({todoName,TodoDate,onDeleteClick}){
    return(
        <div className="container ">
      <div className="row  row-1">
        <div className="col-6">
        {todoName}
        </div>
        <div className="col-4">
    {TodoDate}
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-danger button-1" onClick={()=>onDeleteClick(todoName)}>Delete</button>
        </div>
      </div>
    </div>
    )

}
export default TodoItem;