import React, { Component } from 'react'


class Form extends Component{

    constructor(){
        super()
        this.state = {
            firstName:"",
            lastName:"",
            isFriendly: false,
            gender: "",
            favColor: ""
        }
    }

    /**
     * 
     * instead of 
     * handleFirstNameChange(e){
     * this.setState({firstName: e.target.value})} 
     * 
     * handleLastNameChange(e){
     * this.setState({lastName: e.target.value})} 
     * 
     * [] converts the expression inside it into String
     */
    handleChange =(event) =>{
        const {type, name, value, checked} = event.target
        
        type === "checkbox" ? this.setState({[name] : checked}) : this.setState({[name]: value})
        
    }

    render() {
        return(

            <form>

                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />

                <br/>

                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />

                <br/>

                <textarea 
                    value = {"sample"}
                    onChange = {this.handleChange}
                />

                <br/>

                <label>
                    <input 
                        type = "checkbox"
                        name = "isFriendly"
                        checked = {this.state.isFriendly}
                        onChange = {this.handleChange}
                    />isFriendly
                </label>
            
                <br/>

                <label>
                    <input 
                        type = "radio"
                        name = "gender"
                        value = "male"
                        checked = {this.state.gender === "male"}
                        onChange = {this.handleChange}
                    />Male
                </label>

                <label>
                    <input 
                        type = "radio"
                        name = "gender"
                        value = "female"
                        checked = {this.state.gender === "female"}
                        onChange = {this.handleChange}
                    />Female
                </label>

                <br/>

                <label>Favourite colour:</label>
                <select>
                    value = {this.state.favColor}
                    onChange = {this.handleChange}
                    name = "favColor"

                    <option value = "blue">Blue</option>
                    <option value = "red">Red</option>
                    <option value = "green">Green</option>
                    <option value = "yellow">Yellow</option>
                    <option value = "purple">Purple</option>
                    <option value = "grey">Grey</option>
                </select>

                <h3>This is {this.state.firstName} {this.state.lastName}</h3>
                <h3>{this.isFriendly ? "friendly" : "not friendly"}</h3>
            </form>
        )
    }
}
export default Form