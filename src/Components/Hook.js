import React, { useState } from "react"


// "hook into" state & lifacycle methods of components without using classes
// HOOK: useState(), useEffect()
function Hook () {

    // array destructuring
    // usestate return an array when using const ***answer***
    const [answer, setAnswer] = useState("yes")
    const [count, setCount] = useState(0)

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


    return(
        <div>
            <h1>Is state important to know? {answer}</h1>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button><br/>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Hook