import axios from "axios";
import React, { useState } from "react";
import './RecipeSearch.scss'
import RecipeCard from "../RecipeCard/RecipeCard";

const API = "https://api.edamam.com/api/recipes/v2";
const API_ID = "0d2dab7c";
const API_KEY = "91f1bd027a8a04dc52a7810b4657d595";

const RecipeSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [recipe, setRecipe] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const onSearch = async () => {
    const results = await axios
      .get(API, {
        params: {
          type: "public",
          app_key: API_KEY,
          app_id: API_ID,
          q: searchValue,
        },
      })
      .then((res) => res.data["hits"]);
    setResults(results);
  };

  return (
    <div className="searchbar">
      {recipe != null ? (
        <div>
          <div> 
          <div className="recipe-img-container">
            <img className="recipe-img-detail" src={recipe.image}></img>
          </div>
          <div className="recipe__container-upper"> 
          <h3 className="recipe__label">{recipe.label}</h3>
          <p className="recipe__macros">Macronutrients</p>
          </div>
          </div>
          <div className="recipe__calories-container"> 
          <div className="recipe__calories-container-inner"> 
          <p className="calories">Calories: {Math.round(recipe.calories)}</p> 
          </div>
          </div>
          {recipe.digest.filter(f => ["Fat", "Protein", "Carbs"].includes(f.label))
          .map(d => (
            <div className="recipe__macros-container"> 
              <p className="macros">{d.label}</p>
              <p className="macros">{Math.round(d.total)}g</p>
            </div>
          ))}

          <div className="ingredients__container">
           <p className="ingredients">Ingredients</p>
          </div>
          <div className="list__container"> 
          <ul className="list">
          {recipe.ingredientLines.map((i, index) => 
            <li key={index}>{i}</li>
            )}
          </ul>
          </div>
          <div className="recipesearch-btn-container"> 
            <button className="recipesearch-btn" onClick={() => setRecipe(null)}>Go Back</button>
            </div>
        </div>
      ) : (
        <div>
          <div className="searchbar__container"> 
            <form onSubmit={handleSubmit} className="searchbar__form">
              <div className="searchbar__btn-container"> 
              <h3>Find a Recipe!</h3>
              <input
                className="searchbar__input"
                name="search"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Find your meal"
              ></input>
              <div className="recipe__btn-container"> 
                <button
                  className="recipe__btn"
                  type="submit"
                  onClick={() => onSearch()}
                >
                  Search
                </button>
              </div>
              </div>
            </form>
          </div>
          {results.length > 0 &&
            results.map((r) => {
              const item = r.recipe;
              return (
                <div key={item.id} onClick={() => setRecipe(item)}>
                <RecipeCard 
                    imageExternal={item.image}
                    recipetitle={item.label}
                    recipeintroduction=""
                    author={item.source}
                    />
                  </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default RecipeSearch;
