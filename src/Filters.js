import {projectsList} from './projectsList';
import React from 'react';

const filters = [
    {
        value: "all",
        name: "Show all",
        active: true
    },
    {
        value: "javascript",
        name: "JavaScript",
        active: false
    },
    {
        value: "react",
        name: "React",
        active: false
    },
    {
        value: "bootstrap",
        name: "Bootstrap",
        active: false   
    },
    {
        value: "jquery",
        name: "jQuery",
        active: false
    }
];

class Filters extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          filters: filters      
        }
    }

    activateFilter(selectedFilter) {
        let activatedFilters = filters;    
        activatedFilters.forEach( filter => {
            if(filter.active)
                filter.active = false;
            if(filter.value===selectedFilter)
                filter.active = true;
        });
        this.setState({
                filters: activatedFilters
            });
    }

    filterProjectsList(selection) {
        if (selection === "all")
          return [...projectsList];
        return projectsList.filter(project => project.tech.indexOf(selection) > -1);
    }
  
    handleClick(e) {
        const newList = this.filterProjectsList(e.target.value);
        this.props.updateProjectsList(newList);
        this.activateFilter(e.target.value);
    }
    
    render () {
      return(
        <div id="filters">
            {this.state.filters.map((x, i) => {
              return (<button className={x.active ? "btn activebtn" : "btn"} onClick={this.handleClick.bind(this)} value={x.value} key={i}> {x.name}</button>)
              })}
        </div>
      );
    }
  }
  
  export default Filters;
  



