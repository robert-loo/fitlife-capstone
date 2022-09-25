import "./App.scss";
import Layout from "./components/Layout/Layout";
import RecipeSearch from "./components/RecipeSearch/RecipeSearch";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound"
import { useState } from "react";


function App() {
  return (
    <div className="background-layout">
    <Layout/>
    </div> 
  );
}

export default App;
