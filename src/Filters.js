import {projectsList} from './projectsList';
import {activateFilterItem} from './Utils';
import React from 'react';

class Filters extends React.Component {
    constructor(props) {
      super(props);
    }

    filterProjectsList(selection) {
        if (selection === "all")
          return [...projectsList];
        return projectsList.filter(project => project.tech.indexOf(selection) > -1);
      }
  
    handleClick(e) {
        const newList = this.filterProjectsList(e.target.value);
        this.props.updateProjectsList(newList);
    }
    
    render () {
      return(
        <div id="filters">
            <button className="btn activebtn" onClick={this.handleClick.bind(this)} value="all"> Show all</button>
            <button className="btn" onClick={this.handleClick.bind(this)} value="javascript"> JavaScript</button>
            <button className="btn" onClick={this.handleClick.bind(this)} value="react"> React</button>
            <button className="btn" onClick={this.handleClick.bind(this)} value="bootstrap"> Bootstrap</button>
            <button className="btn" onClick={this.handleClick.bind(this)} value="jquery"> jQuery</button>
        </div>
      );
    }
  
    componentDidMount() {
      activateFilterItem();
    }
  }
  
  export default Filters;
  



