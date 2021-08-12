import React, { Component } from "react"
import randomcolor from "randomcolor"

class ChangeState extends Component {

    constructor(){
        super()
        this.state = {
            count: 0,
            color: ""
        }
    }


    //if don't care about prev state: this.setState(count: 1)
    //don't use prevState.count++, because it returns ori value before incr
    // ++count = count + 1
    // use arrow function then no need to bind with constuctor
    increment =() =>{

        this.setState(prevState => {
            return{
                count: prevState.count + 1
            }
        })
    }

    decrement =() => {

        this.setState(prevState => {
            return {
                count: prevState.count - 1,
            }
        })
    }

    componentDidUpdate (prevProps, prevState) {

        if(prevState.count !== this.state.count) {
            const newColor = randomcolor()
            this.setState({color: newColor})
        }
    }

    render() {

        return(
            <div>
                <h1 style = {{color: this.state.color}}>{this.state.count}</h1>
                <button onClick={this.increment}>Increment!</button>
                <button onClick={this.decrement}>Decrement!</button>
            </div>
        )
    }
}
export default ChangeState