import React from "react";
import Job_Opportunity from "../../models/job_opportunity";
import "./cadastrar-vaga.css";
import { useHistory } from "react-router-dom";

function CadastrarVaga() {

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
            <h1>Já está quase lá ...</h1>
          </div>
            <div className="caixa">
              <div>
                <div className="descrição">
                  <h1>Divulgue sua oportunidade de estágio</h1>
                </div>
                  <div className="caixa_de_texto">
                    <input type="text" placeholder="Nome da vaga" className="name" id="title" name="title"/>
                  </div>
                  <div className="caixa_de_texto_pequena_esquerda">
                    <input type="text" placeholder="Valor da bolsa" className="name" id="salary" name="salary"/>
                  </div>
                  <div className="caixa_de_texto_pequena_direita">
                    <input type="text" placeholder="Carga horária semanal" className="name" id="workload" name="workload"/>
                  </div>
                  <div className="caixa_de_texto_pequena_esquerda">
                    <input type="text" placeholder="Vale refeição" className="name" id="meal_ticket" name="meal_ticket"/>
                  </div>
                  <div className="caixa_de_texto_pequena_direita">
                    <input type="text" placeholder="Plano de saúde" className="name" id="health_insurance" name="health_insurance"/>
                  </div>
                  <div className="caixa_de_texto_pequena_esquerda">
                    <input type="text" placeholder="Vale transporte" className="name" id="transportation_vouchers" name="transportation_vouchers"/>
                  </div>
                  <div className="caixa_de_texto_pequena_direita">
                    <input type="text" placeholder="Incentivo a estudo" className="name" id="study_incentive" name="study_incentive"/>
                  </div>
                  <div className="caixa_de_texto_pequena_esquerda">
                    <input type="text" placeholder="Auxílio home office" className="name" id="home_office_help" name="home_office_help"/>
                  </div>
                  <div className="caixa_de_texto_pequena_direita">
                    <input type="text" placeholder="Cidade/Estado" className="name" id="city_state" name="city_state"/>
                  </div>
                  <div className="caixa_de_texto_grande">
                    <textarea type="text" placeholder="Descrição" className="description" id="description" name="description"/>
                  </div>
                    <button onClick={handleClick}>
                      Divulgar
                    </button>
              </div>
            </div>
        </div>
      </div>
    );
  }

export default CadastrarVaga;
