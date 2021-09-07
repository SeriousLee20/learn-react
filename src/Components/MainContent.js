import React, {Component} from "react"
import Conditional from "./Conditional";
import FetchAPI from "./FetchAPI";
import Form from "./Form";
import Form2 from "./Form2";
import MemeGenerator from "./MemeGenerator";
import todosData from "./todoData";
import TodoItem from "./TodoItem"

class MainContent extends Component{

    //Only form elements with a name attribute will have their values passed when submitting a form.
    //For "button", "reset", and "submit" - it defines the text on the button
    //For "text", "password", and "hidden" - it defines the initial (default) value of the input field
    //For "checkbox", "radio", "image" - it defines the value associated with the input (this is also the value that is sent on submit)
    
    constructor() {

        super()
        this.state = {
            todos: todosData,
            isLoading: true
        }
    }

    // isLoading will change state to false when timeout
    componentDidMount(){

        setTimeout(() => {
            this.setState({
                    isLoading: false
                })
        }, 1500)
    }

    handleChange = (id) =>{
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id){
                    return {
                        // should return todo object here
                        // can't change state of prevState directly by
                        // 'todo.completed = !todo.completed
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {

        const todoComponent = this.state.todos.map(item => <TodoItem key = {item.id} item = {item}
        handleChange = {this.handleChange}/> )

        return (
            <div className = "mainContent">
                <main>Are cats cute? {this.props.answer}</main>

                <Conditional isLoading = {this.state.isLoading}/>

                <div className = "todoList">
                    {todoComponent}
                </div>

                <FetchAPI/>

                <Form/>

                <hr/>
                
                <Form2/>

                <hr/>
                <MemeGenerator/>
                <hr/>
            </div>
        );
    }
    
}

export default MainContent