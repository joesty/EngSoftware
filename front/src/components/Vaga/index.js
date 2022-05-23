import React from "react";
import "./vaga.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";

export default function Vaga({ vaga, onClose = () => {} }) {
  console.log(vaga);
  console.log(onClose);
  return (
    <div className="modal">
      <div className="conteiner_modal">
        <button className="close" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="content_modal">
          <div className="vaga">
            <h1 className="titulo">
              {vaga.title} - {vaga.name}
            </h1>
            <b>{vaga.city_state}</b>
            <div className="descricao-beneficios">
              <div className="descricao">
                <p>{vaga.description}</p>
              </div>
              <div className="beneficios">
                <b>Benefícios</b>
                {vaga.salary && (
                  <div className="linhaBeneficios">
                    <div className="icones">
                      <AttachMoneyIcon />
                    </div>
                    <div className="valorBeneficio">
                      Salario: R$ {vaga.salary}
                    </div>
                  </div>
                )}
                {vaga.contact_email && (
                  <div className="linhaBeneficios">
                    <div className="icones">
                      <EmailIcon />
                    </div>
                    <div className="valorBeneficio">Email: {vaga.contact_email}</div>
                  </div>
                )}
              </div>

              <a
                className="emailFooter"
                href={`mailto:${vaga.contact_email}?subject=Contato&body=Olá%20como%20vai?%20Segue%20em%20anexo%20meu%20curriculo%20para%20a%20vaga%20de%20${vaga.title}.`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <button>Concorrer a vaga</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
