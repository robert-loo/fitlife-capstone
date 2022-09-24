import React, { useState, useEffect} from 'react'
import "./UploadRecipe.scss"




function UploadRecipe() {
  const [inputTitle, setInputTitle] = useState(""); 
  const [inputImage, setInputImage] = useState(""); 
  const [imageURLs, setImageURLs] = useState([]);
  const [inputIntro, setInputIntro] = useState(""); 
  const [inputIngredients, setInputIngredients] = useState(""); 
  const [inputHowTo, setInputHowTo] = useState(""); 

  //  TODO - How to upload an image dynamically and it back to the back end? 

  const submitForm = () => {
    if (inputTitle !== ""){
      axios.post('', {
        // double check what inputs do you want to send back to the back-end
        title: inputTitle,
        image: inputImage,
        description: inputDescription,
      })
      .then(response => {
        if (response.data) {
          // triggerToaster()
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  // Mounting images?

  useEffect(()=>{
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
    setImageURLs(newImageUrls);
  }, [images]);

  // Function to upload images 
function onImageChange(event){
  setImages([...event.target.files]);
}


  return (
  <main>
      <div className="upload__container">
        <h1 className="upload__header">Create your recipe!</h1>
            <div>
              <h4 className="upload__title">Recipe Details</h4>
              <img className="upload__image" alt="Click to add photo (optional)" src={inputImage} />  
              <input type="file" multiple accept="image/*" onChange={onImageChange} />
              {imageURLs.map(imageSrc => <img src={imageSrc} />) }
            </div>
              <h4>Recipe Title</h4>
              <input
                className="upload__title--form"
                type="text"
                placeholder="e.g Momma's apple pie"
                value={inputTitle} onChange={event => setInputTitle(event.target.value)} 
              />
              <div className="textarea__container">
                <h4 className="upload__title--description">
                  Short Intro
                </h4>
                <textarea placeholder="Tell us about your recipe" value={inputIntro} onChange={event => setInputIntro(event.target.value)} />
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
                <button onClick={()=>submitForm()}>Upload Recipe</button>
                  <div className="upload__cancel--container">
                    <Link to="/">
                      <button className="upload__cancel--button">CANCEL</button>{" "}
                    </Link>
                  </div>
                </div>
                {renderToaster && (
                  <div className="upload__toaster">Upload Successful</div>
                )}
    </main>
  )
}

export default UploadRecipe