import React from 'react';

class Tech extends React.Component {
    render() {
      let styles = {
        verticalAlign: 'text-top',
        width: '16px',
        height: '16px'
      };

      let qtfont = {
        fontFamily: 'Titillium Web, sans-serif'
      };
      
      return (           
        <div className="card-text tech">
          { this.props.tech.includes('htmlcss') && <span><span className="tech-icon"><i className="fab fa-html5"></i></span><span className="tech-icon"><i className="fab fa-css3"></i></span></span> }
          {/* { this.props.tech.includes('html') && <span className="tech-icon"><i className="fab fa-html5"></i></span> }   */}
          { this.props.tech.includes('javascript') && <span className="tech-icon"><i className="fab fa-js"></i></span> }
          { this.props.tech.includes('react') && <span className="tech-icon"><i className="fab fa-react"></i></span> }
          { this.props.tech.includes('bootstrap') && <span className="tech-icon"><i className="fab fa-bootstrap"></i></span> }
          { this.props.tech.includes('jquery') && <span className="tech-icon"><img style={styles} src='img/icons/jquery-icon.png' alt=""/></span> }
          { this.props.tech.includes('cpp') && <span className="tech-icon"><i class="fab fa-cuttlefish"></i><b>++</b></span> }
          { this.props.tech.includes('qt') && <span className="tech-icon" style={qtfont}><b>Qt</b></span> }
          
        </div>
      );
    }
  }
  export default Tech;