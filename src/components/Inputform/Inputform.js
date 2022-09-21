import React from "react";
import './Inputform.scss';


function InputForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.age.value);
    console.log(event.target.gender.value);
    console.log(event.target.height.value);
    console.log(event.target.weight.value);
  };

  return (
    <div>
      <div className="inputform-container">
        <form onSubmit={handleSubmit}>
          <h3>Age</h3>
          <input type="number" name="age" />
          <h3>Gender </h3>
          <input type="radio" name="gender" id="male" value="male" />
          <label for="male">Male</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label for="female">Female</label>
          <h3>Height </h3>
          <input type="number" name="height" placeholder="cm" />
          <h3>Weight </h3>
          <input type="number" name="weight" placeholder="kg" />
          <div>
            <button type="submit">Calculate</button>
            <button type="submit">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
