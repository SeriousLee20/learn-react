import React, { Component } from "react"


class ContactCard extends Component{

    /**
     * if props is not object:
     * 
     * <img src = {props.imgUrl}/>
     * <h3> {props.name} </h3>
     * <p> Phone: {props.phone} </p>
     * <p> Email: {props.email} </p>
     * 
     */

   
     hover() {

        console.log("Hovered")
    }

    render() {
        return (

            <div className = "contact-card">
                
               <img onMouseOver={this.hover} src={this.props.contact.imgUrl} alt="img"/>
                <h3>{this.props.contact.name}</h3>
                <p>Phone: {this.props.contact.phone}</p>
                <p>Email: {this.props.contact.email}</p>
                <button onClick= {() => console.log("Clicked")}>{this.props.contact.imgUrl}</button>
                
            </div>
        )
    }
    
}
export default ContactCard