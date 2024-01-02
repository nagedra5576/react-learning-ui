import React, { useState } from "react";

const Incre =()=>{

    let[count , setCount] = useState(0)

    let incre =()=>{
        setCount(count + 1)
        console.log(count);
    }

    let decre =()=>{
        setCount(count - 1)
        console.log(count);
    }

    let reset =()=>{
        setCount(0)
        console.log(count);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={incre}>Increment</button><br />
            <button onClick={decre}>Decrement</button><br />
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Incre