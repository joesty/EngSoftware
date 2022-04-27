/*
<<<<<<< HEAD
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import CadastrarAluno from "./pages/cadastrar-aluno";
import CadastrarEmpresa from "./pages/cadastrar-empresa";

ReactDOM.render(
  <CadastrarAluno />,
  // <CadastrarEmpresa />,

  document.getElementById("root")
=======
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
