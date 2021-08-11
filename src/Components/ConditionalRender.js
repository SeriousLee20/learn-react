import React, {Component} from "react"

class ConditionalRender extends Component{

    constructor(){

        super()
        this.state = {
            isLoggedIn: false
        }
    }

    render(){

        let condition

        if(this.state.isLoggedIn){

                condition = "in"
        }else{
    
            condition = "out"
        }

        return(

            <div>
                <h1>You are currently logged {condition}</h1>
            </div>
        )
    }
}

export default ConditionalRender