import React, { Component } from "react";

class FocusInput extends Component{
    constructor(props){
        super(props)

        this.componentRef = React.createRef()
    }

    clickHandle =()=>{
        this.componentRef.current.focusInput()
    }
    render(){
        return(
            <div>
                <input  ref={this.componentRef}/>
                <button onClick={this.clickHandle}>Focus Input</button>
            </div>
        )
    }
}
export default FocusInput