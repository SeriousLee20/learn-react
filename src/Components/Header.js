import React, {Component} from "react"


class Header extends Component{

    render() {
       return (
            <header className = "navbar">Hi {this.props.username}.</header>
        ); 
    }
    
}

export default Header