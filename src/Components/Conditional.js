import React, { Component } from 'react'

class Conditional extends Component{
    constructor(){

        super()
        this.state = {
            unreadMessages: ['a', 'b']
        }
    }
    render(){

        return (

            // put tenary statement in curly braces to put other elements around
            // condition can also directly put at where it is rendered
            // &&: if left true, then return the right; if left false, return false
                // the syntax below means if this true, (&&) then render the statement, else null
            <div>

                <p>This is some text</p>
                {this.props.isLoading ? "Loading..." : "End :)"}
                <p>This is the end of text</p>

                {
                    this.state.unreadMessages.length > 0 &&
                    <p>You have {this.state.unreadMessages.length} unread messages!</p>
                }
            </div>
        )
    }
}
export default Conditional