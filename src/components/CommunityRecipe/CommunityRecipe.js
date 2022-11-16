import { Link } from "react-router-dom";
import React from "react";
import {useEffect, useState} from "react";
import './CommunityRecipe.scss';
import axios from 'axios';
import RecipeCard from "../RecipeCard/RecipeCard";
import { useLocation } from 'react-router-dom'



const { REACT_APP_BASE_URL } = process.env;

function CommunityRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const location = useLocation();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  

  const searchRecipes = (event) => {
    if (event.key === "Enter") {
      console.log(`${REACT_APP_BASE_URL}/searchrecipes/?q=${searchTerm}`);
      axios
        .get(`${REACT_APP_BASE_URL}/searchrecipes/?q=${searchTerm}`)
        .then((res) => {
          setRecipes(res.data);
          console.log(recipes);
        });
    }
  };
  useEffect(() => {
    axios
      .get(REACT_APP_BASE_URL + "/searchrecipes")
      .then((res) => setRecipes(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(REACT_APP_BASE_URL + "/searchrecipes")
      .then((res) => setRecipes(res.data));
  }, [location.state]);

  return (
    <div className="communityrecipe__page">
      <div className="communityrecipe__container">
        <div className="communityrecipe__container__inner">
          <div className="card-background communityrecipe__container-title">
            <h3 className="communityrecipe__header">Community Recipes</h3>
            <p className="communityrecipe__description">
              Find recipes shared by other users where you can share them too!
            </p>
          </div>
          <div className="card-background">
            <h4>Recipes shared by others</h4>
            <input
              className="communityrecipe-input"
              onChange={handleInputChange}
              onKeyDown={searchRecipes}
              type="text"
              placeholder="Search"
            />
            <Link to="/uploadrecipe">
              <button className="communityrecipe-btn">Upload</button>
            </Link>

            <div className="communityrecipe__cards-container">
              {" "}
              {recipes.length > 0 &&
                recipes.map((r) => {
                  return <RecipeCard key={r.id} {...r} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityRecipe;
