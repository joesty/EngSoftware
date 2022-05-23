import React from "react";
import Job_Opportunity from "../../models/job_opportunity";
import "./curriculo.css";
import { useHistory } from "react-router-dom";

function Curriculo() {

  const history = useHistory();

  function handleClick (event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const job_opportunity = new Job_Opportunity(
      data.get("title"), 
      data.get("salary"),
      data.get("workload"),
      data.get("meal_ticket"),
      data.get("health_insurance"),
      data.get("transportation_vouchers"),
      data.get("study_incentive"),
      data.get("home_office_help"),
      data.get("city_state"),
      data.get("description")
    );
    var success = job_opportunity.createJob();
    if (success)
      history.push("/home");
    else
      console.log("erro")
  };

    return (
      <div className="main"> 
        <div>
          <div className="titulo">
            <h1>Cadastre seu curriculo</h1>
          </div>
            <div className="caixa">
              <div>
                <div className="descrição">
                  <h1>Escreva suas experiências, deixe seu perfil atraente para as empresas</h1>
                </div>
                <div className="caixa_de_texto_grande">
                    <textarea type="text" placeholder="Cursos" className="description" id="description" name="description"/>
                </div>
                <div className="caixa_de_texto_grande">
                    <textarea type="text" placeholder="Coloque aqui suas experiências" className="description" id="description" name="description"/>
                </div>
                <div className="caixa_de_texto_grande">
                    <textarea type="text" placeholder="Coloque aqui suas habilidades" className="description" id="description" name="description"/>
                </div>
                <div>
                <button className="button" onClick={handleClick}>
                    Atualizar
                </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }

export default Curriculo;
