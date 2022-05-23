import React /*, { useEffect, useState } */ from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EsqueceuASenha from "./pages/Esqueceu-A-Senha";
import Login from "./pages/Login";
import CadastrarAluno from "./pages/Cadastrar-Aluno/cadastrar-aluno";
import CadastrarEmpresa from "./pages/Cadastrar-Empresa/cadastrar-empresa";
import Cadastro from "./pages/cadastro";
import CadastroConfirmado from "./pages/cadastro_confirmado";
import Home from "./pages/home/home";
import PaginaVaga from "./pages/Vaga/vaga";
import FeedVagas from "./pages/Feed/feed";
import Conteiner from "./components/layout/Conteiner";
import Footer from "./components/Footer";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Conteiner customClass="min-heigth">
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/password_recovery">
            <EsqueceuASenha />
          </Route>

          <Route exact path="/cadastro">
            <Cadastro />
          </Route>

          <Route exact path="/cadastrar_aluno">
            <CadastrarAluno />
          </Route>

          <Route exact path="/cadastrar_empresa">
            <CadastrarEmpresa />
          </Route>

          <Route exact path="/cadastro_confirmado">
            <CadastroConfirmado />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/vaga">
            <PaginaVaga />
          </Route>

          <Route exact path="/">
            <FeedVagas />
          </Route>
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
