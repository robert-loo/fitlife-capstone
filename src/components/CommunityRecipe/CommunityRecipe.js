import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import {useEffect, useState} from "react";
import './CommunityRecipe.scss';
import axios from 'axios';
import RecipeCard from "../RecipeCard/RecipeCard";




const BASE_URL = "http://localhost:8001";

function CommunityRecipe() {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState();


    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    }


    const onKeyDown = () => {

    }

    const searchRecipes = (event) => {
      if (event.key === "Enter"){ 
        console.log(`${BASE_URL}/searchrecipes/?q=${searchTerm}`);
        const rsp = axios.get(`${BASE_URL}/searchrecipes/?q=${searchTerm}`)
        .then(res => {
          setRecipes(res.data)
          console.log(recipes);
        });
      }
    }
    useEffect(() => {
      const rsp = axios.get(BASE_URL + "/searchrecipes")
       .then(res => setRecipes(res.data));
       
   }, [])


  return (
    <div className="communityrecipe__page">
      <div className="communityrecipe__container">
          <div className="communityrecipe__container__inner">
              <h3>CommunityRecipes</h3>
            <h4>Recipes shared by the Community</h4>
            <input onChange={handleInputChange} onKeyDown={searchRecipes} type="text" placeholder="search"/>
            {/* <button onClick={searchRecipes}>Search</button> */}
            <Link to="/uploadrecipe">
                <button >Upload</button>
            </Link>
            {recipes.length > 0 &&
                recipes.map((r) => {
                  return (
                    <RecipeCard key={r.id} {...r}/>
                );
              })}
          </div>
        </div>
    </div>
  )
}

export default CommunityRecipe;
