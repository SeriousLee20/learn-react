import React from "react"
import ContactCard from "./ContactCard"

function Contacts(){

    /**
     * if pass props not as an object:
     * 
     * <ContactCard
     * name: ""
     * imgUrl: ""
     * phone: ""
     * email: ""
     * />
     * 
     */

    // this sample passes props to ContactCard as object
    return(

        <div className = "contacts">

            <ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
 <ContactCard 
                contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />

<ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />

<ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />

        </div>
    
    )
}

export default Contacts