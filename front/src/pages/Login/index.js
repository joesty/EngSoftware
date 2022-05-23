import React, { useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
// import { Alert } from '@mui/material';

const Login = (props) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //função para atualizar valores do formulario
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  //função para salvar no banco de dados
  const handleClick = async (e) => {
    try {
      const response = await api.post("/api/login/", { email, password });
      console.log(response.data["user"]);
      const user = response.data["user"];
      const token = response.data["token"];
      localStorage.setItem("user", user);
      localStorage.setItem("token", token);
      localStorage.setItem("name", user["name"]);
      console.log(localStorage.getItem("name"));
      history.push("/");
    } catch (err) {
      window.alert("Senha ou email incorretos");
    }
  };
  return (
    <div className="main">
      <div className="sub-sub-main">
        <h1>Bem-vindo!</h1>O local onde as melhores organizações e os melhores
        profissionais se encontram.
        <div className="login">
          <div>
            <div>
              <h1>Faça seu login</h1>
            </div>
            <div>
              <input
                type="text"
                placeholder="E-mail de acesso"
                className="name"
                value={email}
                required
                onChange={(e) => {
                  handleEmailChange(e);
                }}
              />
            </div>
            <div className="Senha">
              <div>
                <input
                  type="password"
                  placeholder="Senha"
                  className="name"
                  value={password}
                  required
                  onChange={(e) => {
                    handlePasswordChange(e);
                  }}
                />
              </div>
            </div>
            <div>
              <p className="link">
                <a href="/password_recovery">Esqueceu a Senha?</a>
              </p>
            </div>
            <p>
              <button onClick={handleClick}>Entrar</button>
            </p>
            <div>
              <p className="link_cadastro">
                Ainda não tem conta? <a href="/cadastro">Cadastre-se</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
