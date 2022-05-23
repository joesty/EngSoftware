import React from "react";
import "./vaga.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import ComputerIcon from "@mui/icons-material/Computer";
import SchoolIcon from "@mui/icons-material/School";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

export default function Vaga(props) {
  // console.log(props);
  return (
    <div className="vaga">
      <h1 className="titulo">
        {props.vaga.cargo} - {props.vaga.empresa}
      </h1>
      <b>{props.vaga.localizacao}</b>
      <div className="descricao-beneficios">
        <div className="descricao">
          <p>{props.vaga.descricao}</p>
        </div>
        <div className="beneficios">
          <b>Benefícios</b>
          {props.vaga.beneficios.salario && (
            <div className="linhaBeneficios">
              <div className="icones">
                <AttachMoneyIcon />
              </div>
              <div className="valorBeneficio">
                Salario: R$ {props.vaga.beneficios.salario}
              </div>
            </div>
          )}
          {props.vaga.beneficios.valeRefeicao && (
            <div className="linhaBeneficios">
              <div className="icones">
                <LocalDiningIcon />
              </div>
              <div className="valorBeneficio">
                Vale Refeicao: R$ {props.vaga.beneficios.valeRefeicao}
              </div>
            </div>
          )}
          {props.vaga.beneficios.valeTransporte && (
            <div className="linhaBeneficios">
              <div className="icones">
                <DirectionsBusIcon />
              </div>
              <div className="valorBeneficio">
                Vale Transporte: R$ {props.vaga.beneficios.valeTransporte}
              </div>
            </div>
          )}
          {props.vaga.beneficios.planoSaude && (
            <div className="linhaBeneficios">
              <div className="icones">
                <MedicalServicesIcon />
              </div>
              <div className="valorBeneficio">
                Plano Saúde: R$ {props.vaga.beneficios.planoSaude}
              </div>
            </div>
          )}
          {props.vaga.beneficios.auxilioHomeOffice && (
            <div className="linhaBeneficios">
              <div className="icones">
                <ComputerIcon />
              </div>
              <div className="valorBeneficio">
                Auxílio Home Office: R${" "}
                {props.vaga.beneficios.auxilioHomeOffice}
              </div>
            </div>
          )}
          {props.vaga.beneficios.incentivoEstudo && (
            <div className="linhaBeneficios">
              <div className="icones">
                <SchoolIcon />
              </div>
              <div className="valorBeneficio">
                Incentivo ao Estudo: R$ {props.vaga.beneficios.incentivoEstudo}
              </div>
            </div>
          )}
        </div>
        <button>
          Concorrer a vaga
        </button>
      </div>
    </div>
  );
}
