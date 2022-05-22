import React from "react";
import "./esqueceu-a-senha.css";

function EsqueceuASenha() {
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
            <input type="text" placeholder="E-mail" className="name" />
          </div>
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default EsqueceuASenha;
