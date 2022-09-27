import React, { useSyncExternalStore } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import {Link} from "react-router-dom";
import './CalculatorResults.scss';
import resultsBackground from '../../assets/images/results-image.png'
import loseIcon from '../../assets/images/lose-icon.png'

function CalculatorResults(props) {
    const location = useLocation();
    const [result, setResult] = useState(0);

    useEffect(() => {
        setResult(location.state.bmrResult);
    }, [location])
  return (
    <div>
        <div className="results__container"> 
            <div className="results__container-inner">
                <img className="results__background" src={resultsBackground} alt="Results Background" />
                <h3 className="results__title">Your Stats </h3>
                <div> 
                <p className="results__calories">{Math.round(result)} cal</p>
                </div>
                <p className="results__maintain">Maintain Weight</p>
            </div>
        </div>

        <div className="lose__lower-section">
        <div className="lose__lower-outer">
           <div className="lose__header"> 
            <img src={loseIcon} alt="Lose Weight Icon" />
            <h3 className="lose__subheader">Calories to Lose Weight</h3> 
           </div>

           <div className="lose__container-lower"> 
                <div className="lose__container-inner">
                    <div className="lose__container-left"> 
                        <div> 
                        <p className="slow">Slow</p>
                        </div>
                        <div> 
                        <p className="speed">(0.22 kg per week)</p> 
                        </div>
                    </div>
                <div className="lose__results"> 
                  <p className="lose__numbers">{Math.round(result * 0.9)} (90%) </p>  
                </div>
                </div>
            </div>

            <div className="lose__container-lower"> 
                <div className="lose__container-inner">
                    <div className="lose__container-left"> 
                        <div> 
                        <p className="slow">Moderate</p>
                        </div>
                        <div> 
                        <p className="speed">(0.5 kg per week)</p> 
                        </div>
                    </div>
                <div className="lose__results"> 
                  <p className="lose__numbers">{Math.round(result * 0.8)} (80%) </p>  
                </div>
                </div>
            </div>
            
            <div className="lose__container-lower"> 
                <div className="lose__container-inner muscle-space">
                    <div className="lose__container-left"> 
                        <div> 
                        <p className="slow">Fast</p>
                        </div>
                        <div> 
                        <p className="speed">(1 kg per week)</p> 
                        </div>
                    </div>
                <div className="lose__results"> 
                  <p className="lose__numbers">{Math.round(result * 0.75)} (75%) </p>  
                </div>
                </div>
            </div>

        <div className="gainmuscle__container"> 
            <div className="lose__header"> 
            <img src={loseIcon} alt="Lose Weight Icon" />
            <h3 className="lose__subheader muscle-title">Calories to Gain Muscle</h3> 
           </div>
        </div>

        <div className="lose__container-lower"> 
                <div className="lose__container-inner muscle-space">
                    <div className="lose__container-left"> 
                        <div> 
                        <p className="slow">Lean Bulk</p>
                        </div>
                        <div> 
                        <p className="speed">(.22kg per week)</p> 
                        </div>
                    </div>
                <div className="lose__results"> 
                  <p className="lose__numbers">{Math.round(result * 1.15)} (115%) </p>  
                </div>
                </div>
            </div>
            <div className="btn-container-back"> 
                <Link to="/BMRcalculator"> 
                    <button className="results-btn btn-left"type="submit">Back</button>
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CalculatorResults