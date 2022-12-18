import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="row">
          <div className="col">
            <h4>Contact Us</h4>
            <ul className="list-styled">
              <li>111-111-1111</li>
              <li>LMU Drive</li>
              <li>doogle@lion.lmu.edu</li>
            </ul>
          </div>

          {/* <div className="col">
            <h4>Feedback</h4>
            <ul className="list-styled">
              <li>111-111-1111</li>
              <li>feedbackdoogle@gmail.com</li>
              <li>webLink *TBD*</li>
            </ul>
          </div> */}

          {/* <div className="col">
            <h4>Media</h4>
            <ul className="list-styled">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div> */}
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;2022 Doogle | 2022 LMU Computer Science - WebApp Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
