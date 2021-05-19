import './App.css';
import Projects from './Projects';
import React from 'react';

const App = function() {
  return(
    <div>
      <div id="welcome-section">
        <div id="contact-section">
          <a className="contact-link" target="_top" href="mailto: irbaska@gmail.com"><i className="far fa-envelope"></i></a>
          <a className="contact-link" target="_top" href="https://www.linkedin.com/in/irina-kudryavtseva-6467884a/"><i
              className="fab fa-linkedin-in"></i></a>
        </div>
        <div id="welcome-text">
          <h1>Hi, I am Irina</h1>
          <h1>I am a Software Developer</h1>
        </div>
      </div>
      <div id="projects">
        <Projects/>
      </div>
    </div>
  );
}

export default App;
