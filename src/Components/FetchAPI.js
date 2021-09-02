import React, { Component } from 'react'


class FetchAPI extends Component{

    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount(){
        
        this.setState({
            loading: true
        })

        fetch("https://swapi.dev/api/people/3")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }

    render() {
        const text = this.state.loading ? "loading..." : this.state.character.name

        return (
            <div>
                <h3>{text}</h3>
            </div>
        )
    }
}
export default FetchAPI