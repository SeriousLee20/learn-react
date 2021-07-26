import React from "react"
import TodoItem from "./TodoItem"


function MainContent(){

    //Only form elements with a name attribute will have their values passed when submitting a form.
    //For "button", "reset", and "submit" - it defines the text on the button
    //For "text", "password", and "hidden" - it defines the initial (default) value of the input field
    //For "checkbox", "radio", "image" - it defines the value associated with the input (this is also the value that is sent on submit)
    
    return (
        <div className = "mainContent">
            <main>This is the main content.</main>

            <div className = "todoList">

                <TodoItem/><br/>
                <TodoItem/><br/>
                <TodoItem/><br/>
            
            </div>
        </div>
        
    );
}

export default MainContent