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
          { this.props.tech.includes('bootstrap') && <i class="fab fa-bootstrap"></i> }
          { this.props.tech.includes('react') && <i class="fab fa-react"></i> }
          { this.props.tech.includes('css') && <i class="fab fa-css3"></i> }
          { this.props.tech.includes('html') && <i class="fab fa-html5"></i> }
          { this.props.tech.includes('jquery') && <img style={styles} src='https://raw.githubusercontent.com/HappyMe777/portfolio/master/img/jquery-icon.png' alt=""/> }
          
        </div>
      );
    }
  }
  export default Tech;