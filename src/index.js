import React from "react"
import ReactDOM from "react-dom"


console.log("test");

class MyHead extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <h3>Hellooooo</h3>
    }
}

ReactDOM.render(<MyHead/>,document.querySelector("#root"))