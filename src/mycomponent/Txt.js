import React, { Component } from 'react';

class Txt extends Component {
    constructor(){
        super();
        this.state={
            //description:"Please write something!",
            userInput:""
        }
    }
    onChangeHandler= (event)=>{
        this.setState({userInput:event.target.value})
    }
    render() {
        return (
            <div>
                <textarea placeholder="Your Message" onChange={this.onChangeHandler} value={this.state.description}/>  
                <p>{this.state.userInput}</p>     
            </div>
        );
    }
}

export default Txt;  