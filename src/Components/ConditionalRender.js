import React, {Component} from "react"

class ConditionalRender extends Component{

    constructor(){

        super()
        this.state = {
            isLoggedIn: false
        }
    }

    handleClick =() =>{
        this.setState(prevState => {

            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render(){
        let condition = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let text = this.state.isLoggedIn ? "LOGGED IN" : "LOGGED OUT"
        return(
            <div>
                <h3>You are {text}</h3>
                <button onClick = {this.handleClick}>{condition}</button>
                
            </div>
            
        )
    }
}

export default ConditionalRender