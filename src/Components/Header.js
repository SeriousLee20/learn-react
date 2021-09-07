import React, {Component} from "react"


class Header extends Component{

    render() {
       return (
            <navbar className = "navbar">Hi {this.props.username}.</navbar>
        ); 
    }
    
}

export default Header