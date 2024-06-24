import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import checkbox from "./images/icon-checkbox-check.svg";
import radio from "./images/icon-radio-selected.svg";
import success from "./images/icon-success-check.svg";

function App() {
  const [bgInput, setBgInput] = useState("");

  const clickRadioInput = (event) => {
    setBgInput(event.target.value);
  };

  return (
    <main>
      <div>
        <h1 className="contact">Contact Us</h1>
        <div className="form">
          <div className="name-complete">
            <div className="input-group">
              <p>First Name *</p>
              <input className="names" type="text" />
            </div>
            <div className="input-group">
              <p>Last Name *</p>
              <input className="names" type="text" />
            </div>
          </div>
          <div className="email">
            {""}
            <p>Email Address *</p>
            <img src="./images" alt="" />
            <input className="email-adress" type="e-mail" />
          </div>
          <div>
            <p>Query Type</p>
            <div className="query-type-selected">
              <div
                className={
                  bgInput === "General"
                    ? "general-enquiry-newbg"
                    : "general-enquiry"
                }
              >
                <input
                  onChange={clickRadioInput}
                  type="radio"
                  name="topping"
                  value="General"
                  id="general"
                />
                <label htmlFor="general">General Enquiry</label>
              </div>
              <div
                className={
                  bgInput === "Suport" ? "suport-request-bg" : "suport-request"
                }
              >
                <input
                  type="radio"
                  name="topping"
                  value="Suport"
                  id="suport"
                  onChange={clickRadioInput}
                />
                <label htmlFor="suport">Support Request</label>
              </div>
            </div>
          </div>

          <div className="message">
            <p>Message *</p>
            <textarea></textarea>
          </div>

          <div className="contacted-team">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="contacted">
              I consent to being conted by the team *
            </label>
          </div>

          <div className="submit-btn">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
