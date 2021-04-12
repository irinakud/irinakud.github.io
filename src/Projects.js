import {projectsList} from './projectsList';
import Project from './Project';
import Filters from './Filters';
import React from 'react';

class Projects extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        projectsList: projectsList
      };
    }

    updateProjectsList(newList) {
        this.setState({
            projectsList: newList
        })
    }
    
    render () {
      return(
        <div>
          <div className="filters-container">
            <div id="filter-label"><h5>Here is my portfolio</h5></div>
            <Filters updateProjectsList={this.updateProjectsList.bind(this)}/>
          </div>
          <div id="projects-grid">
            {this.state.projectsList.map((x, i) => {
              return (<Project id={x.id} url={x.url} img_url={x.img_url} tech={x.tech} key={i}/>)
              })}
          </div>
        </div>
      );
    }
  }
  
  export default Projects;
  