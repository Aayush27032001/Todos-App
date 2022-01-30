import React from 'react';
import Todo from './Todo';

const Todos = (props) => {

    let todos = props.todos;
    const setTodos = props.setTodos;

    console.log(todos);

    const deleteHandler = (todo) => {
        console.log("inside");
        todos.splice(todos.indexOf(todo), 1);
        let newTodos = [...todos]
        setTodos(newTodos);
    }

    return (
        <div>
            {todos.map((todo,i)=>{
                return <Todo todo={todo} deleteHandler={deleteHandler} key={i} index={i}/>
            })}
        </div>
    );
}

export default Todos;
