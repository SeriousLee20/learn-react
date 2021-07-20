import React from "react"

function Footer(){
    const txt = "haha"
    const style = {
        color: "#B72E0B",
        backgroundColor: "orange",
        fontSize: 12
    }

    /**
     * jsx -> js: {}
     * 
     * style in jsx: accept object {{color: "yellow"}}, not string 
     * styling in jsx: no dash in js ({} means in js), change it to camelCase, 
     * 
     * fontSize: default unit is px, if want specify unit, use string
     * to change style based on condition: style.color = ""
     */
    return (
        <footer className = "note">
            <h3 style = {style}>This is my footer. {txt} {`${txt} ${txt}`}</h3>
        </footer>
    );

    // the {`${txt} ${txt}`} not '' is ``
}

export default Footer