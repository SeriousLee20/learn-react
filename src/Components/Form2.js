import React, { Component } from "react"
import Form2Component from "./Form2Component"


class Form2 extends Component {

    constructor() {
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            destination:"",
            
            diet: {
                isVegan: false,
                isKosher: false,
                lactoseFree: false
            }
        }
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target
        
        type === "checkbox" ?
            this.setState(prevState => {
                return  {

                    diet: {
                        ...prevState.diet,
                        [name]: checked
                    }
                }
            }) :

            this.setState({
                [name]: value
            })

    }


    render() {

        return(
            <Form2Component 
                handleChange = {this.handleChange}
                data = {this.state}
            />

        )
    }
}


export default Form2