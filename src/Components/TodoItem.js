import React, { Component } from "react"


class TodoItem extends Component {
    render() {

        const completedStyle = {
            
            fontStyle: "italic",
            color: "light grey",
            textDecoration: "line-through"
        }

        return (
            <div>
                <input 
                    type = "checkbox" 
                    checked = {this.props.item.completed}
                    onChange={() => this.props.handleChange(this.props.item.id)}
                />
                 <p style={this.props.item.completed ? completedStyle: null}>{this.props.item.text}</p>
            </div>
        );
    }   
}

export default TodoItem