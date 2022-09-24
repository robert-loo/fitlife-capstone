import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';



function HomePage() {

    const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);

  return (
    <div>
    <h2>Fit does not quit</h2>
    <Link to="/BMRcalculator"> 
    <button>Take The Quiz</button>
    </Link>
    <footer>
      Robert L | FitLife
    </footer>
    </div>
  )
}

export default HomePage