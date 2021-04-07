import React from 'react';
import Tech from './Tech';

class Project extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (           
        <div className={"card filterDiv " + this.props.tech}>
          <a href={this.props.url} target="_top"><img src={this.props.img_url} className="card-img-top" alt={this.props.id + " project snapshot"}/></a>
          <div className="card-body">
            <h5 className="card-title">{this.props.id}</h5>
            <p className="card-text tech">({this.props.tech}).</p>
            <Tech tech={this.props.tech}/>
          </div>
        </div>
      );
    }
  }
  
  export default Project;