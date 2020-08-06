import React, { Component } from 'react';

class FrontHogCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="image">
                    <img src={this.props.img} alt="if you can't see it, you can't see it" />
                </div>
                <div className="content">
                    <h3 className="header">{this.props.name}</h3>
                </div>
            </div>
         );
    }
}
 
export default FrontHogCard;