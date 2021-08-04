import React, { Component } from "react"


class ChangeState extends Component {

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }


    //if don't care about prev state: this.setState(count: 1)
    //don't use prevState.count++, because it returns ori value before incr
    // ++count = count + 1
    handleClick =() =>{

        this.setState(prevState => {
            return{
                count: prevState.count + 1
            }
        })
    }

    render() {

        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}
export default ChangeState