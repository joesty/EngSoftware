import React, { useState } from "react";
import "./modal.css";
import { Button } from "@mui/material";
import PaginaVaga from "../../pages/Vaga/vaga";

export default function Modal({ vaga }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
        <PaginaVaga vaga={vaga} onClose={() => setIsModalVisible(false)} />
      )}
    </div>
  );
}
