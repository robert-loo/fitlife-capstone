import './Inputform.scss';
import React from 'react';
import {useState} from 'react';


function InputForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const result = ((10 * weight) + (6.25 * height) - (5 * age) + (isMale ? 5 : -165));
    setBmrResult(result)
  };


// state

const [age, setAge] = useState(0)
const [height, setHeight] = useState(0)
const [weight, setWeight] = useState('');
const  [isMale, setIsMale] = useState(true);
const [bmrResult, setBmrResult] = useState(0);





  return (
    <div>
      <div className="inputform-container">
        <form onSubmit={handleSubmit}>
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
            <h3>Gender </h3>
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
          <div>
            <h3>Height </h3>
            <input
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              type="number"
              name="height"
              placeholder="cm"
            />
          </div>
          <div>
            <h3>Weight </h3>
            <input
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              type="number"
              name="weight"
              placeholder="kg"
            />
          </div>
          <div>
            <button type="submit">Calculate</button>
            <button type="submit">Clear</button>
          </div>
        </form>
        <div>
          {bmrResult > 0 ? (
            <div>
              <h3>Result</h3>
              <p>{bmrResult}</p>
              <p>maintain weight {bmrResult * 1.2}</p>
              <p>alskdfjasf {bmrResult * 0.7}</p>
              <p>laksjfdlkasjf{bmrResult * 0.5}</p>
              
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default InputForm;
