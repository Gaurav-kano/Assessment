import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [url, setUrl] = useState([]);
  const http = "https://cataas.com";
  const getCat = () => {
    axios
      .get("https://cataas.com/cat?json=true")
      .then((res) => {
        setUrl(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getCat();
  }, []);

  return (
    <div>
      <div className="img_box">
        {" "}
        <img src={http + url.url} alt="cat" width="600px" height="500px"></img>
        <div className="text_box"></div>
        <button className="fill" onClick={getCat}>
          Get New
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

export default Home;
