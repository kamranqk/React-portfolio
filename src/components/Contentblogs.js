import React from "react";
import axios from "axios";

class Contentblogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentblogs: []
    };
  }

  componentDidMount() {
    axios({
      url: "https://laravel-cms-deploy.herokuapp.com/public/api/contentblogs",
      method: "GET"
    }).then((res) => {
      console.log(res.data);
      this.setState({
        contentblogs: res.data
      });
    });
  }

  render() {
    //load contentblogs state variable
    const { contentblogs } = this.state;

    return(
      <div id = "contentblogs">
        {contentblogs.map(m => (
          <div key={m.id}>
            <div id ="center" className="grid grid-2">
              <div className="card">
                <img src={m.image} alt="image of humber student" width="400" />
                <div id="title" className="card-content">
                  <h3>{m.title}</h3>
                <div id="content">{m.content}</div>
               </div> 
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
export default Contentblogs;