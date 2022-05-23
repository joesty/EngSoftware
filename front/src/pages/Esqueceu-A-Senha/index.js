import React, { useState } from "react";
import "./esqueceu-a-senha.css";
import api from "../../services/api";
import { useHistory } from "react-router";

function EsqueceuASenha() {

  const [email, setEmail] = useState('')

  const history = useHistory()

  const handleEmailChange =(e)=>{
    setEmail(e.target.value);
  }

  const handleClick = async e => {
    try {
        const response = await api.post("/api/password_recovery/", { email});
        window.alert("Sua nova senha foi enviada para seu email")
        history.push("/login")
      } catch (err) {
          window.alert("Email não cadastrado")
      }
    }

  return (
    <div className="main">
      <div className="caixa">
        <div>
          <div>
            <h1>Encontre sua conta</h1>
            <div className="descrição">
              Insira seu email ou número de celular para procurar a sua conta.
            </div>
          </div>
          <div className="caixa_de_texto">
            <input type="text" placeholder="E-mail" className="name" value={email} onChange={handleEmailChange} />
          </div>
          <button onClick={handleClick}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default EsqueceuASenha;
