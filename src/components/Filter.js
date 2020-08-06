import React, { Component } from 'react';

class Filter extends Component {


    render() { 
        return ( 
        <button onClick={this.props.filterChange}>Change what's shown</button>
         );
    }
}
 
export default Filter;