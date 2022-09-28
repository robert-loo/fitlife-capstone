import InputForm from "../InputForm/InputForm";
import HomePage from "../HomePage/HomePage";
import NotFound from "../NotFound/NotFound";
import Header from "../Header/Header";
import RecipeSearch from "../RecipeSearch/RecipeSearch";
import CommunityRecipe from "../CommunityRecipe/CommunityRecipe";
import UploadRecipe from "../UploadRecipe/UploadRecipe";
import Footer from "../Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import {useState} from "react";
import './Layout.scss';
import CalculatorResults from "../CalculatorResults/CalculatorResults";


const BASE_URL = "http://localhost:8001";
const username = "robert";
const password = "123";

function Layout() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    // TODO: create a state for username and password
  
    const onLogin = () => {
      //todo: compare username andpassword, if equals, then login
      if (password === inputPassword && username === inputUsername) {
        setIsAuthenticated(true);
      }
    }
  
    const onLogout = () => {
      setIsAuthenticated(false)
    }

  return (
    <div>
    {isAuthenticated ?  
      <BrowserRouter>
      <Header  onLogout={onLogout}/>
      <Routes>
        <Route path="/quiz" element=""/>
        <Route path="/BMRcalculator" element={<InputForm/>}/>
        <Route path="/calculatorresults" element={<CalculatorResults/>}/>
        <Route path="/" element={<HomePage/>} end/>
          <Route path="/recipesearch" element={<RecipeSearch/>}/>
          <Route path="/communityrecipe" element={<CommunityRecipe/>} />
          <Route path="/uploadrecipe" element={<UploadRecipe/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      :
      <> 
      <div className="login__container">
        <h1 className="login__header">FitLife</h1>
        <div className="login__box"> 
            <h1 className="login__title">Login</h1>
            <input className="login__username" placeholder="Username" onChange={(e) => setInputUsername(e.target.value)}/>
            <input type="password" className="login__password" placeholder="Password" onChange={(e) => setInputPassword(e.target.value)} password/>
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
