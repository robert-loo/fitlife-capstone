import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import "./HomePage.scss"



function HomePage() {

    const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);

  return (
    <div>
      <div className="homepage__container">
      <div class="hero__overlay"></div>
        <div className="homepage__subheader--container"> 
      <h2 className="homepage__title">Fit does not quit</h2>
      <h3 className="homepage__subtitle">The Beginning of a journey starts with the first step</h3>
      <Link to="/BMRcalculator"> 
      <button className="homepage-btn">START HERE</button>
      </Link>
      </div>
      </div>
    </div>
  )
}

export default HomePage