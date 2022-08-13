import React from "react";
import axios from "axios";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    };
  }

  componentDidMount() {
    axios({
      url: "https://laravel-cms-deploy.herokuapp.com/public/api/skills",
      method: "GET"
    }).then((res) => {
      console.log(res.data);
      this.setState({
        skills: res.data
      });
    });
  }

  render() {
    //load skills state variable
    const { skills } = this.state;

    return(
      <div id = "skills">
        {skills.map(m => (
          <div key={m.id}>
            <div id ="center" className="grid grid-2">
              <div className="card">
                <div id="skilllogo">
                   <img src={m.image} alt="logo of html, css and js" width="300" />
                </div>
                <div id="title" className="card-content">
                  <h3>{m.name}</h3>
                <div id="content">{m.score}</div>
               </div> 
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
export default Skills;