import React, { Component } from 'react';

class List extends Component {
    render() {
     
        const country = ['Bangladesh','India','Chaina','Malaysia']
        const dataItems = country.map(data =>  <option>{data}</option> );
        return (
            <div>
                <select>
                    {dataItems}
                </select>
            </div>
        );
    }
}

export default List;