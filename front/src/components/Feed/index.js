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
        {props.vagas.map((vaga) => (
          <div className="vaga">
            <h1>
              {vaga.title} - {vaga.name} 
            </h1>
            <p>{vaga.city_state}</p>
          </div>
        ))}
    </div>
  );
}