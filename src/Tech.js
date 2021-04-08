import React from 'react';

class Tech extends React.Component {
    render() {
      let styles = {
        verticalAlign: 'text-top',
        width: '16px',
        height: '16px'
      };
      
      return (           
        <div className="card-text tech">
          { this.props.tech.includes('javascript') && <span className="tech-icon"><i className="fab fa-js"></i></span> }
          { this.props.tech.includes('react') && <span className="tech-icon"><i className="fab fa-react"></i></span> }
          { this.props.tech.includes('bootstrap') && <span className="tech-icon"><i className="fab fa-bootstrap"></i></span> }
          {/* { this.props.tech.includes('css') && <span className="tech-icon"><i className="fab fa-css3"></i></span> }
          { this.props.tech.includes('html') && <span className="tech-icon"><i className="fab fa-html5"></i></span> }  */}
          { this.props.tech.includes('jquery') && <span className="tech-icon"><img style={styles} src='https://raw.githubusercontent.com/HappyMe777/portfolio/master/img/jquery-icon.png' alt=""/></span> }
          
        </div>
      );
    }
  }
  export default Tech;