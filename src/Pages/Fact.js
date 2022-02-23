import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const Fact = () => {
  const [quote, setQuote] = useState("");
  const [url, setUrl] = useState([]);
  const http = "https://cataas.com";

  const getPic = () => {
    axios
      .get("https://cataas.com/cat?json=true")
      .then((res) => {
        setUrl(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get("https://meowfacts.herokuapp.com/")
      .then((res) => {
        setQuote(res.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getPic();
  }, []);

  return (
    <div>
      <div className="img_box">
        <img src={http + url.url} width="600px" height="500px"></img>
        <div classname="text_box">
          <p>{quote.data}</p>
        </div>
        <button className="fill" onClick={getPic}>
          Fact
        </button>
      </div>

      <div class="footer">
        <div class="contain">
          <div class="col">
            <h1>Company</h1>
            <ul>
              <li>About</li>
              <li>Home</li>
              <li>Fact</li>
              <li>Generator</li>
              <li>Get in touch</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fact;
