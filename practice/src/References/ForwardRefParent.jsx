import React, { Component } from "react";
import ForwardRefInput from "./ForwardRefInput";

class ForwardRefParent extends Component{
    constructor(props){
        super(props)

        this.inputRef = React.createRef()
    }

    ClickHandler = ()=>{
        this.inputRef.current.focus()
    }
    render(){
        return(
            <div>
                <ForwardRefInput ref={this.inputRef}/>
                <button onClick={this.ClickHandler}>Focus Input</button>
            </div>
        )
    }
}
export default ForwardRefParent