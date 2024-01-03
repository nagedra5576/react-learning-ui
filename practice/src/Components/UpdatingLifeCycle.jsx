import React, { Component } from "react";

class UpdatingLifeCycle extends Component{
    constructor(props){
        super(props)

        this.state ={
            name : 'Nagendra'
        }
        console.log('UpdatingLifeCycle constructor');
    }

    static getDerivedStateFromProps(props , state){
        console.log('UpdatingLifeCycle getDerivedStateFromProps');
        return null
    }

    shouldComponentUpdate(nextprops , nextstate){
        console.log('UpdatingLifeCycle shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevprops , prevstate){
        console.log('UpdatingLifeCycle getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(prevprops , prevstate , snapshot){
        console.log('UpdatingLifeCycle componentDidUpdate');
    }

    ChangeState = ()=>{
        this.setState({
            name : 'Codevolution'
        })
    }


    render(){
        console.log('UpdatingLifeCycle render');
        return(
            <div> 
                <h1>UpdatingLifeCycle</h1>
                <button onClick={this.ChangeState}>Change State</button>
            </div>
        )
    }
}

export default UpdatingLifeCycle