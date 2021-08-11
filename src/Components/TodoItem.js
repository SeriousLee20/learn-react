import React, { Component } from "react"


class TodoItem extends Component {
    render() {
        return (
            <div>
                <input 
                    type = "checkbox" 
                    checked = {this.props.item.completed}
                    onChange={() => this.props.handleChange(this.props.item.id)}
                />
                {this.props.item.text}
            </div>
        );
    }   
}

export default TodoItem