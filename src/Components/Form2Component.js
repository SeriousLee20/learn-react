import React, { Component } from "react"

class Form2Component extends Component{
    render() {

        return (
            <main>

                <form>
                    <input 
                        type="text"
                        name="firstName"
                        value= {this.props.data.firstName}
                        placeholder="First Name"
                        onChange={this.props.handleChange}
                    />

                    <input 
                        type="text"
                        name="lastName"
                        value= {this.props.data.lastName}
                        placeholder="Last Name"
                        onChange={this.props.handleChange}
                    />

                    <br/>

                    <input 
                        type = "text"
                        name = "age"
                        value = {this.props.data.age}
                        placeholder = "Age"
                        onChange = {this.props.handleChange}
                    />
                     
                    <br/>

                    <label>
                    <input 
                        type = "radio"
                        name = "gender"
                        value = "male"
                        checked = {this.props.data.gender === "male"}
                        onChange = {this.props.handleChange}
                    />
                    Male
                    </label>
                    
                    <label>
                    <input 
                        type = "radio"
                        name = "gender"
                        value = "female"
                        checked = {this.props.data.gender === "female"}
                        onChange = {this.props.handleChange}
                    />
                    Female
                    </label>

                    <br/>

                    <select

                        name = "destination"
                        value = {this.props.data.destination}
                        onChange = {this.props.handleChange}
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
                            checked = {this.props.data.diet.isVegan}
                            onChange = {this.props.handleChange}

                        />
                        Vegan?
                    </label>

                    <br/>

                    <label>
                        <input
                            type = "checkbox"
                            name = "isKosher"
                            checked = {this.props.data.diet.isKosher}
                            onChange = {this.props.handleChange}

                        />
                        Kosher?
                    </label>

                    <br/>

                    <label>
                        <input
                            type = "checkbox"
                            name = "lactoseFree"
                            checked = {this.props.data.diet.lactoseFree}
                            onChange = {this.props.handleChange}

                        />
                        Lactose Free?
                    </label>

                </form>

                <button type= "submit">Submit</button>
                <hr/>

                <h3>Name: {this.props.data.firstName} {this.props.data.lastName}</h3>
                <h3>Age: {this.props.data.age}</h3>
                <h3>Gender: {this.props.data.gender}</h3>
                <h3>Destination: {this.props.data.destination}</h3>
                <h3>Dietry Restriction:
                    <ul>Vegan: {this.props.data.diet.isVegan ? "Yes" : "No"}</ul>
                    <ul>Kosher: {this.props.data.diet.isKosher ? "Yes" : "No"}</ul>
                    <ul>Lactose Free: {this.props.data.diet.lactoseFree ? "Yes" : "No"}</ul>
                </h3>
                <hr/>
            </main>
        )
    }
}
export default Form2Component