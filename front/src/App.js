import React /*, { useEffect, useState } */ from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Conteiner from "./components/layout/Conteiner";
import Footer from "./components/Footer";
import Routes from "./Routes";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Conteiner customClass="min-heigth">
        <Routes/>
        </Conteiner>
      </Switch>
      <Footer />
    </Router>
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
