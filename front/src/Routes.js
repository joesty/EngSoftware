import React from "react";
import { /*Switch,*/ Route } from "react-router-dom";
import EsqueceuASenha from "./pages/Esqueceu-A-Senha/index";
import Login from "./pages/Login";
import CadastrarAluno from "./pages/Cadastrar-Aluno/cadastrar-aluno";
import CadastrarEmpresa from "./pages/Cadastrar-Empresa/cadastrar-empresa";
import Cadastro from "./pages/cadastro";
import CadastroConfirmado from "./pages/cadastro_confirmado";
import Home from "./pages/home/home";

export default (
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
  </>
);
