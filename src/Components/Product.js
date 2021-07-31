import React from "react"

/**
 * 
 * Mapping component: 
 * 
 * 1. Database
 * 2. Create component, design the layout
 * 3. Map the database to component
 * 4. Render the mapped component
 * 
 * @param {props} props that is received from the data base
 * @returns 
 */

function Product(props){
    return (

        <div>
          <h4>{props.id}. {props.item.name}</h4> 
          <p> Price: {props.item.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
          <p> Descr: {props.item.description}</p><br/>
        </div>
    )
}


export default Product