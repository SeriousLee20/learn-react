import React from "react"


function TodoItem(props) {
    return (
    <label>
        <input type = "checkbox" 
        name = "checkbox" 
        value = {props.todo.text} 
        checked = {props.todo.completed}/>
        {props.todo.text}
    </label>
    );
}
export default TodoItem