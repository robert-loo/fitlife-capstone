import React, { useState, useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import "./UploadRecipe.scss"




function UploadRecipe() {
  const [inputRecipeTitle, setInputRecipeTitle] = useState(""); 
  const [inputRecipeIntroduction, setInputRecipeIntroduction] = useState(""); 
  const [inputIngredients, setInputIngredients] = useState(""); 
  const [inputHowTo, setInputHowTo] = useState(""); 

  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("")

  const navigate = useNavigate();
  const onImageChange = (event)=>{
    console.log(event.target.files);
    setFile(event.target.files[0])
    setFilename(event.target.files[0].name)
  }

  //  TODO - How to upload an image dynamically and push it to the back end? 

  const submitForm = (event) => {
    event.preventDefault()
    if (inputRecipeTitle !== ""){
      let formData = new FormData();
      formData.append('file', file);
      formData.append('recipetitle', inputRecipeTitle);
      formData.append('recipeintroduction', inputRecipeIntroduction);
      formData.append('ingredients', inputIngredients);
      formData.append('howto', inputHowTo);
      
      axios({
        method: 'post',
        url: 'http://localhost:8001/uploadrecipe',
        data: formData,
        headers: {"Content-type": "multipart/form-data"}
      })
      .then(response => {
        if (response.data) {
          console.log(response.data)
          // triggerToaster()
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      navigate("/communityrecipe",{state: {filename: filename}} )
    }
  }

const renderImages = () => {
      const fileSource = URL.createObjectURL(file);
      return  <img key={file.name} src={fileSource}></img>
}

  return (
  <main>
    <form onSubmit={submitForm}>
      <div className="upload__container">
      <h3 className="upload__header">Recipe Details</h3>
          <div className="upload__container-outer">
            <div>
              <h3 className="upload__photo">Add Photo</h3>
              <div>
                 {file && 
                    renderImages()
                  }
              </div>
              <input className="upload" type="file" name={inputRecipeTitle} multiple accept="image/*" onChange={onImageChange} />
            </div>
              <h4 className="upload__title--description">Recipe Title</h4>
              <input
                className="upload__input"
                type="text"
                placeholder="e.g Momma's apple pie"
                value={inputRecipeTitle} onChange={event => setInputRecipeTitle(event.target.value)} 
              />
              <div className="textarea__container">
                <h4 className="upload__title--description">
                  Short Intro
                </h4>
                <textarea className="upload__input" placeholder="Tell us about your recipe" value={inputRecipeIntroduction} onChange={event => setInputRecipeIntroduction(event.target.value)} />
              </div>
                <h4 className="upload__title--description">
                  Ingredients
                </h4>
                <textarea className="upload__input" placeholder="500g chicken, diced in cubes." value={inputIngredients} onChange={event => setInputIngredients(event.target.value)} />
                </div>
              <div className="upload__container-lower">
                <div className="upload__howto"> 
                  <h4 className="upload__title--description">
                    How to Make
                  </h4>
                  <textarea className="upload__input" placeholder="1. Boil the water first" value={inputHowTo} onChange={event => setInputHowTo(event.target.value)} />
                </div>
              <div className="upload__container-btn">
                <div> 
                <button className="upload__cancel-button" type="submit">Upload Recipe</button>
                </div>
                  <div className="upload__cancel--container">
                    <Link to="/communityrecipe">
                      <button className="upload__cancel-button">CANCEL</button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
                {/* {renderToaster && (
                  <div className="upload__toaster">Upload Successful</div>
                )} */}
            </div>
      </form>
    </main>
  )
}

export default UploadRecipe