import React, { useState } from "react";
import "./feed.css";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import PaginaVaga from "../../pages/Vaga/vaga";

export default function Feed(props) {
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="exterior">
      <div className="titulo">
        <h2>Encontre sua vaga:</h2>
      </div>
      {props.vagas.map((vaga) => {
        return (
          <div className="vaga">
            <h1>
              {vaga.title} - {vaga.name}
            </h1>
            <p>{vaga.city_state}</p>
            <Button variant="contained" onClick={() => setIsModalVisible(true)}>
              Ver mais
            </Button>
            {isModalVisible && (
              <PaginaVaga
                vaga={vaga}
                onClose={() => setIsModalVisible(false)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
