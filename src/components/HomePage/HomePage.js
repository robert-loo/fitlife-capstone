import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Footer from "../Footer/Footer";
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
          <h3 className="homepage__subtitle">The Beginning of a Journey starts with the first step</h3>
          <Link to="/BMRcalculator"> 
            <button className="homepage-btn">START HERE</button>
          </Link>
          {/* <div className="meals__container"> 
            <div>
              <h2> Meal Recipes</h2>
            </div>
            <div>
              <h2>Recipes shared by the community</h2>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HomePage