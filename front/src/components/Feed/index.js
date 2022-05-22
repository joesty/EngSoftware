import "./feed.css";

export default function Feed(props) {
  return (
    <>
    <div className= "bem-vindo">
        <h1>Bem-vindo!</h1>
    </div>
      {props.vagas.map((vaga) => (
        <div className="vaga">
          <h1>
            {vaga.cargo} - {vaga.empresa}
          </h1>
          <p>{vaga.localizacao}</p>
        </div>
      ))}
    </>
  );
}