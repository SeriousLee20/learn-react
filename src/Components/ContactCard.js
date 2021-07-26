import React from "react"


function ContactCard(props){
    console.log(props)

    /**
     * if props is not object:
     * 
     * <img src = {props.imgUrl}/>
     * <h3> {props.name} </h3>
     * <p> Phone: {props.phone} </p>
     * <p> Email: {props.email} </p>
     * 
     */
    return (

        <div className = "contact-card">
            
           <img src={props.contact.imgUrl } alt="img"/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>

        </div>
    )
}
export default ContactCard