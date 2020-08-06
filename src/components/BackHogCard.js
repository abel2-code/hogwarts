import React, { Component } from 'react';

class BackHogCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div >
                <p>Specialty: {this.props.specialty}</p>
                <p>Greased: {this.props.greased ? "Yes" : "No"}</p>
                <p>Weight: {this.props.weight}</p>
                <p className="achievementText">Highest Medal Achieved: {this.props.hma}</p>
                <br /> 
                <br /> 
                <br /> 
                <br /> 
                <br /> 
                <br /> 
                <br /> 
                <br /> 
            </div>
         );
    }
}
 
export default BackHogCard;