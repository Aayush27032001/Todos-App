import React from 'react';

const Todo = (props) => {
    const deleteHandler = props.deleteHandler;
    const todo = props.todo;
    let index = props.index;
    return (
        <div class="card text-light bg-secondary mt-2">
            <div class="card-body" style={{display:"flex",justifyContent:"space-between"}}>
                <p class="card-text" style={{display:"inline",alignItems:"center",maxWidth:"95%", margin:"auto 0"}}>{`Task: ${index+1} ${todo.content}`}</p>
                <button onClick={()=>deleteHandler(todo)} class="btn text-light"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
    );
}

export default Todo;
