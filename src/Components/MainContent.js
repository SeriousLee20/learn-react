import React, {Component} from "react"
import todosData from "./todoData";
import TodoItem from "./TodoItem"

class MainContent extends Component{

    //Only form elements with a name attribute will have their values passed when submitting a form.
    //For "button", "reset", and "submit" - it defines the text on the button
    //For "text", "password", and "hidden" - it defines the initial (default) value of the input field
    //For "checkbox", "radio", "image" - it defines the value associated with the input (this is also the value that is sent on submit)
    

    render() {

        const todoComponent = todosData.map(todo => <TodoItem key = {todo.id} todo = {todo}/> )

        return (
            <div className = "mainContent">
                <main>Are cats cute? {this.props.answer}</main>

                <div className = "todoList">
    
                    {todoComponent}
                
                </div>
            </div>
            
        );
    }
    
}

export default MainContent