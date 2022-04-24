import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import CadastrarAluno from "./pages/cadastrar-aluno";
import CadastrarEmpresa from "./pages/cadastrar-empresa";

ReactDOM.render(
  <CadastrarAluno />,
  // <CadastrarEmpresa />,

  document.getElementById("root")
);
