import { useState } from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setError(emailValidation(email));
  };

  const emailValidation = (email) => {
    const regex =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regex.test(email) === false) {
      return "Please provide a valid email";
    }
    return;
  };

  return (
    <div className="App">
      <div className="logo">
        <img src="../images/logo.svg" alt="logo" />
      </div>
      <div className="heading">
        <h1>
          We are launching <strong>soon!</strong>
        </h1>
        <p>Subscribe and get notified</p>
      </div>
      <div className="form">
        <div>
          <form className={!error ? "input-wrapper" : "input-wrapper error"}>
            <input
              type="text"
              placeholder="Your email address..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <p className="error">{error}</p>
        </div>

        <button type="button" onClick={submit}>
          Notify Me
        </button>
      </div>

      <div className="bg-image">
        <img src="../images/illustration-dashboard.png" alt="bg" />
      </div>
      <div className="socials">
        <FontAwesomeIcon
          icon={faFacebookF}
          color="hsl(223, 87%, 63%)"
          className="facebook"
          size="sm"
          border
        />

        <FontAwesomeIcon
          icon={faTwitter}
          color="hsl(223, 87%, 63%)"
          className="twit"
          size="sm"
          border
        />

        <FontAwesomeIcon
          icon={faInstagram}
          color="hsl(223, 87%, 63%)"
          className="insta"
          size="sm"
          border
        />
      </div>

      <footer>© Copyright Ping. All rights reserved</footer>
    </div>
  );
}

export default App;
