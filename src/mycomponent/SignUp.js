import React, { Component } from 'react';

class SignUp extends Component {
    constructor(){
        super();
        this.state ={
            fname:'',
            lname:'',
            email:'',
            mobile:''
        }
    }
    onChangeHandler=(event)=>{
        let inputName = event.target.name;
        let inputValue = event.target.value;
        this.setState({[inputName]:inputValue});
        let textPattern=/^[a-zA-Z]{2,30}$/;
        let emailPattern=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(inputName ==='fname'){
            if(!textPattern.test(inputValue)){
               this.setState({fname:"FirstName is not valid!!"});
            }
        }
        if(inputName ==='lname'){
            if(!textPattern.test(inputValue)){
               this.setState({lname:"LastName is not valid!!"});
            }
        }
        if(inputName ==='email'){
            if(!emailPattern.test(inputValue)){
               this.setState({email:"email is not valid!!"});
            }
        }
        if(inputName ==='mobile'){
            if(!Number(inputValue)){
               this.setState({mobile:"Number is not valid!!"});
            }
        }
    }
    onSubmitHandler=()=>{
        alert("Firstname:"+this.state.fname+"\n"+
             "Lastname:"+this.state.lname+"\n"+
             "Email:"+this.state.email+"\n"+
             "Mobile:"+this.state.mobile
             );
    }
    render() {
        return (
            <div>
                <p>Firstname: {this.state.fname}</p>
                <p>Lastname:{this.state.lname}</p>
                <p>Email:{this.state.email}</p>
                <p>Mobile:{this.state.mobile}</p>
                <form onSubmit={this.onSubmitHandler}>
                    <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="First Name"></input><br/>
                    <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="last Name"></input><br/>
                    <input onChange={this.onChangeHandler} name="email" type="text" placeholder="abc@gmail.com"></input><br/>
                    <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="012344546"></input><br/>
                    <input type="submit" value="Save Now"></input>
                </form>
            </div>
        );
    }
}

export default SignUp;