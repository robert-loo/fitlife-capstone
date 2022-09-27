import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import {useEffect, useState} from "react";
import './CommunityRecipe.scss';
import axios from 'axios';



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
    <div>
        <h3>CommunityRecipes</h3>
        <input onChange={handleInputChange} onKeyDown={searchRecipes} type="text" placeholder="search"/>
        {/* <button onClick={searchRecipes}>Search</button> */}
        <Link to="/uploadrecipe">
            <button >Upload</button>
        </Link>
        {recipes.length > 0 &&
            recipes.map((r) => {
              return (
                <div key={r.id}>
                  <h3>{r.recipetitle}</h3>
                  <img className="recipe-img"src={`${BASE_URL}/images/${r.image}`}></img>
                  {/* <p>Ingredients: {r.ingredients}</p> */}
                </div>
              );
            })}
    </div>
  )
}

export default CommunityRecipe;
