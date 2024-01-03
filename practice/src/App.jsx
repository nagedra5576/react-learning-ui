import React from "react";
import Hello from "./Components/Hello";
import Incre from "./Components/Incre";
import Arithmatic from "./Components/Arithmatic";
import Form from "./Components/Form";
import LifeCycleMountain from "./Components/LifeCycleMountain";
import UpdatingLifeCycle from "./Components/UpdatingLifeCycle";
import FragmentDemo from "./Components/FragmentDemo";
import PureComp from "./Components/PureComp";
import ParentComp from "./Components/ParentComp";

const App =()=>{
    return(
        <div>

            <ParentComp/>

            {/* <FragmentDemo/> */}

            {/* <UpdatingLifeCycle/> */}

            {/* <LifeCycleMountain/> */}

            {/* <Form/> */}

            {/* <Arithmatic/> */}

            {/* <Incre/> */}

            {/* <Hello/> */}
            {/* <h1>Hello</h1> */}
        </div>
    )
}
export default App