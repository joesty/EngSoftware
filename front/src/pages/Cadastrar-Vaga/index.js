import React, { useState } from "react";
import Job_Opportunity from "../../models/job_opportunity";
import "./cadastrar-vaga.css";
import { useHistory } from "react-router-dom";
import api from "../../services/api";


function CadastrarVaga() {
    const history = useHistory();

    const [title , setTitle] = useState('');
    const [salary , setSalary] = useState('');
    const [workload , setWorkload] = useState('');
    const [meal_ticket , setMealTicket] = useState('');
    const [health_insurance , setHealthInsurance] = useState('');
    const [transportation_vouchers, setTransportationVouchers] = useState('');
    const [study_incentive, setStudyIncentive] = useState('');
    const [home_office_help, setHomeOfficeHelp] = useState('');
    const [city_state , setCityState] = useState('');
    const [description , setDescription] = useState('');


    //função para atualizar valores do formulario
    const handleTitleChange =(e)=>{
        setTitle(e.target.value);
    }
    const handleSalaryChange =(e)=>{
        setSalary(e.target.value);
    }
    const handleWorkloadChange =(e)=>{
      setWorkload(e.target.value);
    }
    const handleMealTicketChange =(e)=>{
        setMealTicket(e.target.value);
    }
    const handleHealthInsuranceChange =(e)=>{
      setHealthInsurance(e.target.value);
    }
    const handleTransportationVouchersChange =(e)=>{
        setTransportationVouchers(e.target.value);
    }
    const handleStudyIncentiveChange =(e)=>{
      setStudyIncentive(e.target.value);
    }
    const handleHomeOfficeHelpChange =(e)=>{
      setHomeOfficeHelp(e.target.value);
    }
    const handleCityStateChange =(e)=>{
      setCityState(e.target.value);
    }
    const handleDescriptionChange =(e)=>{
      setDescription(e.target.value);
    }
    const enterprise_id = "00000000-0000-0000-0000-000000000016"
    //função para salvar no banco de dados
    const handleClick = async e => {
    try {
        const response = await api.post("/jobs/", { 
          title, description, meal_ticket, health_insurance, transportation_vouchers, study_incentive, home_office_help, city_state,
          salary, workload, enterprise_id
        });
        console.log(response.data);
        window.alert("Vaga divulgada com Sucesso")
        history.push("/feed")
      } catch (err) {
          window.alert("Alguns campos estão errados, tente corrigir antes de divulgar")
      }
    }
  
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
                    <input type="text" placeholder="Nome da vaga" className="name" id="title" name="title"
                    value={title} required onChange={(e) => {handleTitleChange(e)}} />
                  </div>
                  <div className="caixa_de_texto_pequena_esquerda">
                    <input type="text" placeholder="Valor da bolsa" className="name" id="salary" name="salary"
                    value={salary} required onChange={(e) => {handleSalaryChange(e)}}/>
                  </div>
                  <div className="caixa_de_texto_pequena_direita">
                    <input type="text" placeholder="Carga horária semanal" className="name" id="workload" name="workload"
                    value={workload} required onChange={(e) => {handleWorkloadChange(e)}} />
                  </div>
                  <div className="caixa_de_texto_pequena_esquerda">
                    <input type="text" placeholder="Vale refeição" className="name" id="meal_ticket" name="meal_ticket"
                    value={meal_ticket} required onChange={(e) => {handleMealTicketChange(e)}}/>
                  </div>
                  <div className="caixa_de_texto_pequena_direita">
                    <input type="text" placeholder="Plano de saúde" className="name" id="health_insurance" name="health_insurance"
                    value={health_insurance} required onChange={(e) => {handleHealthInsuranceChange(e)}}/>
                  </div>
                  <div className="caixa_de_texto_pequena_esquerda">
                    <input type="text" placeholder="Vale transporte" className="name" id="transportation_vouchers" name="transportation_vouchers"
                    value={transportation_vouchers} required onChange={(e) => {handleTransportationVouchersChange(e)}}/>
                  </div>
                  <div className="caixa_de_texto_pequena_direita">
                    <input type="text" placeholder="Incentivo a estudo" className="name" id="study_incentive" name="study_incentive"
                    value={study_incentive} required onChange={(e) => {handleStudyIncentiveChange(e)}}/>
                  </div>
                  <div className="caixa_de_texto_pequena_esquerda">
                    <input type="text" placeholder="Auxílio home office" className="name" id="home_office_help" name="home_office_help"
                    value={home_office_help} required onChange={(e) => {handleHomeOfficeHelpChange(e)}}/>
                  </div>
                  <div className="caixa_de_texto_pequena_direita">
                    <input type="text" placeholder="Cidade/Estado" className="name" id="city_state" name="city_state"
                    value={city_state} required onChange={(e) => {handleCityStateChange(e)}}/>
                  </div>
                  <div className="caixa_de_texto_grande">
                    <textarea type="text" placeholder="Descrição" className="description" id="description" name="description"
                    value={description} required onChange={(e) => {handleDescriptionChange(e)}}/>
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
