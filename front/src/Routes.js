import React from "react";
import { Switch, Route } from 'react-router-dom';
import Esqueceu_a_senha from "./pages/Esqueceu_a_Senha";
import Login from "./pages/Login";

export default () => {

    return(
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>

            <Route exact path="/password_recovery" >
                <Esqueceu_a_senha/>
            </Route>
        </Switch>
    );
}