import axios from "axios";
import React, { useState } from "react";
import Modal from "../Modal/Modal";

const API = "https://api.edamam.com/api/recipes/v2";
const API_ID = "0d2dab7c";
const API_KEY = "91f1bd027a8a04dc52a7810b4657d595";

const RecipeSearch = () => {
  const [modal, setModal] = useState(false);
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
          <button onClick={() => setRecipe(null)}>clear</button>
          <h3>{recipe.label}</h3>
          <img src={recipe.image}></img>
          <p>Calories: {recipe.calories}</p>
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
          <form onSubmit={handleSubmit} className="searchbar__form">
            <input
              className="searchbar__input"
              name="search"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Find your favorite recipe"
            ></input>
            <button
              className="searchbar__btn"
              type="submit"
              onClick={() => onSearch()}
            >
              Search
            </button>
          </form>
          {results.length > 0 &&
            results.map((r) => {
              const item = r.recipe;
              return (
                <div key={item.id} onClick={() => setRecipe(item)}>
                  <h3>{item.label}</h3>
                  <img src={item.image}></img>
                  <p>Calories: {item.calories}</p>
                </div>
              );
            })}
          <Modal open={modal} onClose={() => setModal(false)} />
        </div>
      )}
    </div>
  );
};

export default RecipeSearch;