import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import Modal from "../Modal/Modal";
import './RecipeSearch.scss'

const API = "https://api.edamam.com/api/recipes/v2";
const API_ID = "0d2dab7c";
const API_KEY = "91f1bd027a8a04dc52a7810b4657d595";

const RecipeSearch = () => {
  const [modal, setModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [recipe, setRecipe] = useState(null);
  
  const renderRecipes = () => {
    return results.map((recipe)=>{
      return (<RecipeCard 
      image={recipe.image}
      recipetitle={recipe.label}
      recipeintroduction=""
      author={recipe.source} 
      />)
    }) 
  }

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
        <div key={recipe._links.self}>
          <button onClick={() => setRecipe(null)}>clear</button>

          <div> 
          <div>
          <img className="recipe-img" src={recipe.image}></img>
          </div>
          <div> 
          <h3>{recipe.label}</h3>
          <p>Calories: {recipe.calories}</p> 
        
      </div>
      </div>
          {recipe.digest.filter(f => ["Fat", "Protein", "Carbs"].includes(f.label))
          .map(d => (
            <div>
              <h2>{d.label}</h2>
              <p>{d.total}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="searchbar__container"> 
            <form onSubmit={handleSubmit} className="searchbar__form">
              <h3 className="recipesearch__title">Find a Recipe!</h3>
              <div className="searchbar__btn-container"> 
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
              console.log(r);
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
                // 
                //   <h3>{item.label}</h3>
                //   <img className="recipe-img" src={item.image}></img>
                //   <p>Calories: {Math.round(item.calories)}</p>
                // </div>
              );
            })}
          <Modal open={modal} onClose={() => setModal(false)} />
        </div>
      )}
    </div>
  );
};

export default RecipeSearch;
