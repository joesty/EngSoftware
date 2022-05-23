import "./feed.css";
import { useHistory } from "react-router-dom";

export default function Feed(props) {

  const history = useHistory();

  function handleClick(){
      history.push("/curriculo")
  }

  return (
    <div className="exterior">
      <div className="titulo">
          <h2>Encontre sua vaga:</h2>
      </div>
      <div className="button">
        <button onClick={handleClick}> 
          Editar Curriculo 
        </button>
      </div>
        {props.vagas.map((vaga) => (
          <div className="vaga">
            <h1>
              {vaga.cargo} - {vaga.empresa}
            </h1>
            <p>{vaga.localizacao}</p>
          </div>
        ))}
    </div>
  );
}