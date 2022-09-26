import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import {useEffect, useState} from "react";
import './CommunityRecipe.scss';
import axios from 'axios';



const BASE_URL = "http://localhost:8001";

function CommunityRecipe() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const rsp = axios.get(BASE_URL + "/searchrecipes")
        .then(res => setRecipes(res.data));
        
    }, [])

  return (
    <div>
        <h3>CommunityRecipes</h3>
        <input type="text" placeholder="search"/>
        <Link to="/uploadrecipe">
            <button >Upload</button>
        </Link>
        {recipes.length > 0 &&
            recipes.map((r) => {
              return (
                <div key={r.id}>
                  <h3>{r.recipetitle}</h3>
                  {/* <img src={r.recipeintroduction}></img> */}
                  <p>Ingredients: {r.ingredients}</p>
                </div>
              );
            })}
    </div>
  )
}

export default CommunityRecipe;
