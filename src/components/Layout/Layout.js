import InputForm from "../InputForm/InputForm";
import HomePage from "../HomePage/HomePage";
import NotFound from "../NotFound/NotFound";
import Header from "../Header/Header";
import RecipeSearch from "../RecipeSearch/RecipeSearch";
import CommunityRecipe from "../CommunityRecipe/CommunityRecipe";
import UploadRecipe from "../UploadRecipe/UploadRecipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import {useState} from "react";
import './Layout.scss';


const BASE_URL = "http://localhost:8001";

function Layout() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // TODO: create a state for username and password
  
    const onLogin = () => {
      //todo: compare username andpassword, if equals, then login
      // if (password == ipnputpaswword && username === inputusername) {
        setIsAuthenticated(true);
    }
  
    const onLogout = () => {
      setIsAuthenticated(false)
    }
    const username = "Robert";
    const password = "123";

  return (
    <div>
    {isAuthenticated ?  
      <BrowserRouter>
      <Header  onLogout={onLogout}/>
      <Routes>
        <Route path="/quiz" element=""/>
        <Route path="/BMRcalculator" element={<InputForm/>}/>
        <Route path="/" element={<HomePage/>}/>
          <Route path="/recipesearch" element={<RecipeSearch/>}/>
          <Route path="/communityrecipe" element={<CommunityRecipe/>} />
          <Route path="/uploadrecipe" element={<UploadRecipe/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
      :
      <> 
      <div className="login__container">
        <h1 className="login__header">FitLife</h1>
        <div className="login__box"> 
            <h1 className="login__title">Login</h1>
            <input className="login__username" placeholder="Username"/>
            <input className="login__password" placeholder="Password" />
            <div className="btn__container"> 
            <button className="login-btn" onClick={() => onLogin()}>Login</button>
            </div>
        </div>
      </div>
      </>
  }
  </div>
  )
}

export default Layout
