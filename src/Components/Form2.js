import React, { Component } from "react"


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
            <main>

                <form>
                    <input 
                        type="text"
                        name="firstName"
                        value= {this.state.firstName}
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />

                    <input 
                        type="text"
                        name="lastName"
                        value= {this.state.lastName}
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />

                    <br/>

                    <input 
                        type = "text"
                        name = "age"
                        value = {this.state.age}
                        placeholder = "Age"
                        onChange = {this.handleChange}
                    />
                     
                    <br/>

                    <label>
                    <input 
                        type = "radio"
                        name = "gender"
                        value = "male"
                        checked = {this.state.gender === "male"}
                        onChange = {this.handleChange}
                    />
                    Male
                    </label>
                    
                    <label>
                    <input 
                        type = "radio"
                        name = "gender"
                        value = "female"
                        checked = {this.state.gender === "female"}
                        onChange = {this.handleChange}
                    />
                    Female
                    </label>

                    <br/>

                    <select

                        name = "destination"
                        value = {this.state.destination}
                        onChange = {this.handleChange}
                    >

                        <option>---Please choose a destination---</option>
                        <option>Las Vegas</option>
                        <option>Los Angeles</option>
                        <option>California</option>
                        <option>Latin</option>
                    </select>

                    <br/>

                    <label>
                        <input
                            type = "checkbox"
                            name = "isVegan"
                            checked = {this.state.diet.isVegan}
                            onChange = {this.handleChange}

                        />
                        Vegan?
                    </label>

                    <br/>

                    <label>
                        <input
                            type = "checkbox"
                            name = "isKosher"
                            checked = {this.state.diet.isKosher}
                            onChange = {this.handleChange}

                        />
                        Kosher?
                    </label>

                    <br/>

                    <label>
                        <input
                            type = "checkbox"
                            name = "lactoseFree"
                            checked = {this.state.diet.lactoseFree}
                            onChange = {this.handleChange}

                        />
                        Lactose Free?
                    </label>

                </form>

                <button type= "submit">submit</button>
                <hr/>

                <h3>Name: {this.state.firstName} {this.state.lastName}</h3>
                <h3>Age: {this.state.age}</h3>
                <h3>Gender: {this.state.gender}</h3>
                <h3>Destination: {this.state.destination}</h3>
                <h3>Dietry Restriction:
                    <ul>Vegan: {this.state.diet.isVegan ? "Yes" : "No"}</ul>
                    <ul>Kosher: {this.state.diet.isKosher ? "Yes" : "No"}</ul>
                    <ul>Lactose Free: {this.state.diet.lactoseFree ? "Yes" : "No"}</ul>
                </h3>
                <hr/>
            </main>

        )

        
       
        

        
    }
}


export default Form2