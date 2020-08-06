import React, { Component } from 'react';

class Sorter extends Component {
    render() { 
        return ( 
            <select onChange = {this.props.sortChange}>
                <option>Name</option>
                <option>Weight</option>
            </select>
         );
    }
}
 
export default Sorter;