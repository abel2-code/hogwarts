import React, { Component } from "react";
import FullHogCard from "./FullHogCard";
import Filter from "./Filter";
import Sorter from "./Sorter";

class Hogworld extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        greaseFilter: false,
        sortBy: 'Name',
     }
  }

  filterChange=() => {
    this.setState({
      greaseFilter: !this.state.greaseFilter
    })
  }

  sortChange=(e) => {
    console.log(e.target.value)
    this.setState({
      sortBy: e.target.value
    })
  }
  
  renderHogs=() => {
    let hogs = this.props.hogs
    if (this.state.greaseFilter) {
      hogs = hogs.filter((hog) => {
        return hog.greased === true
      })
    }
    return hogs
  }

  sortNameWeight=() => {
    if (this.state.sortBy === "Name") {
      return this.renderHogs().sort(function(a, b) { if(a.name < b.name) {return -1;} if(a.name > b.name) {return 1;} return 0;})
    } else {
      return this.renderHogs().sort(function(a, b) { return parseFloat(a.weight) - parseFloat(b.weight)})
    }

  }

  // 
  render() {
    

    return (
      <div>
        <div>
          <Filter filterChange={this.filterChange} />
          <Sorter sortChange={this.sortChange}/>
          <br />
          <br />
          <br />
        </div>
        <div className="ui cards">       
            {this.sortNameWeight().map((hog, idx) => (
            
            
              <FullHogCard hog={hog} key={idx} />
              
            
            ))}
        </div>
      </div>
    );
  }
}

export default Hogworld;
