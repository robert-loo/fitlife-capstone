import React, { useSyncExternalStore } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import {Link} from "react-router-dom";

function CalculatorResults(props) {
    const location = useLocation();
    const [result, setResult] = useState(0);

    useEffect(() => {
        setResult(location.state.bmrResult);
    }, [location])
  return (
    <div>
        <div>CalculatorResults</div>
        <div>
            your stat {Math.round(result)}
        </div>
        <p>maintain wieght</p>

        <div>
            Calories to lose
            <div>
                slow: 
                {Math.round(result * 0.9)}
            </div>
            <div>
                moderate: 
                {Math.round(result * 0.8)}
            </div>
            <div>
                fast:
                {Math.round(result * 0.7)}
            </div>
        </div>

        <div>

        </div>
        <Link to="/BMRcalculator">back</Link>
    </div>
  )
}

export default CalculatorResults