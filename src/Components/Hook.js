import React, { useEffect, useState } from "react"
import randomColor from "randomcolor"

// "hook into" state & lifacycle methods of components without using classes
// HOOK: useState(), useEffect()
function Hook () {

    // array destructuring
    // usestate return an array when using const ***answer***
    const [answer, setAnswer] = useState("yes")
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    // if want randomColor for the first render:
    // const[color, setColor] = useState(randomcolor())

    // object destructuring
    /*const person = {
        name: "joe",
        age: 42
    }

    const {name, age} = person*/

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }


    // use multiple useEffect, so that the setInterval is called once only each time
    useEffect(() => {
        const intervalId = setInterval(() => {
            //setCount(prevCount => prevCount + 1)
        }, 1000)

        return() => clearInterval(intervalId)
    }, [])


    // if empty [], render the effect for the first time then retain
    // else, it will render effect each time the watched elements change
    useEffect(() => {
        setColor(randomColor())
    }, [count])

    return(
        <div>
            <h1>Is state important to know? {answer}</h1>
            <h1 style = {{color: color}}>{count}</h1>
        </div>
    )
}

export default Hook