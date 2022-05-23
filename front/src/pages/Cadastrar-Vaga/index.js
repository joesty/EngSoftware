import React, { useState } from "react";
import Job_Opportunity from "../../models/job_opportunity";
import "./cadastrar-vaga.css";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

function CadastrarVaga() {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [workload, setWorkload] = useState("");
  const [city_state, setCityState] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  //função para atualizar valores do formulario
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };
  const handleWorkloadChange = (e) => {
    setWorkload(e.target.value);
  };
  const handleCityStateChange = (e) => {
    setCityState(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const enterprise_name = localStorage.getItem("name");
  //função para salvar no banco de dados
  const handleClick = async (e) => {
    try {
      console.log(enterprise_name);
      const response = await api.post("/jobs/", {
        title: title,
        description: description,
        city_state: city_state,
        salary: salary,
        workload: workload,
        name: enterprise_name,
        contact_email: email,
      });
      console.log(response.data);
      window.alert("Vaga divulgada com Sucesso");
      history.push("/feed");
    } catch (err) {
      window.alert(
        "Alunos não podem cadastrar vagas, tente entrar como uma empresa"
      );
    }
  };

  return (
    <div className="main">
      <div>
        <div className="titulo">
          <h1>Já está quase lá ...</h1>
        </div>
        <div className="caixa">
          <div>
            <div className="descrição">
              <h1>Divulgue sua oportunidade de estágio</h1>
            </div>
            <div className="caixa_de_texto">
              <input
                type="text"
                placeholder="Nome da vaga"
                className="name"
                id="title"
                name="title"
                value={title}
                required
                onChange={(e) => {
                  handleTitleChange(e);
                }}
              />
            </div>
            <div className="caixa_de_texto_pequena_esquerda">
              <input
                type="text"
                placeholder="Valor da bolsa"
                className="name"
                id="salary"
                name="salary"
                value={salary}
                required
                onChange={(e) => {
                  handleSalaryChange(e);
                }}
              />
            </div>
            <div className="caixa_de_texto_pequena_direita">
              <input
                type="text"
                placeholder="Carga horária semanal"
                className="name"
                id="workload"
                name="workload"
                value={workload}
                required
                onChange={(e) => {
                  handleWorkloadChange(e);
                }}
              />
            </div>
            <div className="caixa_de_texto_pequena_esquerda">
              <input
                type="text"
                placeholder="Email de contato"
                className="name"
                id="email"
                name="email"
                value={email}
                required
                onChange={(e) => {
                  handleEmailChange(e);
                }}
              />
            </div>
            <div className="caixa_de_texto_pequena_direita">
              <input
                type="text"
                placeholder="Cidade/Estado"
                className="name"
                id="city_state"
                name="city_state"
                value={city_state}
                required
                onChange={(e) => {
                  handleCityStateChange(e);
                }}
              />
            </div>
            <div className="caixa_de_texto_grande">
              <textarea
                type="text"
                placeholder="Descrição"
                className="description"
                id="description"
                name="description"
                value={description}
                required
                onChange={(e) => {
                  handleDescriptionChange(e);
                }}
              />
            </div>
            <button onClick={handleClick}>Divulgar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastrarVaga;
