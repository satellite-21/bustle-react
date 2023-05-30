import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import logo from "./logo_bustle.svg";
import bgi from "./bgi.jpg";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import logo2 from "./logo_bustle2.svg"



const Bustle = () => {
  const [currPageIndex, setCurrPageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  let interval;

  const pages = [
    (    
    
    <div className="mainContainer">
    <div className="header">
      <nav className="navBar">
        <a href="https://www.bustle.com/" className="logo">
          <img src={logo} alt="logo" className="logoImage" />
        </a>
        <a href="http://sendamessage.to/" className="menuLink">
          MENU
        </a>
      </nav>
    </div>

    {/* this displays the homepage */}
    <div className="backgound_image">
      <img src={bgi} alt="bgi" />
      <div className="image_text">
        <p>Kylie Jenner Wore A <br/>Sheer Crop Top At The<br/> Met Gala</p>
      </div>
    </div>
  </div>
  
  ),



    (
<div className="mainContainer2" >
    <div className="header2">
      <nav className="navBar">
        <a href="https://www.bustle.com/" className="logo">
          <img src={logo2} alt="logo2" className="logoImage" />
        </a>
        <a href="http://sendamessage.to/" className="menuLink" style={{color:"black"}}>
          MENU
        </a>
      </nav>
    </div>
    {/* this displays the second page */}
    <div className="img1">
      <img src={img1} alt="img1" />
      <div className="image_text2">
        <p>Jenners look blended punk and glamour, with a <br/>billowing skirt and a sheer mesh cropped tank</p>
      </div>
    </div>
  </div>
  ),


    
    ( 
    
<div className="mainContainer2" >
    <div className="header2">
      <nav className="navBar">
        <a href="https://www.bustle.com/" className="logo">
          <img src={logo2} alt="logo2" className="logoImage" />
        </a>
        <a href="http://sendamessage.to/" className="menuLink" style={{color:"black"}}>
          MENU
        </a>
      </nav>
    </div>
    {/* this displays the 3rd page */}
    <div className="img1">
      <img src={img2} alt="img1" />
      <div className="image_text2">
        <p>Jenners look blended punk and glamour, with a <br/>billowing skirt and a sheer mesh cropped tank</p>
      </div>
    </div>
  </div>
  ),


    (

<div className="mainContainer2" >
    <div className="header2">
      <nav className="navBar">
        <a href="https://www.bustle.com/" className="logo">
          <img src={logo2} alt="logo2" className="logoImage" />
        </a>
        <a href="http://sendamessage.to/" className="menuLink" style={{color:"black"}}>
          MENU
        </a>
      </nav>
    </div>
    {/* this displays the 4th page */}
    <div className="img1">
      <img src={img3} alt="img1" />
      <div className="image_text2">
        <p>Jenners look blended punk and glamour, with a <br/>billowing skirt and a sheer mesh cropped tank</p>
      </div>
    </div>
  </div>
    )


  ];

  const handleClick = (event) => {
    const halfScreenWidth = window.innerWidth / 2;
    const clickedPosition = event.clientX;

    if (clickedPosition > halfScreenWidth) {
      // Clicked on the right half of the screen
      if (currPageIndex < pages.length - 1) {
        setCurrPageIndex((prevIndex) => (prevIndex + 1)%pages.length);
      }
    } else {
      // Clicked on the left half of the screen
      if (currPageIndex > 0) {
        setCurrPageIndex((prevIndex) => (prevIndex - 1)%pages.length);
      }
    }
  };

  useEffect(() => {
    interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 8)}, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(interval);
      setProgress(0);
      if (currPageIndex < pages.length - 1) {
        setCurrPageIndex((prevIndex) => prevIndex + 1);
      }
    }
  }, [progress]);

  return (
    <div className="mainContainer" onClick={handleClick}>
      <div className="header"></div>

    <div>
      <div>{pages[currPageIndex]}</div>

      <div className="progressBar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

    </div>
    </div>
  );
};

ReactDOM.render(<Bustle />, document.getElementById("root"));
