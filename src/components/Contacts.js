import React from "react";

class Contacts extends React.Component {
  render() {
    return(
      <div id ="center" class="grid grid-2">
        <div className="card">
          <h3 id="contact-me" className="contact_me">CONTACT ME</h3>
          <div id="gap1" class="card-content">
            <ul className="contact-me">
              <li>Email: kamran_qk@yahoo.com</li>
              <li>Phone: 647-979-4593</li>
              <li>Location: Ontario, Canada </li>
            </ul> 
          </div>
        </div>
      </div>
    )
  }
}
export default Contacts;