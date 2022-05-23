import React from "react";
import "./feed.css";
import { useHistory } from "react-router-dom";
import Modal from "../Modal";

export default function Feed(props) {
  const history = useHistory();

  return (
    <div className="exterior">
      <div className="titulo">
        <h2>Encontre sua vaga:</h2>
      </div>
      {props.vagas.map((vaga, index) => {
        return <Modal key={index} vaga={vaga} />;
      })}
    </div>
  );
}
