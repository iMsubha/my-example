import React, { Component } from 'react';

class Select extends Component {
    constructor(){
        super();
        this.state={
            city1:"Dhaka",
            city2:"Sylhet",
            city3:"Bogra",
            city4:"Bangladesh",
            show: " ",
            auto:"Bogra"
        }
    }
    onChangeHandler=(event)=>{
        let selectValue= event.target.value;
        this.setState({show:selectValue, auto:selectValue});
    }
    render() {
        return (
            <div>
               <p>{this.state.show}</p>
                <select onChange={this.onChangeHandler} value={this.state.auto}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
        
                </select>
            </div>
        );
    }
}

export default Select;