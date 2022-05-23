import * as React from "react";
import { useHistory } from "react-router-dom";
import "./cadastro.css";

function Cadastro() {
  const history = useHistory();

  function alunoClick() {
    history.push("/cadastrar_aluno");
  }

  function empresaClick() {
    history.push("/cadastrar_empresa");
  }

  return (
    <div className="cadastro_div">
      <button className="botao_cadastro" type="button" onClick={alunoClick}>
        Cadastrar como aluno
      </button>
      <button className="botao_cadastro" type="button" onClick={empresaClick}>
        Cadastrar como empresa
      </button>
    </div>
  );
}
export default Cadastro;
