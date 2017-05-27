import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <div class="container">
        <h1>Thanks for checking out my application</h1>
        <div class="row">
          <div class="col-md-2 col-sm-12">
            <img class="image-fluid" src="images/profile_pic.jpg" width="150px" alt="Brents Profile Picture"/>
          </div>
          <div class="col-md-10 col-sm-12">
            <p>Hello, my name is Brent and I am an enthusiastic software developer with a background in billing systems, control systems, audio and fitness. I am looking for company that values collaboration as part of their development process.</p>
            <p>I have developed in a range of object-orientated languages such as C++ and C# and have accessed data from a range of databases including SQL Server, MySQL and MS Access.</p>
            <p>I am looking to further develop my web application skills particularly using .net and angular2 frameworks but am always willing and wanting to learn new technologies to add to my set of skills.</p>
            <p>I have lead my teams in my last 2 roles and while I am looking to fall into a more development focused role I would have no hesitation in stepping up and leading a scrum or waterfall team to achieve greatness and produce working software the user wants.</p>
          
            <p>The code for this application is available on my GitHub account: <a href="https://github.com/brent-edwards-online/IgniteCodingTest">Brent's GitHub</a></p>
            <h4>Summary:</h4>
            <ul>
              <li>Bachelor of Engineering - Electronics</li>
              <li>Graduate Diploma - Computer Science</li>
            </ul>
            <h4>Skillset:</h4>
            <ul>
              <li>Languages - C#, C++, C, VBA, VB, HTML, CSS, Javascript, Typescript, Assembly</li>
              <li>Databases - SQL Server, MySQL, MS Access</li>
              <li>Operating Systems - Embedded, Real-Time, Windows, Mac, Unix</li>
              <li>Frameworks - Entity Framework, Angular1, Angular2, Bootstrap, Ionic</li>
              <li>Tools - JIRA, Confluence, TeamCity, Octopus, Git, Bamboo</li>
            </ul>
          </div>
        </div>
      </div>  
    );
  }
}
