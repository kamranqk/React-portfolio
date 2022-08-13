import React from "react";
import axios from "axios";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios({
      url: "https://laravel-cms-deploy.herokuapp.com/public/api/projects",
      method: "GET"
    }).then((res) => {
      console.log(res.data);
      this.setState({
        projects: res.data
      });
    });
  }

  render() {
    //load projects state variable
    const { projects } = this.state;

    return(
      <div id = "projects">
        {projects.map(m => (
          <div key={m.id}>
            <div id ="center" className="grid grid-2">
              <div className="card">
                <img src={m.image} alt="snap shot of charity project" width="400" />
                <div id="title" className="card-content">
                  <h2>{m.title}</h2>
                <div id="content">{m.content}</div>
                <div id="content">Type: {m.slug}</div>
                <div id="content">URL: {m.url}</div>
               </div> 
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
export default Projects;