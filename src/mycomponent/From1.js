import React, { Component } from 'react';

class From1 extends Component {
    constructor(){
        super();
        this.state={
            username: ' '
        }
    }
    onChangeHandler= (event)=>{
        this.setState({username:event.target.value});
    }
    onSubmitHandler =()=>{
         alert("Name:"+ this.state.username);
        // event.preventDefault();
    }
    render(){
        return <div>
        <form  onSubmit={this.onSubmitHandler}>
            <h1>{this.state.username}</h1>
            <input onChange={this.onChangeHandler} type="text" placeholder="Your Name"></input><br/>
            <input type="submit" value="Submit Now"></input>
        </form>
        </div>
    }
}

export default From1;