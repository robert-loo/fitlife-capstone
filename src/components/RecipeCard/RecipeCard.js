import React from "react";
import "./RecipeCard.scss";
import Heart from "../../assets/images/heart-icon.png";
import Stars from "../../assets/images/stars.png";

const { REACT_APP_BASE_URL } = process.env;

function RecipeCard(props) {
  
  const formatRecipeIntroduction = () => {
    return props.recipeintroduction.length > 50
      ? `${props.recipeintroduction.substring(0, 50)}...`
      : props.recipeintroduction;
  };

  const buildImageURL = () => {
    if (!props.imageExternal) {
      return `${REACT_APP_BASE_URL}/images/${props.image}`;
    }
    return props.imageExternal;
  };

  return (
    <div className="recipecard__container">
      <div className="recipecard__left-container">
        <img className="recipe-img" alt="" src={buildImageURL()}></img>
      </div>   
      <div className="recipecard__right-container">
        <h4 className="recipecard__right-container__title">
          {props.recipetitle}
        </h4>
        <p className="recipecard__right-container__intro">
          {formatRecipeIntroduction()}
        </p>
        <p className="recipecard__right-container__author">
          Author: By {props.author ? props.author : "Anonymous"}
        </p>
        <div className="recipecard__reactions">
            <div>
              <img src={Stars} alt="Stars" />
            </div>
          <div>
            <img src={Heart} alt="Hearts" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
