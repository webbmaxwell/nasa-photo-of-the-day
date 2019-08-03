import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Image.css";

function Image() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        console.log(res)
        setPhotos(res.data.url)
      });
  }, []);

  return (
    <div>
      <img src={photos} alt="nice space photo"/>
    </div>
  )
}

export default Image;
