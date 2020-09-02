import React, { Component } from 'react';

class From extends Component {
    constructor(){
        super();
        this.state ={
            newname:' '
        }
    }
    onChangeHandler=(event)=>{
        this.setState({newname: event.target.value});
    }
    onSubmitHandler =()=>{
        alert("Name:"+ this.state.newname);
   }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p>My First Form</p>
                    <input onChange={this.onChangeHandler} type="text" placeholder="Your Name"></input><br/>
                    <input type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}

export default From;