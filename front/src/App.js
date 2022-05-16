import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Login from "../src/pages/Login";
import EsqueceuASenha from "./pages/Esqueceu-A-Senha";
import Routes from "./Routes";
import api from "./services/api";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
  /*
  api.get("/students/")
    .then(function (response){
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error)
    });
  */
}

export default App;
