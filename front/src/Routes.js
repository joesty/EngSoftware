import React from "react";
import { Switch, Route } from 'react-router-dom';
import Esqueceu_a_senha from "./pages/Esqueceu_a_Senha";
import Login from "./pages/Login";
import CadastrarAluno from "./pages/Cadastrar-Empresa/cadastrar-empresa";
import CadastrarEmpresa from "./pages/Cadastrar-Aluno/cadastrar-aluno";
import Home from "./pages/home/home";

export default () => {

    return(
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>

            <Route exact path="/password_recovery" >
                <Esqueceu_a_senha/>
            </Route>

            <Route exact path="/user_cadaster" >
                <CadastrarEmpresa/>
            </Route>

            <Route exact path="/home_page" >
                <Home/>
            </Route>
        </Switch>
    );
}