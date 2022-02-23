import React, { useState, useEffect } from "react";
import axios from "axios";

const Generator = () => {
  const [url, setUrl] = useState([]);
  // const [user,setUser] = useState({ text:" ", option:" "});

  // let name, value;
  // const handleInputs = (e) => {
  //   console.log(e);
  //   name = e.target.name;
  //   value = e.target.value;

  //   setUser({...user,[name]:value});
  // }
  const http = "https://cataas.com";

  const getPic = () => {
    axios
      .get("https://cataas.com/cat?json=true")
      .then((res) => {
        setUrl(res.data);
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
        <button className="fill" onClick={getPic}>
          Generate
        </button>
      </div>
      {/* <input type="text"  value={user.text} onChange={handleInputs}></input>
        <label> Select Cars </label>  
        <select value={user.option} onClick={handleInputs} >  
        <option value = "cute"> cute   
        </option>  
        <option value ="ugly"> ugly   
        </option>  
        <option value = "big"> big  
        </option>  
        <option value = "small"> small  
        </option>  
        <option value = "white"> white  
        </option>  
        <option value = "black"> black   
        </option>  
        </select> 
        <button >Submit</button>

        <input type="text"></input>
         */}

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

export default Generator;
