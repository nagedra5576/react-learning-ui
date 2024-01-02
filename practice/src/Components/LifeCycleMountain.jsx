import React, { Component } from "react";

class LifeCycleMountain extends Component{
    constructor(props){
        super(props)

        this.state ={
            name : 'Nagendra'
        }
        console.log('LifeCycleMountain constructor');
    }

    static getDerivedStateFromProps(props , state){
        console.log('LifeCycleMountain getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('LifeCycleMountain componentDidMount');
    }
    render(){
        console.log('LifeCycleMountain render');
        return(
            <div>LifeCycleMountain</div>
        )
    }
}
export default LifeCycleMountain