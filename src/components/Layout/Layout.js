import InputForm from "../InputForm/InputForm";
import HomePage from "../HomePage/HomePage";
import NotFound from "../NotFound/NotFound";
import Header from "../Header/Header";
import RecipeSearch from "../RecipeSearch/RecipeSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import {useState} from "react";

function Layout() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // TODO: create a state for username and password
  
    const onLogin = () => {
      //todo: compare username andpassword, if rquals, then login
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
          <Route path="uploadRecipe" element=""/>
          <Route path="/" element={<HomePage/>} end/>
            <Route path="/recipesearch" element={<RecipeSearch/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      :
      <div>
        <h1>FITLIFE</h1>
        <input placeholder="username"/>
        <input placeholder="password" />
        <button onClick={() => onLogin()}>login</button>
      </div>
  }
  </div>
  )
}

export default Layout