import React from 'react'
import "./RecipeCard.scss"
import Heart from "../../assets/images/heart.png"
import Stars from "../../assets/images/stars.png"


const BASE_URL = "http://localhost:8001";

function RecipeCard(props) {

const formatRecipeIntroduction = () => {
  return props.recipeintroduction.length > 50 ?
  `${props.recipeintroduction.substring(0,50)}...` :
  props.recipeintroduction
}


  return (
    <div className="recipecard__container">
      <div>
        <img className="recipe-img"src={`${BASE_URL}/images/${props.image}`}></img>
      </div>
      <div>
         <h4>{props.recipetitle}</h4>
         <p>{formatRecipeIntroduction()}</p>
         <p>Author: By {props.author ? props.author : "Anonymous"}</p>
         <div className="recipecard__reactions">
            <div>
                <img src={Stars} alt="Stars"/>
            </div>
            <div>
                <img src={Heart} alt="Hearts" />
            </div>
         </div>
      </div>
    </div>
  )
}

export default RecipeCard