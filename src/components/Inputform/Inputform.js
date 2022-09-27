import './Inputform.scss';
import React from 'react';
import {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Select from "react-dropdown-select";


function InputForm() {


// state

const [age, setAge] = useState(0)
const [height, setHeight] = useState(0)
const [weight, setWeight] = useState('');
const  [isMale, setIsMale] = useState(true);
const [bmrResult, setBmrResult] = useState(55);
const [activity, setActivity] = useState(0);


const options = [
  { label: "Sedentary", value: 1.2 },
  { label: "Lightly Active", value: 1.375 },
  { label: "Moderately Active", value: 1.55 },
  { label: "Very Active", value: 1.725 },
];

const navigate = useNavigate();

const handleSubmit = (event) => {
  event.preventDefault();
  const result = ((10 * weight) + (6.25 * height) - (5 * age) + (isMale ? 5 : -165)) * activity;
  navigate("/calculatorresults", {state: {bmrResult: result}});
};

  

  return (
    <div>
      <div className="inputform-container">
        <div className="calculator__container"> 
          <div className="calculator__container-inner">
            <h3 className="calculator__title">Calories Calculator</h3>
            <p className="calculator__description">Use this calculator to estimate how many calories you burn and how many you should eat every day to lose weight, maintain, and gain muscle.
            </p>
          </div>
        </div>
    <div className="calculator__container-lowerouter"> 
      <div className="calculator__container-lowerinner"> 
        <form onSubmit={handleSubmit}>
          <div className="gender__container">
            <h3 className="gender__title">Gender </h3>
          <div className="gender__container-right"> 
              <input
                type="radio"
                name="gender"
                id="male"
                value={isMale}
                onClick={() => setIsMale(true)}
                checked
              />
              <label for="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="female"
                value={!isMale}
                onClick={() => setIsMale(false)}
              />
              <label for="female">Female</label>
            </div>
          </div>

        <div className="height__container-outer">
          <div className="height__container">
            <h3 className="height__title">Height</h3>
            <input className="height__input"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              type="number"
              name="height"
              placeholder="centimetres(cm)"
            />
          </div>
          <div className="weight__container">
            {/* <div> */}
              <h3 className="weight__title">Weight </h3>
              <input className="weight__input"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                type="number"
                name="weight"
                placeholder="kilograms(kg)"
              />
             {/* </div> */}
          </div>
        </div>
          <div>
            <h3>Age</h3>
            <input
              value={age}
              onChange={(event) => setAge(event.target.value)}
              type="number"
              name="age"
            />
          </div>
          <div>
          <Select options={options} onChange={(values) => setActivity(values[0].value)}/>
          <label for="activity">Activity Level</label>
          </div>
          <div>
           <button type="submit"
           onClick={(e) => handleSubmit(e)}
           >GET RESULTS!</button>
            <button type="submit">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  );
}



export default InputForm;
