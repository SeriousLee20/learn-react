import React from "react"
import todosData from "./todoData";
import TodoItem from "./TodoItem"


function MainContent(){

    //Only form elements with a name attribute will have their values passed when submitting a form.
    //For "button", "reset", and "submit" - it defines the text on the button
    //For "text", "password", and "hidden" - it defines the initial (default) value of the input field
    //For "checkbox", "radio", "image" - it defines the value associated with the input (this is also the value that is sent on submit)
    
    const todoComponent = todosData.map(todo => <TodoItem key = {todo.id} todo = {todo}/> )

    return (
        <div className = "mainContent">
            <main>This is the main content.</main>

            <div className = "todoList">

                {todoComponent}
            
            </div>
        </div>
        
    );
}

export default MainContent