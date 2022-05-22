import React from "react";
import { Route } from "react-router-dom";
import EsqueceuASenha from "./pages/Esqueceu-A-Senha";
import Login from "./pages/Login";
import CadastrarAluno from "./pages/Cadastrar-Aluno/cadastrar-aluno";
import CadastrarEmpresa from "./pages/Cadastrar-Empresa/cadastrar-empresa";
import Cadastro from "./pages/cadastro";
import CadastroConfirmado from "./pages/cadastro_confirmado";
import Home from "./pages/home/home";
import PaginaVaga from "./pages/Vaga/vaga";
import Feed from "./pages/Feed/feed"

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  return (
    <>
      <Route exact path="/">
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

      <Route exact path="/feed">
        <Feed />
      </Route>
    </>
  );
};
