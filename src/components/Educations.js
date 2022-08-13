import React from "react";
import axios from "axios";

class Educations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: []
    };
  }

  componentDidMount() {
    axios({
      url: "https://laravel-cms-deploy.herokuapp.com/public/api/educations",
      method: "GET"
    }).then((res) => {
      console.log(res.data);
      this.setState({
        educations: res.data
      });
    });
  }

  render() {
    //load educations state variable
    const { educations } = this.state;

    return(
      <div id = "educations">
      {educations.map(m => (
        <div key={m.id}>
          <div id ="center" className="grid grid-2">
            <div className="card">
              
              <h2 id="college">{m.instituteName}</h2>
              <div id="edmargin"><h2>Education</h2></div>
              <ul className = "inline">
                <li><div id="stardatmargin">{m.startDate}</div></li>
                <li><div id="enddatmargin">{m.endDate}</div></li>
              </ul>
              <div id="title" className="card-content">
              <div id="program">{m.program}</div>
             </div> 
            </div>
          </div>
        </div>
      ))}
    </div>
    )
  }
}
export default Educations;