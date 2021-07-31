import React from 'react'


function Joke(props){
    return(
        <div>

            <h3 style ={{display: !props.quest && "none"}}>Question: {props.quest}</h3>
            <h3 style ={{color: !props.quest && "#FFB866"}}>Answer: {props.punchLine}</h3>
        </div>
    )

}

export default Joke