import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import "./UploadRecipe.scss"




function UploadRecipe() {
  const [inputRecipeTitle, setInputRecipeTitle] = useState(""); 
  const [imageURLs, setImageURLs] = useState([]);
  const [inputRecipeIntroduction, setInputRecipeIntroduction] = useState(""); 
  const [inputIngredients, setInputIngredients] = useState(""); 
  const [inputHowTo, setInputHowTo] = useState(""); 
  const [fileData, setFileData] = useState([]);

  const onImageChange = (event)=>{
    console.log(event.target.files);
    setFileData([...event.target.files])
  }

  //  TODO - How to upload an image dynamically and push it to the back end? 

  const submitForm = (event) => {
    event.preventDefault()
    if (inputRecipeTitle !== ""){
      console.log("submitted file data", fileData)   
      axios.post('http://localhost:8001/uploadrecipe', {
  
        // double check what inputs do you want to send back to the back-end
        images: fileData.map(file => file.name),
        recipetitle: inputRecipeTitle,
        recipeintroduction: inputRecipeIntroduction,
        ingredients: inputIngredients,
        howto: inputHowTo,

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
    }
  }

const renderImages = () => {
    return fileData.map(file => {
      const fileSource = URL.createObjectURL(file)
      return  <img key={file.name} src={fileSource}></img>
    })
}

  // Mounting images?

//   useEffect(()=>{
//     if (images.length < 1) return;
//     const newImageUrls = [];
//     images.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
//     setImageURLs(newImageUrls);
//   }, [images]);

//   // Function to upload images 
// function onImageChange(event){
//   setImages([...event.target.files]);
// }


  return (
  <main>
    <form onSubmit={submitForm}>
      <div className="upload__container">
        <h1 className="upload__header">Create your recipe!</h1>
            <div>
              <h4 className="upload__title">Recipe Details</h4>
              <h3>Add Photo</h3>
              <div>
                <h2>Preview</h2>
                {fileData && 
                  renderImages()
                }
              </div>
              <input type="file" multiple accept="image/*" onChange={onImageChange} />
            </div>
              <h4>Recipe Title</h4>
              <input
                className="upload__title--form"
                type="text"
                placeholder="e.g Momma's apple pie"
                value={inputRecipeTitle} onChange={event => setInputRecipeTitle(event.target.value)} 
              />
              <div className="textarea__container">
                <h4 className="upload__title--description">
                  Short Intro
                </h4>
                <textarea placeholder="Tell us about your recipe" value={inputRecipeIntroduction} onChange={event => setInputRecipeIntroduction(event.target.value)} />
              </div>
                <h4>
                  Ingredients
                </h4>
                <textarea placeholder="500g chicken, diced in cubes." value={inputIngredients} onChange={event => setInputIngredients(event.target.value)} />
                </div>
                <h4>
                  How to Make
                </h4>
                <textarea placeholder="1. Boil the water first" value={inputHowTo} onChange={event => setInputHowTo(event.target.value)} />
                <div className="upload__container--tablet">
                <button type="submit">Upload Recipe</button>
                  <div className="upload__cancel--container">
                    <Link to="/">
                      <button className="upload__cancel--button">CANCEL</button>{" "}
                    </Link>
                  </div>
                </div>
                {/* {renderToaster && (
                  <div className="upload__toaster">Upload Successful</div>
                )} */}
      </form>
    </main>
  )
}

export default UploadRecipe