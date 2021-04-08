import {projectsList} from './projectsList';
import Project from './Project';
import {filterSelection, activateFilterItem} from './Utils';
import React from 'react';

class Projects extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        projectsList: [...projectsList]
      };
    }
  
    handleClick(e) {
      filterSelection(e.target.value);
    }
    
    render () {
      return(
        <div>
          <div id="filters">
            <button className="btn activebtn" onClick={this.handleClick.bind(this)} value="all"> Show all</button>
            <button className="btn" onClick={this.handleClick.bind(this)} value="javascript"> JavaScript</button>
            <button className="btn" onClick={this.handleClick.bind(this)} value="react"> React</button>
            <button className="btn" onClick={this.handleClick.bind(this)} value="bootstrap"> Bootstrap</button>
            <button className="btn" onClick={this.handleClick.bind(this)} value="jquery"> jQuery</button>
          </div>
          <div id="projects-grid">
            {this.state.projectsList.map((x, i) => {
              return (<Project id={x.id} url={x.url} img_url={x.img_url} tech={x.tech} key={i} display="true"/>)
              })}
          </div>
        </div>
      );
    }
  
    componentDidMount() {
      filterSelection('all');
      activateFilterItem();
    }
  }
  
  export default Projects;
  