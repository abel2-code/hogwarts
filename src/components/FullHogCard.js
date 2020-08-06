import React, { Component } from 'react';
import BackHogCard from './BackHogCard';
import FrontHogCard from './FrontHogCard';

class FullHogCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            front: true,
            cardVisible: "ui card",
        }
    }

    handleMouseEvent=() => {
        console.log('does mouseEnter work?')
        this.setState({
            front: !this.state.front
        })
    }

    handleClick=() => {
        console.log('it worked')
        this.setState({
            cardVisible: "theInvisiblePig"
        })
    }

    render() { 
        let newName = this.props.hog.name.toLowerCase().split(' ').join('_')
        let pigImage = require(`../hog-imgs/${newName}.jpg`)
        const hog = this.props.hog
        return ( 
            <div className={this.state.cardVisible} onMouseEnter={this.handleMouseEvent} onMouseOut={this.handleMouseEvent} >
                {this.state.front ?
                <FrontHogCard  img={pigImage} name={hog.name}/>
                :
                <BackHogCard    
                    specialty={hog.specialty} 
                    greased={hog.greased} 
                    weight={hog.weight} 
                    hma={hog['highest medal achieved']} 
                />
                }
                <button onClick={this.handleClick}>Hide the pighog</button>
            </div>
         );
    }
}
 
export default FullHogCard;